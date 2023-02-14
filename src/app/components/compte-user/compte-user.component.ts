import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { AuthService } from 'src/app/service/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, query, where, getDocs, doc, deleteDoc,getFirestore } from "firebase/firestore";
import { getAuth,onAuthStateChanged  } from "firebase/auth";
import { Routes } from 'src/app/model/routes';
import { MapComponent } from 'src/app/components/map/map.component';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-compte-user',
  templateUrl: './compte-user.component.html',
  styleUrls: ['./compte-user.component.css'],
  providers:[MapComponent]
})

export class CompteUserComponent implements OnInit {
  @ViewChild('favories') favories: ElementRef;
  public routes:Routes[]=[]



  constructor(public authService: AuthService,private firestore: AngularFirestore,private mapCompo:MapComponent,private router:Router) {
   
  }
  async ngOnInit(): Promise<void> {
   
    const auth=getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(this.firestore.firestore, "routes"), where("userMail", "==", user.email));
        const querySnapshot = await getDocs(q);
        var count=querySnapshot.size;
        var html="";
        querySnapshot.forEach((doc) => {
          var test = JSON.parse(JSON.stringify(doc.data()));
          var currRoute = new Routes();
          currRoute.count=count--;
          currRoute.addedAt=test.addedAt;
          currRoute.id=doc.id;
          currRoute.latArrive=test.latArrive
          currRoute.lngArrive=test.lngArrive
          currRoute.nomArrive=test.nomArrive
          currRoute.latDepart=test.latDepart
          currRoute.lngDepart=test.lngDepart
          currRoute.nomDepart=test.nomDepart
          this.routes.push(currRoute);
          
        });
      } else {
      }
    })

   
  }

  goToRoute(route:Routes){
    const navigationExtras: NavigationExtras = {
      state: { dataId: route},
    };
this.router.navigate(["/home"], navigationExtras);
  }

  removeRoute(id:string){
    
    const db = getFirestore();
    const docRef = doc(db, "routes", id);


        deleteDoc(docRef)
    .then(() => {
        this.routes=[]
        this.ngOnInit();
    })
    .catch(error => {
        console.log(error);
    })
    
    
  }

  



}