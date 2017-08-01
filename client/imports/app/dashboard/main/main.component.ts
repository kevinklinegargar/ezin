import { Component, OnInit,TemplateRef } from "@angular/core";
import { Demo } from "../../../../../both/models/demo.model";
import template from "./main.component.html";


@Component({
  selector: "dashboard",
  template
})
export class MainComponent implements OnInit {


  constructor() {

  }

    ngOnInit() {
  
    //  console.log($("body"));
    }
    
}
