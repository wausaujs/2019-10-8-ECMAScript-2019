import React from 'react'
import CodeSampler from './codeSampler'

// Flat defualts to 1

const flat1 = () => {
  return [1, 2, 3, [4, 5, 6]].flat()
}

const flat2 = () => {
  return [1, 2, 3, [4, 5, [6, 7, 8, 9]]].flat()
}

const flat3 = () => {
  return [1, 2, 3, [4, 5, [6, 7, 8, 9]]].flat(2)
}

const flat4 = () => {
  return [1, 2, 3, [4, 5, [6, 7, 8, 9, [10, 11, 12]]]].flat(Infinity)
}

export default () => (
  <CodeSampler funcs={[flat1, flat2, flat3, flat4]} title={'Array .flat - 2019'}></CodeSampler>
)
