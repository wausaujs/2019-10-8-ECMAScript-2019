import React from 'react'
import { Accordion } from '@chakra-ui/core'

// TODO: have this be one item in an accordian
export default ({ items }) => {
  let key = 0
  return (
    <Accordion defaultIndex={[0]} allowMultiple allowToggle>
      {items.map(Item => (
        <Item key={++key}></Item>
      ))}
    </Accordion>
  )
}
