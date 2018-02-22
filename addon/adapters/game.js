import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForFindAll(){
    return `${this.get('host')}/${this.get('namespace')}/games/top`;
  },
  urlForFindRecord(id){
    return `${this.get('host')}/${this.get('namespace')}/games?id=${id}`;
  }
});
