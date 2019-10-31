import React from 'react'
import CodeSampler from './codeSampler'

// Like || except works with falsies
const sample = `
const settings = {
  nullValue: null,
  height: 400,
  animationDuration: 0,
  headerText: '',
  showSplashScreen: false,
}   

const animationDuration = settings.animationDuration ?? 300  // 0
const animationDuration = settings.animationDuration || 300  // 300
const headerText = settings.headerText ?? 'This is the header!'  // ''
const headerText = settings.headerText || 'This is the header!'  // 'This is the header!'

"||" does it for all falsy, "??" for null and undefined.

// To get this result without nullish coalescing.
const animationDuration = settings.animationDuration ?? 300  // 0
const animationDuration = isNum(settings.animationDuration) ? settings.animationDuration : 300
`

export default () => (
  <CodeSampler
    sample={sample}
    title={'Nullish Coalescing - Stage3'}
    executable={false}
  ></CodeSampler>
)
