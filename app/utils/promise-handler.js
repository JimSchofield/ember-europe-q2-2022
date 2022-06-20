import { tracked } from '@glimmer/tracking';

export default class PromiseHandler {
  @tracked value;
  @tracked error;

  constructor(promiseFunc) {
    this.promiseFunc = promiseFunc;

    this.doFetch();
  }

  async doFetch() {
    try {
      const res = await this.promiseFunc();

      const data = await res.json();

      this.value = data;

      console.log(this.value);
    } catch (error) {
      this.error = error;
    }
  }
}
