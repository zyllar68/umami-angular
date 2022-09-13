import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  burgerActive = false;

  constructor() {}

  ngOnInit(): void {}

  onToggleBurger() {
    this.burgerActive = !this.burgerActive;
  }
}
