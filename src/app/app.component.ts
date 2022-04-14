import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-chips';
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  languages: any = [{ name: 'English' }, { name: 'French' }, { name: 'Mandarin' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.languages.push({ name: value });
    }
    event.chipInput!.clear();
  }

  remove(language: any): void {
    const index = this.languages.indexOf(language);

    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }
}
