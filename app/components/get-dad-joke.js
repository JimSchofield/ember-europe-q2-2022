import Component from '@glimmer/component';
import dadJokeFetch from '../utils/dad-joke-promise';
import { trackedFunction } from 'ember-resources/util/function';

export default class GetDadJokeComponent extends Component {
  jokeResource = trackedFunction(this, async () => {
    if (this.controller) {
      this.controller.abort();
    }

    this.controller = new AbortController();

    const { signal } = this.controller;

    try {
      const res = await dadJokeFetch(signal, this.args.searchTerm);

      const data = await res.json();

      return data;
    } catch (error) {
      // We want to silence this error
      if (error.name === 'AbortError') {
        return;
      }

      return error;
    }
  });

  get results() {
    return this.jokeResource.value?.results;
  }

  get joke() {
    if (this.results?.length) {
      return this.results[0].joke ?? 'Joke not found!';
    } else {
      return '';
    }
  }
}
