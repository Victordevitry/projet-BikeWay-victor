import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showModalBox:Boolean=false;

  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
  customSignUp(mail:string,password:string){
    this.authService.SignUp(mail, password).then(async ()=>{
      this.showModalBox=true;
      const sleep = (ms: number | undefined) => new Promise(r => setTimeout(r, ms));


    await sleep(1800);
    this.showModalBox=false;

    })
  }
  
}
