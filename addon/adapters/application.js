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
			headers['authorization'] = 'Bearer s7a2evc5izcvefyr3ikrhnn6h8kf70';
			return headers;
		}
	})
});
