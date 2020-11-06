import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'crud';

  constructor(private _dataService:UserServiceService) { }


  users = [];
  msg:string = "";
  onAddUser(name,email,pass,compass){
    if(!pass==compass)
    {
      this.msg = "password not match re-enter it..."; 

    }
    else
    {
      this.users.push({
        uname:name.value,
        uemail:email.value,
        upass:pass.value
        
      });
      
        this._dataService.saveUser(this.users).subscribe(
          (response) => console.log(response),
          (err) => console.log(err)
        )  
    }
  
    }
    onDeleteUser(){
    this.users.splice(this.users.length-1)
     
  }

  
}
