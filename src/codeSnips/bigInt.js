import React from 'react'
import CodeSampler from './codeSampler'

const sample = `
const x = Number.MAX_SAFE_INTEGER // 9007199254740991, this is 1 less than 2^53

const y = x + 1 //9007199254740992 // This is all good

const z = x + 2 // 9007199254740992 // Same as above!

// BigInt
// A BigInt is created by appending n to the end of the integer or by calling the constructor.
const bigInt = 9007199254740991n

const bigInt2 = BigInt(9007199254740991) // 9007199254740991n

// All math can be done on a BigInt normally but since it is an int, it will round automatically
// BigInts can be compared and sorted with normal numbers
// NOTE: BigInts are not strictly equal to numbers
//       1n === 1 // false
//       1n == 1 // true
// BigInt is same as Number for falsy checks, e.g. 0n is falsy

// Only use BigInt when you will come accross values greater than 2^53
// NOTE: You can not do math with Numbers. 
//     1 + 1n throws "TypeError: Cannot mix BigInt and other types, use explicit conversions"
`
// TODO: Talk about it here...

export default () => (
  <CodeSampler sample={sample} executable={false} title={'BigInt - Stage3'}></CodeSampler>
)
