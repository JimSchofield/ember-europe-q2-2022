import { tracked } from '@glimmer/tracking';
import { registerDestructor } from '@ember/destroyable';

export default class PromiseHandler {
  @tracked value;
  @tracked error;

  constructor(promiseFunc, initialSearchTerm) {
    this.promiseFunc = promiseFunc;

    this.doFetch(initialSearchTerm);

    registerDestructor(this, () => {
      this.controller.abort();
    });
  }

  async update(searchTerm) {
    this.value = null;
    this.error = null;

    if (this.controller) {
      console.log('Aborting fetch request!');
      this.controller.abort();
    }

    await this.doFetch(searchTerm);
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
