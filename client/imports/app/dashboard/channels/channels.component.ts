import { Component, OnInit,TemplateRef,AfterViewInit } from "@angular/core";


import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';


import template from "./channels.component.html";
import style from "./channels.component.scss";

import { Channels } from "../../../../../both/collections/channels.collection";
import { Channel } from "../../../../../both/models/channel.model";


import * as $ from 'jquery';

@Component({
	selector: "channels",
	template,
	styles:[style]
})
export class ChannelsComponent implements OnInit,AfterViewInit {

	channels: Channel;
	channelSub:Subscription;


	ngOnInit() {
		
		MeteorObservable.subscribe('channels');
		 
	
	}
	ngAfterViewInit(){
		
		
	}
	addChannel(event){

	console.log(Channels.find({}).fetch());

		MeteorObservable.call('channels.create', "test channel").subscribe(() => {
			alert('User successfully created the channel.');
		}, (error) => {
			alert(`Failed to invite due to ${error}`);
		});
	}
	
}
