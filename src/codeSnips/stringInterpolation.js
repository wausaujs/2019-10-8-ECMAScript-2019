import React from 'react'
import CodeSampler from './codeSampler'

function displayOrder() {
  const formatCurrency = (strings, ...values) => {
    let result = ''
    console.log(strings, values)

    for (let i = 0; i < strings.length; i++) {
      if (i > 0) {
        if (typeof values[i - 1] === 'number') result += `$${values[i - 1].toFixed(2)}`
        else result += values[i - 1]
      }
      result += strings[i]
    }

    return result
  }

  const total = 98.1
  return formatCurrency`Your order's total is: ${total}!`
}

export default () => (
  <CodeSampler funcs={[displayOrder]} title={'Tags/Interpolation - ES6'}></CodeSampler>
)
