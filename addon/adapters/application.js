import DS from 'ember-data';
import { getWithDefault } from '@ember/object';
import { assert } from '@ember/debug';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.twitch.tv',
  namespace: "helix",
  headers: computed({
		get() {
			let headers = {};
      //This is just wrong, it was just for the tutorial purposes. It will expire in 60 days and almost certainly sure I won't be updating This
      //But please refer to https://dev.twitch.tv/docs/authentication#getting-tokens for a new token, you must create your own Twitch App
			headers['authorization'] = 'Bearer s7a2evc5izcvefyr3ikrhnn6h8kf70';
			return headers;
		}
	})
});
