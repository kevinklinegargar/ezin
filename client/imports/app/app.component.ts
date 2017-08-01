import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import template from "./app.component.html";
import style from "./app.component.scss";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent implements OnInit{
    
    constructor(
        private route: ActivatedRoute,
        private router: Router) {
        
    }

    ngOnInit() {
        
        if(Meteor.userId()){
            this.router.navigate(['/']);
        }else{
           // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
            this.router.navigate(['login']);
        }
        console.log(Meteor.userId());
   
  }
}
