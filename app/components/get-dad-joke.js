import Component from '@glimmer/component';
import dadJokePromise from '../utils/dad-joke-promise';
import PromiseHandler from '../utils/promise-handler';
import { associateDestroyableChild } from '@ember/destroyable';

export default class GetDadJokeComponent extends Component {
  constructor() {
    super(...arguments);

    this.fetchHandler = associateDestroyableChild(
      this,
      new PromiseHandler(dadJokePromise)
    );
  }

  get joke() {
    return this.fetchHandler.value?.joke;
  }

  get error() {
    return this.fetchHandler.error;
  }
}
