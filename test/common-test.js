'use strict';

import Common from '../src/common'
import assert from 'assert'
import 'babel-polyfill'

/*
 * Tests
 */

describe('escapeHtml', () => {
  it("should return `true` if template traversal is ended.", () => {
    assert.equal(
      Common.escapeHtml('<p>Hello stouts!</p>'),
      '&lt;p&gt;Hello stouts!&lt;&#x2F;p&gt;',
      "escapeHtml function case are passed through"
    );
  });
});
