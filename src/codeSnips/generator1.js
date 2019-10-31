import React from 'react'
import CodeSampler from './codeSampler'

// flatMap is identical to map followed bu flat of depth 1.

const numbers = [1, 2, 3, 4, 5]

const func = startingNum => {
  function* generator() {
    for (const num of numbers) {
      console.log(startingNum)
      yield num * startingNum
    }
  }

  const iterator = generator(1)

  let { value, done } = iterator.next()

  while (true) {
    const next = iterator.next(value)
    ;({ value, done } = next)
    iterator.next()
    console.log(value)

    if (done) {
      console.log(`Done: ${done}`)
      break
    }
  }
}

export default () => <CodeSampler funcs={[func]} title={'Generator - ES6'}></CodeSampler>
