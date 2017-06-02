import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import template from "./signup.component.html";

@Component({
  selector: "signup",
  template
})
export class SignupComponent {
    constructor(public fb: FormBuilder,private router: Router ) {
         console.log(Meteor.userId());
    }
    public signupForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
        
    });
    
    doSignup(event) {
        event.preventDefault();
        console.log(event);
        console.log(this.signupForm.value);
        var input = this.signupForm.value;
        Accounts.createUser({
            email:input.email,
            password:input.password
        });
        this.router.navigate(['/']);

  }
}
