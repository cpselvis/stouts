'use strict';

import Scanner from './scanner'


/**
 * @file Parser
 */
export default class Parser {

  /**
   * @brief Constructor
   *
   * @param template   Template needs to parse
   */
  constructor(template) {
    this.template = template;
  }

  /**
   * @brief Transform template to token stream.
   */
  tokens(template) {
    const scanner = new Scanner(template);
    
    let tokens = [];

    if (!template) {
      return [];
    }

    /* Transform template string to token stream */
    let start, value;
    while (!scanner.eot()) {
      start = scanner.eot();
      value = scanner.scanUntil(/{{/);
      console.log(value);
    }
  }

  parse() {
    const template = this.template;
  }
}
