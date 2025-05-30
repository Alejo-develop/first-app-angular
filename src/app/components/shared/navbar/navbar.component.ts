import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: `
    nav {
      display: flex;
      justify-content: space-around;
      background-color: #212121;
      color: white;
      padding: 10px;
    }
    a {
      color: white;
      text-decoration: none;
    }
    nav a.active {
      color: red;
    }
  `,
})
export class NavbarComponent {}
