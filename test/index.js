const assert = require('assert');
const evaluateComplexity = require('../src/password-complexify.js')


const empty = evaluateComplexity('');
const banned = evaluateComplexity('qwerty');
const numberOnly = evaluateComplexity('38563936');
const alphabetOnly = evaluateComplexity('iefwondi');
const common = evaluateComplexity('complex1017');
const strong = evaluateComplexity('c0mp!ex1o1&');

assert.equal(empty, 0);
assert.equal(banned, 1);
assert.ok(numberOnly < alphabetOnly);
assert.ok(alphabetOnly < common);
assert.ok(common < strong);
