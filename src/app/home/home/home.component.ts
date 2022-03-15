import { Component, HostListener, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeSection = 1;

  constructor(
  
  ) { }

  ngOnInit(): void {
  }



}
