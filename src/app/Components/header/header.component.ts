import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle:boolean=false
  constructor() { }
  
  ngOnInit(): void {
  }
  Menu(){
   this.toggle = !this.toggle
  }
} 
