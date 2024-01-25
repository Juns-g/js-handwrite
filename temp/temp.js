const { log } = console;

const o1 = {};
log(o1.constructor === Object); // true

const o2 = new Object();
log(o2.constructor === Object); // true

const a1 = [];
log(a1.constructor === Array); // true

const a2 = new Array();
log(a2.constructor === Array); // true

const n = 3;
log(n.constructor === Number); // true

log(undefined.constructor);
// TypeError: Cannot read properties of undefined (reading 'constructor')
log(null.constructor);
// TypeError: Cannot read properties of null (reading 'constructor')
