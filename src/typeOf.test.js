import { myTypeOf } from './typeOf.js';
import { test, expect } from 'vitest';

test('myTypeOf ', () => {
	expect(myTypeOf(1)).toBe('number');
	expect(myTypeOf(new Number(2))).toBe('number');

	expect(myTypeOf('')).toBe('string');
	expect(myTypeOf(new String(23))).toBe('string');

    expect(myTypeOf(true)).toBe('boolean');
    expect(myTypeOf(undefined)).toBe('undefined');
    expect(myTypeOf(null)).toBe('null');

    expect(myTypeOf({})).toBe('object');
    expect(myTypeOf([])).toBe('array');
    expect(myTypeOf(function(){})).toBe('function');

    expect(myTypeOf(Symbol())).toBe('symbol');
    expect(myTypeOf(new Date())).toBe('date');
    expect(myTypeOf(new RegExp())).toBe('regexp');
    expect(myTypeOf(new Error())).toBe('error');
    expect(myTypeOf(new Map())).toBe('map');
    expect(myTypeOf(new Set())).toBe('set');
    expect(myTypeOf(new WeakMap())).toBe('weakmap');
    expect(myTypeOf(new WeakSet())).toBe('weakset');

    expect(myTypeOf(new ArrayBuffer())).toBe('arraybuffer');
    expect(myTypeOf(new Int8Array())).toBe('int8array');
    expect(myTypeOf(new Uint8Array())).toBe('uint8array');
    expect(myTypeOf(new Uint8ClampedArray())).toBe('uint8clampedarray');
    expect(myTypeOf(new Int16Array())).toBe('int16array');
    expect(myTypeOf(new Uint16Array())).toBe('uint16array');
    expect(myTypeOf(new Int32Array())).toBe('int32array');

});
