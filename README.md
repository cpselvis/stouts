# Stouts

*A Javascript template engine by [@Elvis](//github.com/cpselvis)*

![Build Status](https://travis-ci.org/cpselvis/stouts.svg?branch=master)

Why I want to create this wheel? I get inspiration from peg.js which is a generator for parser.
But it seems complex to use because it's grammar isn't easy to understand, so I try to write a
parser use pure javascript code.

And I named it stouts, it's just a kind of beer. I love it's strong flavour and dark color.

## Install

You can get Stouts via npm.

```bash
$ npm install stouts --save
```

## Quick Example

Below is a quick example how to use stouts:

```js
var view = {
  names: [{
    name: 'Elvis'
  }, {
    name: 'Joe'
  }, {
    name: 'Tank'
  }], 
  age: 24
};

var output = Stout.render("Name are: {{#names}}{{name}},{{/names}} age is {{age}}", view);
```

## API

- Stouts.render(template, view)
- Stouts.parse(template);

## Syntax

  | Syntax rules                 | Meannings                 |
  | -------------------------    |:-----------------------:  |
  | {{variable}}                 | Raw value                 |
  | {{{variable}}}               | Escape value              |
  | {{#names}}{{name}}{{/names}} | Loop                      |


## Testing

Install dependencies.

```bash
$ npm install
```

Then run the tests.

```bash
$ npm install stouts --save
```

## ES6 Project && Webpack Config

  Follow http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/
  
## Mocha Test Case

  Follow http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/

## Naming && Javascript ES6 Style

  Follow https://github.com/trwalker/javascript-es6-styleguide
  
  **File naming**: One Class per File, Only one class should be declared per file and the file name should match the class name. If the class is named "Car" then the file should be named "car.js".
