import React from 'react'
import CodeSampler from './codeSampler'

// flatMap is identical to map followed bu flat of depth 1.

const flat1 = () => {
  let values = [1, 2, 3, 4, 5]

  let mappedValues = values.map(value => [value, value * 2])
  console.log(mappedValues)

  // Second parameter is the index...
  return values.flatMap(value => [value, value * 2])
}

export default () => <CodeSampler funcs={[flat1]} title={'Array .flatMap - 2019'}></CodeSampler>
