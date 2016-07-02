'use strict';

import Writer from '../src/writer'
import assert from 'assert'
import 'babel-polyfill'

const writer = new Writer('Name is: {{name}}, age is {{age}}', {name: 'Elvis', age: 24});

/*
 * Tests
 */

describe('render', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      writer.render(),
      'Name is: Elvis, age is 24',
      "render function case are passed through"
    );
  });
});
