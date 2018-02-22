import DS from 'ember-data';

import { underscore } from '@ember/string';

export default DS.JSONAPISerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    let normalized = payload.data.map((record) => {
       return {
         id: record.id,
         type: 'games',
         attributes: {
           name: record.name,
           box_art_url: record.box_art_url
         }
       }
     });
     payload.data = normalized.length == 1 ? normalized.pop() : normalized;
     
     return this._super(...arguments);;
  },

  keyForAttribute(attr) {
    return underscore(attr);
  }

});
