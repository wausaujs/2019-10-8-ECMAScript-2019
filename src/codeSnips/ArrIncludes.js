import React from 'react'
import CodeSampler from './codeSampler'

const func = () => {
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

export default () => <CodeSampler funcs={[func]} title={'Array .includes - ES6'}></CodeSampler>
