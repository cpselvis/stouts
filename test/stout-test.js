'use strict';

import {render, parse} from '../src/stouts'
import assert from 'assert'
import 'babel-polyfill'
/*
 * Tests
 */
describe('render', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      render('Name is: {{name}}, age is {{age}}', {name: '<p>Elvis</p>', age: 24}),
      'Name is: &lt;p&gt;Elvis&lt;&#x2F;p&gt;, age is 24',
      "render function case are passed through"
    );
  });

  // it("should return `true` if template traversal is ended.", () => {
  //   const stouts = new Stouts('Name is: {{{name}}}, age is {{age}}', {name: '<p>Elvis</p>', age: 24});
  //   assert.equal(
  //     stouts.render(),
  //     'Name is: <p>Elvis</p>, age is 24',
  //     "render function case are passed through"
  //   );
  // });

  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      render('Name are: {{#names}}{{name}},{{/names}} age is {{age}}', {names: [{name: 'Elvis'}, {name: 'Joe'}, {name: 'Tank'}], age: 24}),
      'Name are: Elvis,Joe,Tank, age is 24',
      "render function case are passed through"
    );
  });

});

describe('parse', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.deepEqual(
      parse('Name is: {{name}}, age is {{age}}', {name: '<p>Elvis</p>', age: 24}),
      [ [ 'text', 'Name is: ', 0, 9 ],
        [ 'name', 'name', 11, 17 ],
        [ 'text', ', age is ', 17, 26 ],
        [ 'name', 'age', 28, 33 ] ],
      "parse function case are passed through"
    );
  });


});
