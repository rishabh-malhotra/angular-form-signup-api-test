import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signup-api';
  public registeredData:Object;
  constructor(private getSignupData:SignupService){}
  registerUser(form:NgForm){
    this.getSignupData.regUser(form.value).subscribe((status:Object)=>{this.displaySignupData(status)});
    
  }
  displaySignupData(data){
    this.registeredData=data;
  }
}
