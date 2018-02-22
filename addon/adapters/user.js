import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindRecord(id){
    return `${this.get('host')}/${this.get('namespace')}/users?id=${id}`;
  }
});
