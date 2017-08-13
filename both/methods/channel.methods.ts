import {Channels} from '../collections/channels.collection';
import {Email} from 'meteor/email';
import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';
Meteor.methods({
    'channels.create':function(name:string){
        check(name, String);

    
        Channels.insert({ name: name });

        return true;
    }

});