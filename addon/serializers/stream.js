import ApplicationSerializer from './application';
import { underscore } from '@ember/string';

export default ApplicationSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType){


    let normalized = payload.data.map((record) => {
      let comunities = record.community_ids.map((comunity) => {
        return {
          type: "comunities",
          id: comunity
        }
      });
       return {
         id: record.id,
         type: 'streams',
         attributes: {
           language: record.language,
           started_at: record.started_at,
           thumbnail_url: record.thumbnail_url,
           title: record.title,
           viewer_count: record.viewer_count
         },
         relationships: {
           user: {
             data: { type: "users", id: record.user_id}
           },
           game: {
             data: { type: "games", id: record.game_id}
           },
           comunities: {
             data: comunities
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
