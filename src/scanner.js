'use strict';


/**
 * @file String scanner that is used by the template parser to find tokens in template strings.
 */
export default class Scanner {

  /**
   * @brief Constructor
   *
   * @param template   Template needs to scanner
   */
  constructor(template) {
    this.pos = 0;
    this.tail = template;
    this.template = template;
  }

  /**
   * @brief Means ends of template, return `true` if template traversal is ended.
   *
   * @returns {boolean}
   */
  eot() {
    return this.tail === '';
  }

  /**
   * @brief Try to match the given regex expression from current position.
   * @param re Regex
   * @returns {*} Return matched text if it can be matched, otherwise empty string.
     */
  scan(re) {
    const match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    const str = match[0];
    const len = str.length;

    /* Update pos and tail. */
    this.tail = this.tail.substring(len);
    this.pos += len;

    return str;
  }

  /**
   * @brief
   * @param re
   */
  scanUntil(re) {
    const index = this.tail.search(re);
    let match;

    switch(index) {
      case -1:     // No find
        match = this.tail;
        this.tail = '';
        break;
      case 0:      // Has found, and index in first position
        match = '';
        break;
      default:     // Has found, and not in first position
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += index;
    return match;
  }

}
