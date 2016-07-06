'use strict';

/**
 * @file Some useful functions.
 */
export default class Common {


  /**
   * Transform html tag to escaped form.
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

  /**
   * Check if a value is array type.
   * @param object
   * @returns {*|(function())}
     */
  static isArray(object) {
      return Array.isArray || Object.prototype.toString.call(object) === '[object Array]';
  };
}
