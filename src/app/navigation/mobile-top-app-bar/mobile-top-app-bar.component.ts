import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-top-app-bar',
  templateUrl: './mobile-top-app-bar.component.html',
  styleUrl: './mobile-top-app-bar.component.scss'
})
  
export class MobileTopAppBarComponent {
  constructor () { }
  @Input() text: string = 'Chronic Disease Tracker';
  

}
