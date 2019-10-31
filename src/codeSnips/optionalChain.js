import React from 'react'
import CodeSampler from './codeSampler'

const sample = `
const users = {
  gilbert: {
    settings: {
      nullValue: null,
      height: 400,
      animationDuration: 0,
      headerText: '',
      showSplashScreen: false,
    },
  },
  bob: {},
}

// Before:
if(users && users['gilbert'] && users['gilbert'].settings) {
  // Now I can do things with the settings object 
  const animationDuration = users['gilbert'].settings.animationDuration
}

// With optional changing 
if(users?.['gilbert']?.settings)
  const animationDuration = users['gilbert'].settings.animationDuration 

// Also works with nullish coalescing.
// Before
const animationDuration = users && users['gilbert'] && users['gilbert'].settings.animationDuration ? users['gilbert'].settings.animationDuration : 300 // Set to 0

// With optional changing 
const animationDuration = users?.['gilbert']?.settings.animationDuration ?? 300 // Set to 0

const result = users?.['bob']?.settings.animationDuration // result gets set to undefined.
`

export default () => (
  <CodeSampler
    sample={sample}
    title={'Optional Chaining - Stage3'}
    executable={false}
  ></CodeSampler>
)
