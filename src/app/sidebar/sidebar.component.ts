import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
fontFamily: string = 'Source Code Pro';
fontSize: string = '14px';
  fontStyle = {
    'font-family': this.fontFamily, 'font-size': this.fontSize
  }
}
