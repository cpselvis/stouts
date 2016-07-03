'use strict';

/**
 * @file Some useful functions.
 */
export default class Common {


  /**
   *
   * @param str           Input string
   * @returns {string}    Escape string.
   */
  static escapeHtml(str) {
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    return String(str).replace(/[&<>"'`=\/]/g, (s) => {
      return entityMap[s];
    });
  }
}
