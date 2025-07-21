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
  searchText = signal('Google');
  textResource = resource({
    params: () => ({ text: this.searchText() }),
    loader: async ({ params, previous, abortSignal }) => {
      console.log(previous);
      const res: Response = await fetch(`https://api.github.com/orgs/${params.text}`, {
        signal: abortSignal,
      });
      return res.json();
    },
  });

  personId = signal(1);
  personResource = httpResource(() => `https://swapi.info/api/people/${this.personId()}`);
}
