import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import template from "./login.component.html";

import {User} from './login.interface';

@Component({
	selector: "login",
	template
})
export class LoginComponent implements OnInit{
	loginForm: FormGroup;
	constructor(public fb: FormBuilder,private router: Router ) {
		// console.log(Meteor.userId());
		
	}
	
	ngOnInit(){
		
		this.loginForm = this.fb.group({
			email: ["",[Validators.required] ],
			password: ["", Validators.required]
			
		});
	}
	doLogin({ value, valid }: { value: User, valid: boolean }) {
		if(valid == true){

			var email = value.email;
			var password = value.password;
			console.log(email,password);
			Meteor.loginWithPassword(email, password,function(err){
				if(err){
					console.log(err);

				}else{
					console.log("success login");
					this.router.navigate(['/']);
				}
			});
		}
	

	}
}
