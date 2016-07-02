/**
 * stout.js - A Javascript template engine.
 * This is a string-based template engine, use AST.
 * https://github.com/cpselvis/stout
 *
 * Elvis (cpselvis#gmail.com)
 * May 15th, 2016
 *
 *
 * Why I want to create this wheel? I get inspiration from peg.js which is a generator for parser.
 * But it seems complex to use because it's grammar isn't easy to understand, so I try to write a
 * parser use pure javascript code.
 *
 * And I named it stout, it's just a kind of beer. I love it's strong flavour and dark color.
 */

'use strict';

import Parser from  './parser'
import Writer from './writer'


/**
 * @file High-level function, template engine entrance file.
 *
 */
export default class Stout {
  /**
   * @brief Constructor
   *
   * @param template  {String} Template string
   * @param view  {Object} View Object
   */
  constructor(template, view) {
    this.template = template;
    this.view = view;
  }

  /**
   * Convert template and view object together into a string.
   */
  render() {
    const writer = new Writer();
    return writer(this.template, this.view)
  }

  /**
   * Convert template and view object together into a string.
   */
  parse() {
    const parser = new Parser(this.template);
    return parser.parse();
  }
}
