import { Meteor } from 'meteor/meteor';
// import { Counts } from 'meteor/tmeasday:publish-counts';

import { Channels } from '../../../both/collections/channels.collection';



Meteor.publish('channels', function(name: string) {

    return Channels.find({});
});
