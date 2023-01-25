import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }

}
