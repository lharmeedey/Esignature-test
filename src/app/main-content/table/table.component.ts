import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  fontFamily: string = 'Source Code Pro, serif';
  fontStyle() {
    return {
      'font-family': this.fontFamily,
      // 'font-size': fontSize,
      // 'font-weight': fontWeight,
    };
  }
}
