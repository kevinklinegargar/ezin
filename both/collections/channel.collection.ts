import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Channel } from '../models/channel.model';

export const Parties = new MongoObservable.Collection<Channel>('channel');

function loggedIn() {
  return !!Meteor.user();
}

// Parties.allow({
//     insert: loggedIn,
//     update: loggedIn,
//     remove: loggedIn
// });