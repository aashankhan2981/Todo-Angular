import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Proffession:string=''
  Name:string=''
  Client:any
  constructor() {
    const stored =  localStorage.getItem("details")
    if(stored){
      this.Client = JSON.parse(stored)
    }
    else{
      this.Client=false
    }
    
   }

  ngOnInit(): void {
  }
  Update(){
    this.Client = false
  }
  getDetails(details:any){
    details.preventDefault()
    if(this.Proffession!=='' && this.Name!=='' ){
      this.Client = {
        name:this.Name,
        gender:this.Proffession

      }
      localStorage.setItem("details",JSON.stringify(this.Client))
      
    }
   else{
     alert("Plz fill the fields first")
   }
  }
}
