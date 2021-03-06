import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-messages ui-messages-error">
      {{ text }}
    </div>
    `,

  styles: [`.ui-messages-error {
    font-size: 15px;
    margin: 0 auto;
    margin-top: 8px;
    align-items: center;
    height: 30px;
    }`
  ]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.touched;
  }
}
