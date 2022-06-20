import { tracked } from '@glimmer/tracking';
import { registerDestructor } from '@ember/destroyable';

export default class PromiseHandler {
  @tracked value;
  @tracked error;

  constructor(promiseFunc) {
    this.promiseFunc = promiseFunc;

    this.doFetch();

    registerDestructor(this, () => {
      console.log('Destroying the fetch request!');
      this.controller.abort();
    });
  }

  async doFetch() {
    this.controller = new AbortController();

    const { signal } = this.controller;

    try {
      const res = await this.promiseFunc(signal);

      const data = await res.json();

      this.value = data;
    } catch (error) {
      this.error = error;
    }
  }
}
