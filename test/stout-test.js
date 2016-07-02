'use strict';

import Stout from '../src/stout'
import assert from 'assert'
import 'babel-polyfill'


const stout = new Stout('Name is: {{name}}, age is {{age}}', {name: 'Elvis', age: 24});

/*
 * Tests
 */

describe('render', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      stout.render(),
      'Name is: Elvis, age is 24',
      "render function case are passed through"
    );
  });


});

describe('parse', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      stout.parse(),
      [ [ 'text', 'Name is: ', 0, 9 ],
        [ 'name', 'name', 9, 17 ],
        [ 'text', ', age is ', 17, 26 ],
        [ 'name', 'age', 26, 33 ] ],
      "parse function case are passed through"
    );
  });


});
