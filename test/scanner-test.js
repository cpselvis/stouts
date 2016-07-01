'use strict';

import Scanner from '../src/scanner'
import assert from 'assert'
import 'babel-polyfill'

const scanner = new Scanner('Name is: {{name}}, age is {{age}}');

/*
 * Tests
 */

describe('eot', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      scanner.eot(),
      false,
      "eot function case are passed through"
    );
  });

});

describe('scan', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      scanner.scan(/{{/),
      '',
      "scan function case are passed through"
    );

  });

});

describe('scanUntil', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      scanner.scanUntil(/\{\{/),
      'Name is: ',
      "scan function case are passed through"
    );

  });

});
