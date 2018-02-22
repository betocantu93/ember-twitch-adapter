import DS from 'ember-data';

import { underscore } from '@ember/string';

export default DS.JSONAPISerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    let normalized = payload.data.map((record) => {
       return {
         id: record.id,
         type: 'videos',
         attributes: {
           created_at: record.created_at,
           description: record.description,
           duration: record.duration,
           language: record.language,
           published_at: record.published_at,
           thumbnail_url: record.thumbnail_url,
           title: record.title,
           url: record.url,
           viewer_count: record.viewer_count,
           viewable: record.viewable,
         },
         relationships: {
           user: {
             data: {
               type: "users", id: record.user_id
             }
           }
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
