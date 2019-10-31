import React from 'react'
import { Box } from '@chakra-ui/core'
import CodeSampler from './codeSamplerAccordian'
import Map from './map'
import Hoisty from './hoist'
import Flat from './flat'
import Class19 from './class19'
import Nullish from './nullishCoalescing'
import Chaining from './optionalChain'
import FuncString from './functionString'
import BInt from './bigInt'
import FlatMap from './flatMap'
import ArrIncludes from './ArrIncludes'
import StringInter from './stringInterpolation'
import Trim from './trim'
import FromEntries from './fromEntries'
import ObjRes from './objectRestructure'
import Generators from './generator1'

export default () => (
  <Box m="2em">
    <CodeSampler
      items={[
        FuncString,
        Hoisty,
        StringInter,
        Map,
        Flat,
        FlatMap,
        Trim,
        Class19,
        FromEntries,
        ObjRes,
        Nullish,
        Chaining,
        BInt,
        // Generators,
        // ArrIncludes, / If time...
      ]}
    ></CodeSampler>
  </Box>
)
