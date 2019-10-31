import React from 'react'
import CodeSampler from './codeSampler'

const func = () => {
  console.log(x) // Outputs undefined
  if (true) {
    var x = 1 // If this were 'const' or 'let' it would not compile.
  }
}

export default () => <CodeSampler funcs={[func]} title={'Variable Hoisting'}></CodeSampler>
