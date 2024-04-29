import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Enter your name";
  age=21;
  getAge()
  {
    return this.age;
  };

  getData(inputValue)
  {
      this.title=inputValue;
  };

  getCount(operation)
  {    
      operation==="Increment"?this.age++:this.age--;
  };


  //reactive form code
  // logginApp=new FormGroup({
  //  UserTxt:new FormControl(''),
  //  passwordtxt:new FormControl('')
  // })




  // LoggedIn()
  //  {  
  //   try
  //   {   
  //     alert(this.logginApp.controls['UserTxt'].value);
  //     // alert(this.loginform.)
  //   }
  //   catch(ex)
  //   {
  //        alert(ex);
  //   }
  //  };

  //formModule Code

  LoggedIn(Data:any)
  {
     const userValue=Data.UserTxt;
        alert(userValue);
  };

}
