import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {User} from './signup.interface';
import { PasswordValidation } from './password-validation';
import template from "./signup.component.html";

@Component({
  selector: "signup",
  template
})
export class SignupComponent implements OnInit{
	signupForm: FormGroup;
	constructor(public fb: FormBuilder,private router: Router ) {
		// console.log(Meteor.userId());
		
	}
	ngOnInit(){
		this.signupForm = this.fb.group({
			email:[""],
			username: ["",[Validators.required,Validators.minLength(2)] ],
			password: ["", Validators.required],
			confirmPassword:["",Validators.required]
			
		},
		{
			validator: PasswordValidation.MatchPassword

		});
	}
	
	
	doSignup({ value, valid }: { value: User, valid: boolean }) {
		if(valid == true){
			Accounts.createUser({
				email: value.email,
				password: value.password
			},function(error){
				if(error){
					console.log(error.reason);
				}else{
					console.log("success create user");
				}
			});
		}
	   console.log(value,valid);

	}
}
