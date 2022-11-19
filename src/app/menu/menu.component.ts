import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  logo:string = `Techform`;
  menu = [
    {text: "Home",  icon: "home", active: false},
    {text: "Trending",  icon: "trending_up", active: true},
    {text: "Articles", icon: "bookmark", active: false},
  ];

  category = [
    {text: "Programming Languages", icon: "terminal"},
    {text: "Web development",    icon: "language"},
    {text: "Data Science", icon: "analytics"},
    {text: "Cyber Security",   icon: "shield"},
  ];

  actions = [
    {text: "Sign up",  icon: "exit_to_app"},
    {text: "Sign in",  icon: "login"},
  ];

  isLogged = false;

  constructor() { }

  ngOnInit(): void {
  }

}
