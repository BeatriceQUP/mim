import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navItems = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Services', link: 'services' },
    { name: 'Contact', link: 'contact' },
  ];

}
