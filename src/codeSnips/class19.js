import React from 'react'
import CodeSampler from './codeSampler'

const sample = 
class Cat {
  // Private field
  #deviousPlans = 'Knock cups off counter'
  // Public field
  dances = false

  // Static field
  static item = 'cup' // Note: You can have static private fields as well.

  // Private function
  #exposePlans() {
    return this.#deviousPlans
  }

  // Static function
  static interact() {
    return `Interacts with ${Cat.item}` // Notice that it is the Class and not "this"
  }
}

console.log(Cat.interact()) // Output: "Interacts with cup"
}

export default () => (
  <CodeSampler sample={sample} title={'Class Updates - 2019'} executable={false}></CodeSampler>
)
