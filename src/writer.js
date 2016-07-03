'use strict';

import Parser from './parser'
import Context from './context'
import Common from './common'

/**
 * @file Convert template and view object together into a string.
 *
 */
export default class Writer {
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
    const parser = new Parser(this.template);
    const context = new Context(this.view);
    const tokens = parser.parse();

    let token, renderedStr = '';
    for (let i = 0, len = tokens.length; i < len; i ++) {
      token = tokens[i];

      if (token[0] === 'text') {
        renderedStr += token[1];
      } else if (token[0] === 'name') {
        renderedStr += Common.escapeHtml(context.lookup(token[1]));
      } else if (token[0] === '&') {
        renderedStr += context.lookup(token[1]);
      }
    }

    return renderedStr;
  }
}
