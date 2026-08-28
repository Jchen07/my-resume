import { ChangeDetectionStrategy, Component, resource, signal } from '@angular/core';
import {
  email,
  form,
  FormField,
  minLength,
  required,
  submit,
  validate,
  validateAsync,
} from '@angular/forms/signals';

interface ContactModel {
  name: string;
  email: string;
  message: string;
}

const FORBIDDEN_NAME = 'Jie';
const TAKEN_EMAIL = 'test@example.com';

@Component({
  selector: 'jc-contact',
  imports: [FormField],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center justify-center flex-col h-screen w-screen',
  },
})
export class ContactComponent {
  protected readonly model = signal<ContactModel>({ name: '', email: '', message: '' });
  protected readonly sent = signal(false);

  protected readonly contactForm = form(this.model, path => {
    required(path.name, { message: 'Name is required.' });
    validate(path.name, ({ value }) =>
      value().trim() === FORBIDDEN_NAME
        ? { kind: 'forbiddenName', message: `"${FORBIDDEN_NAME}" is not allowed.` }
        : null
    );

    required(path.email, { message: 'Email is required.' });
    email(path.email, { message: 'Enter a valid email address.' });
    validateAsync(path.email, {
      params: ({ value }) => value(),
      factory: emailValue =>
        resource({
          params: () => emailValue(),
          loader: async ({ params }) => {
            if (!params) {
              return true;
            }
            // Simulate a backend uniqueness check.
            await new Promise(resolve => setTimeout(resolve, 800));
            return params !== TAKEN_EMAIL;
          },
        }),
      onSuccess: isUnique =>
        isUnique === false
          ? { kind: 'emailNotUnique', message: 'That email is already registered.' }
          : null,
      onError: () => ({ kind: 'emailCheckFailed', message: 'Could not verify the email.' }),
    });

    required(path.message, { message: 'Message is required.' });
    minLength(path.message, 10, { message: 'Message must be at least 10 characters.' });
  });

  protected async onSubmit(): Promise<void> {
    const ok = await submit(this.contactForm, async submitted => {
      // Pretend to POST the form here.
      console.log('Contact form submitted!', submitted().value());
      return undefined;
    });

    if (ok) {
      this.sent.set(true);
      this.model.set({ name: '', email: '', message: '' });
      this.contactForm().reset();
    }
  }
}
