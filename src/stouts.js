'use strict';

import Parser from  './parser'
import Writer from './writer'


/**
 * @file High-level function, template engine entrance file.
 *
 */
export default class Stouts {
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
    const writer = new Writer(this.template, this.view);
    return writer.render();
  }

  /**
   * Convert template and view object together into a string.
   */
  parse() {
    const parser = new Parser(this.template);
    return parser.parse();
  }
}
