// biome-ignore-all lint: This file is a custom implementation of a utility function

/**
 * Enhanced random function, selects a random value between a minimum and maximum. If the values provided are both
 * integers then the number returned will be an integer, otherwise the return number will be a decimal.
 * @param min The minimum value
 * @param max The maximum value
 */
export function random(min: number, max: number): number {
  const randomNumber = Math.random() * (max - min + 1) + min;

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return randomNumber;
  } else {
    return Math.floor(randomNumber);
  }
}

/**
 * Linear interpolation function to gradually step towards a target value
 * @param start The current value
 * @param end The target value
 * @param normal The rate of change between 0 and 1 (0 = no change, 1 = instant)
 */
export function lerp(start: number, end: number, normal: number) {
  return (1 - normal) * start + normal * end;
}

/**
 * Selects a random item from an array of inputs.
 *
 * @param items The array of items to choose from
 * @returns A random item selected from the array
 */
export function randomElement<T>(items: T[]): T {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

/**
 * Gets the height and width of the provided HTML element
 * @param element The html element to measure
 */
export function getSize(element?: HTMLElement | null) {
  if (!element) return { height: 0, width: 0 };

  return {
    height: element.offsetHeight,
    width: element.offsetWidth
  };
}

/**
 * Store the value of PI * 2.
 *
 * This is so we can avoid calculating this value every time we draw a circle.
 */
export const twoPi = Math.PI * 2;

const hasElementType = typeof Element !== "undefined";
const hasMap = typeof Map === "function";
const hasSet = typeof Set === "function";
const hasArrayBuffer =
  typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;

export const isEqual = (a: any, b: any) => {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor) return false;

    let length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; ) if (!isEqual(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    let it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!isEqual(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      // @ts-ignore
      length = a.length;
      // @ts-ignore
      if (length != b.length) return false;
      // @ts-ignore
      for (i = length; i-- !== 0; ) if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (
      a.valueOf !== Object.prototype.valueOf &&
      typeof a.valueOf === "function" &&
      typeof b.valueOf === "function"
    )
      return a.valueOf() === b.valueOf();
    if (
      a.toString !== Object.prototype.toString &&
      typeof a.toString === "function" &&
      typeof b.toString === "function"
    )
      return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0; ) {
      if (
        (keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") &&
        a.$$typeof
      ) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!isEqual(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
};
