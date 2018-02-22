import ApplicationSerializer from './application';
import { underscore } from '@ember/string';

export default ApplicationSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType){


    let normalized = payload.data.map((record) => {
       return {
         id: record.id,
         type: 'users',
         attributes: {
           broadcaster_type: record.broadcaster_type,
           description: record.description,
           display_name: record.display_name,
           login: record.login,
           offline_image_url: record.offline_image_url,
           profile_image_url: record.profile_image_url,
           type: record.type,
           viewer_count: record.viewer_count
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
