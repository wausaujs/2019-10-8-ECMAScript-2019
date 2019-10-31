import React, { useState } from 'react'
import {
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from '@chakra-ui/core'

// TODO: have this be one item in an accordian
export default ({ funcs, sample = '', title, executable = true }) => {
  let [output, setOutput] = useState([])
  let key = 0
  return (
    <AccordionItem>
      <AccordionHeader _expanded={{ bg: 'tomato', color: 'white' }}>
        <Box flex="1" textAlign="left" fontSize={'1.5em'}>
          {title}
        </Box>
        <AccordionIcon />
      </AccordionHeader>
      <AccordionPanel>
        {/* WHY IS THE BORDER NOT WORKING?!?! */}
        <Box borderColor="tomato" borderWidth="1px" rounded="lg">
          {executable ? (
            <>
              {funcs.map(func => (
                <div key={++key}>
                  <pre>
                    <code>{func.toString()}</code>
                  </pre>
                </div>
              ))}
            </>
          ) : (
            <div>
              <pre>
                <code>{sample}</code>
              </pre>
            </div>
          )}
        </Box>
        {executable && (
          <Button
            onClick={() => {
              const o = []
              funcs.map(func => {
                const result = func()
                console.log(result)
                o.push(result)
              })
              setOutput(o)
            }}
          >
            Execute
          </Button>
        )}
        {/* The output often lies... */}
        {/* {output.length > 0 && (
          // TODO: Style like a termial
          <Box borderColor="tomato" borderWidth="1px" rounded="lg" p="5">
            {output.map(out => {
              return <div key={++key}>- {out ? out.toString() : typeof out}</div>
            })}
          </Box>
        )} */}
      </AccordionPanel>
    </AccordionItem>
  )
}
