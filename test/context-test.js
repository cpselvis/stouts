'use strict';

import Context from '../src/context'
import assert from 'assert'
import 'babel-polyfill'

const obj = {
  name: 'Elvis',
  age: 24,
  dot: {
    var: 3
  }
};
const context = new Context(obj);

/*
 * Tests
 */

describe('lookup', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      context.lookup('name'),
      'Elvis',
      "look function case are passed through"
    );
  });

  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      context.lookup('age'),
      24,
      "look function case are passed through"
    );
  });

  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      context.lookup('dot.var'),
      3,
      "look function case are passed through"
    );
  });


});
