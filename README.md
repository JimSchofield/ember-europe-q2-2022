# What's the hardest thing TIMING about async?

This is a regular ember app where each example of incremental asynct data handling are on each of these branches:

- main - Simple fetch in component constructor
- 2-using-promise-handler - Dad joke is fetched using a util to contain and handle the promise
- 3-handling-abort - Registers destructibles so Ember is aware of destructor methods for our promise handler, and aborts fetches if the component gets destroyed
- 4-handle-argument-changes - Handle argument changes and reactively update fetch while handling fetch aborting
- 5-using-resources - Uses resources class from `ember-could-get-used-to-this`
- 6-using-ember-resources - Uses `ember-resources` tracked function


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd async-talk-2`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
