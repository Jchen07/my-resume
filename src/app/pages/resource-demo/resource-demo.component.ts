import { Component, resource, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'jc-resource-demo',
  imports: [JsonPipe, FormsModule],
  templateUrl: './resource-demo.component.html',
})
export class ResourceDemoComponent {
  test = signal('Google');
  testResource = resource({
    params: () => this.test(),
    loader: async ({ params, abortSignal }) => {
      const res: Response = await fetch(`https://api.github.com/orgs/${params}`, {
        signal: abortSignal,
      });
      return res.json();
    },
  });

  id = signal(1);
  swPersonResource = httpResource(() => `https://swapi.info/api/people/${this.id()}`);
}
