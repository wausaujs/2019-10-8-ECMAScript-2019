import React from 'react'
import CodeSampler from './codeSampler'

/*
  It is good for getting certain properties off of objects, like getting array of ids, or doing math, etc.
  Map always returns a value for each item, and undefined if one is not returned.
*/

const pre = () => {
  // W/o map
  const copyArrayAndDivideBy2 = array => {
    const output = []

    for (let i = 0; i < array.length; i++) {
      output.push(array[i] / 2)
    }

    return output
  }

  return copyArrayAndDivideBy2([1, 2, 3])
}

const post = () => {
  // With map
  const copyArrayAndDivideBy2 = array => array.map(num => num / 2)

  return copyArrayAndDivideBy2([1, 2, 3])
}

export default () => <CodeSampler funcs={[pre, post]} title={'Array .map'}></CodeSampler>
