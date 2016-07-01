'use strict';

import Parser from '../src/parser'
import assert from 'assert'
import 'babel-polyfill'

const parser = new Parser('Name is: {{name}}, age is {{age}}');

/*
 * Tests
 */

describe('tokens', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      parser.tokens('Name is: {{name}}, age is {{age}}'),
      false,
      "eot function case are passed through"
    );
  });

});
