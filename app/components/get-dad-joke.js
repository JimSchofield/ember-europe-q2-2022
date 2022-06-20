import Component from '@glimmer/component';
import dadJokePromise from '../utils/dad-joke-promise';
import PromiseHandler from '../utils/promise-handler';

export default class GetDadJokeComponent extends Component {
  constructor() {
    super(...arguments);

    this.fetchHandler = new PromiseHandler(dadJokePromise);
  }

  get joke() {
    return this.fetchHandler.value?.joke;
  }

  get error() {
    return this.fetchHandler.error;
  }
}
