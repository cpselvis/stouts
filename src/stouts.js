'use strict';

import Parser from  './parser'
import Writer from './writer'


/**
 * @file stouts.js, High-level function, template engine entrance file.
 *
 */

/**
 * Convert template and view object together into a string.
 */
export function render(template, view) {
  const writer = new Writer(template, view);
  return writer.render();
}

/**
 * Convert template and view object together into a string.
 */
export function parse(template) {
  const parser = new Parser(template);
  return parser.parse();
}
