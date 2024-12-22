import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
  fontFamily: string = 'Source Code Pro, serif';
  fontStyle(fontWeight: string, fontSize:string) {
    return {
      'font-family': this.fontFamily,
      'font-size': fontSize,
      'font-weight': fontWeight,
    };
  }
}
