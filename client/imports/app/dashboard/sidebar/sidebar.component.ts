import { Component, OnInit,TemplateRef,AfterViewInit } from "@angular/core";
import { Demo } from "../../../../../both/models/demo.model";
import template from "./sidebar.component.html";
import * as $ from 'jquery';

@Component({
	selector: "sidebar",
	template
})
export class SidebarComponent implements OnInit,AfterViewInit {


	constructor() {

	}

	ngOnInit() {
		
	}
	ngAfterViewInit(){
	
		$(".button-collapse").sideNav();
		$('.modal').modal();
		
	}
	addChannel(event){
		console.log(event);
		alert("click");
	}
	
}
