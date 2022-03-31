import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  {
  title = 'Home-page-task';

  menuVisible = false
  searchVisible = false

  constructor(){

  }

  public ngOnInit(): void {}

  public get screenWith():number {
    return document.body.offsetWidth 
  }

  public openMenu = () => {
    this.menuVisible = true
  }

  public closeMenu = () => {
    this.menuVisible = false
  }

  public openSearch = () => {
    this.searchVisible = true
  }

  public closeSearch = () => {
    this.searchVisible = false
  }


}
