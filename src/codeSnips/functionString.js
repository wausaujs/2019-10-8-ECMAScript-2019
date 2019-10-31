import React from 'react'
import CodeSampler from './codeSampler'

const func = test => {
  // Comments and white space are now part of the function.toString()
  // I shouldn't be using react to demonstrate this, because it gets compiled with babel.
  // Show in console.
  console.log(test)
}

const sample = func.toString()

export default () => (
  <CodeSampler
    sample={sample}
    title={'function.prototype.toString - 2019'}
    executable={false}
  ></CodeSampler>
)
