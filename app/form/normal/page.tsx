'use client'
import React, { FC } from 'react'
import { Render } from "@measured/puck";
import { ChakraProvider } from '@chakra-ui/react'
import config from "@/configs/chakra/form.config";
import data from './test-data'
type Props = {
}

const FormNormal: FC<Props> = ({
}) => {
  return (
    <ChakraProvider>
      <Render config={config} data={data} />
    </ChakraProvider>
  )
}

export default React.memo(FormNormal)
