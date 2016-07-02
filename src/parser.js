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
   * @brief Transform template string to token stream.
   */
  tokens(template) {
    const scanner = new Scanner(template);

    let tokens = [];

    if (!template) {
      return [];
    }

    const openingTagRe = /\{\{/,
          closingTagRe = /\}\}/,
          tagRe = /#|\^|\!/;

    let start, type, value, ch, hasTag;
    while (!scanner.eot()) {
      start = scanner.pos;
      value = scanner.scanUntil(/{{/);
      for (let i = 0; i < value.length; i ++) {
        ch = value.charAt(i);
        tokens.push(['text', ch, start, start + 1]);
        start += 1;
      }

      // Un match opening tag.
      if (!scanner.scan(openingTagRe)) {
        break;
      }

      hasTag = true;

      type = scanner.scan(tagRe) || 'name';

      // Variable condition
      if (type === 'name') {
        value = scanner.scanUntil(closingTagRe);
      }

      // Ensure each opening tag has closing tag as a pair.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      tokens.push([type, value, start, scanner.pos]);
    }
    return tokens;
  }

  /**
   * @brief Transform token array to nest token array.
   * @param tokens   Token stream array
     */
  nestedTokens(tokens) {

  }

  parse() {
    const template = this.template;
  }
}
