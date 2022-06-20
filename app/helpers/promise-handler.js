import { tracked } from '@glimmer/tracking';
import { Resource } from 'ember-could-get-used-to-this';

export default class PromiseHandler extends Resource {
  @tracked value;
  @tracked error;

  setup() {
    const { promise, searchTerm } = this.args.named;

    this.promiseFunc = promise;

    this.doFetch(searchTerm);
  }

  teardown() {
    this.controller.abort();
  }

  async update() {
    this.value = null;
    this.error = null;

    if (this.controller) {
      console.log('Aborting fetch request!');
      this.controller.abort();
    }

    await this.doFetch(this.args.named.searchTerm);
  }

  async doFetch(searchTerm) {
    this.controller = new AbortController();

    const { signal } = this.controller;

    try {
      const res = await this.promiseFunc(signal, searchTerm);

      const data = await res.json();

      this.value = data;
    } catch (error) {
      // We want to silence this error
      if (error.name === 'AbortError') {
        return;
      }

      this.error = error;
    }
  }
}
