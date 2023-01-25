import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/user.service';

@Component({
  selector: 'app-compte-user',
  templateUrl: './compte-user.component.html',
  styleUrls: ['./compte-user.component.css']
})

export class CompteUserComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
}

