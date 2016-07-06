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

    const openingTagRe = /\{\{\s*/,
      closingTagRe = /\s*\}\}/,
      closingCurlyRe = /\s*\}\}/,
      tagRe = /#|\{|\^|\!/;

    let start, type, value, ch, hasTag, token;
    while (!scanner.eot()) {
      start = scanner.pos;
      value = scanner.scanUntil(openingTagRe);
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
      if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(closingCurlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Ensure each opening tag has closing tag as a pair.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [type, value, start, scanner.pos];
      tokens.push(token);
    }
    return tokens;
  }

  /**
   * @brief Combines the values of consecutive text tokens in the given `tokens` array to a single token.
   * @param tokens   Token stream array
     */
  squashTokens(tokens) {
    let squashedTokens = [];

    let token, lastToken;
    for (let i = 0, len = tokens.length; i < len; i ++) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          // Merge text content
          lastToken[1] += token[1];
          // Update end indicator
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  parse() {
    const template = this.template;
    const tokens = this.tokens(template);

    return this.squashTokens(tokens);
  }
}
