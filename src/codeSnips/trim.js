import React from 'react'
import CodeSampler from './codeSampler'

const func = () => {
  const paddedString = '     Wrapped with space    \t\t'
  console.log(paddedString.trim())
  console.log(paddedString.trimStart())
  console.log(paddedString.trimEnd())
}

export default () => <CodeSampler funcs={[func]} title={'Trim funcitons - 2019'}></CodeSampler>
