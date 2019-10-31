import React from 'react'
import CodeSampler from './codeSampler'

// flatMap is identical to map followed bu flat of depth 1.

const func1 = () => {
  const items = {
    9972: { itemType: 'bike' },
    8341: { itemType: 'ball' },
    9235: { itemType: 'computer' },
  }

  const entries = Object.entries(items)

  console.log(entries)

  const restructuredItem = Object.fromEntries(entries)
  console.log(restructuredItem)

  // Also works with Maps
  const map = new Map([
    ['8341', { itemType: 'ball' }],
    ['9235', { itemType: 'computer' }],
    ['9972', { itemType: 'bike' }],
  ])

  console.log(Object.fromEntries(map))
}

export default () => (
  <CodeSampler funcs={[func1]} title={'Object .fromEntries - 2019'}></CodeSampler>
)
