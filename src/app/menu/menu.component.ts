import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild('test') input!: ElementRef;

  logo:string = `Techform`;
  menu = [
    {text: "Home",  icon: "home"},
    {text: "Trending",  icon: "trending_up"},
    {text: "Articles", icon: "bookmark"},
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
  ngAfterViewInit() {
    console.log(this.input.nativeElement);
  }
  getItemLocation(e:any){
   let result = e.target.offsetTop - (e.target.offsetHeight) + 5;
   this.input.nativeElement.style.top = `${result}px`;
   this.input.nativeElement.style.width = `${e.target.parentElement.offsetWidth + 15}px`;
   console.log(e.target.parentElement.offsetWidth);
  }

}
