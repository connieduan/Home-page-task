import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // screenWidth:number = 0

  constructor() { }

  ngOnInit(): void {
    // this.screenWidth = window.screen.width
  }

  public get screenWith():number {
    return document.body.offsetWidth 
  }

}
