'use strict';

import Stout from '../src/stout'
import assert from 'assert'
import 'babel-polyfill'

/*
 * Tests
 */

describe('render', () => {
  it("should return `true` if template traversal is ended.", () => {
    const stout = new Stout('Name is: {{name}}, age is {{age}}', {name: '<p>Elvis</p>', age: 24});
    assert.equal(
      stout.render(),
      'Name is: &lt;p&gt;Elvis&lt;&#x2F;p&gt;, age is 24',
      "render function case are passed through"
    );
  });

  // it("should return `true` if template traversal is ended.", () => {
  //   const stout = new Stout('Name is: {{{name}}}, age is {{age}}', {name: '<p>Elvis</p>', age: 24});
  //   assert.equal(
  //     stout.render(),
  //     'Name is: <p>Elvis</p>, age is 24',
  //     "render function case are passed through"
  //   );
  // });

  // it("should return `true` if template traversal is ended.", () => {
  //   const stout = new Stout('Name are: {{#names}}{{name}},{{/names}}, age is {{age}}', {names: [{name: 'Elvis'}, {name: 'Joe'}, {name: 'Tank'}], age: 24});
  //   assert.equal(
  //     stout.render(),
  //     'Name are: Elvis,Joe,Tank, age is 24',
  //     "render function case are passed through"
  //   );
  // });

});

describe('parse', () => {
  it("should return `true` if template traversal is ended.", () => {
    const stout = new Stout('Name is: {{name}}, age is {{age}}', {name: '<p>Elvis</p>', age: 24});
    assert.deepEqual(
      stout.parse(),
      [ [ 'text', 'Name is: ', 0, 9 ],
        [ 'name', 'name', 9, 17 ],
        [ 'text', ', age is ', 17, 26 ],
        [ 'name', 'age', 26, 33 ] ],
      "parse function case are passed through"
    );
  });


});
