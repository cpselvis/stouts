'use strict';

/**
 * @file Template engine context, by wrapping a view object.
 *
 * // To do: support traversal up the context hierarchy if the value is absent in this context's view.
 */
export default class Context {
  /**
   * @brief Constructor
   *
   * @param view  {Object} Data object.
   */
  constructor(view) {
    this.view = view;
  }

  /**
   * Creates a new context using the given view
   * @param view
   * @returns {Context}
     */
  push(view) {
    return new Context(view);
  }

  /**
   * Find the value of giving name in context
   * @param name  Given name, support dot notion (eg: person.name)
   */
  lookup(name) {
    let names, namesLen, value, context = this;
    if (name.indexOf('.') > 0) {
      value = context.view;
      names = name.split('.');
      namesLen = names.length;

      // Support dot notion
      let index = 0;
      while (value && index < namesLen) {
        value = value[names[index ++]];
      }
    }
     else {
      value = context.view[name];
    }

    return value;
  }
}
