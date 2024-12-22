import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  fontFamily: string = 'Source Code Pro';
  fontSize: string = '14px';
  fontStyle(fontWeight: string, fontSize:string) {
    return {
      'font-family': this.fontFamily,
      'font-size': fontSize,
      'font-weight': fontWeight,
    };
  }
}
