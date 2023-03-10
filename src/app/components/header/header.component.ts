import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('themeButton') themeButton:ElementRef; 
  darkTheme:boolean = false;
  photoName:String = "logo-white-transparent.png";


  constructor(
    public authService: AuthService,
    
    private ref : ElementRef,

  ) { }

  ngOnInit() { 

  }
  switchTheme(){
      const parentElement = this.ref.nativeElement.closest('#dataTheme');
     
      if(parentElement.getAttribute("data-theme")=="dark"){
        parentElement.setAttribute("data-theme","light");
        this.darkTheme=true;
        this.photoName="logo-no-background.png";
      }else{
        parentElement.setAttribute("data-theme","dark");
        this.darkTheme=false;
        this.photoName="logo-white-transparent.png";



      }
     

    }

}