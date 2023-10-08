'use client'
import React, { FC, useState } from 'react'
import { ChakraProvider, Textarea, Button } from '@chakra-ui/react'
import { getClassNames } from '@/utils'
const testStyles = `display: flex;
align-items: center;
justify-content: space-between;
margin: 4px 8px;
`
const Page: FC = () => {
  const [styles, setStyles] = useState(testStyles)
  const [classNames, setClassNames] = useState('')
  const handleTransform = () => {
    const { classNames, unMatchedStyles } = getClassNames(styles)
    setClassNames(classNames.join(' '))
    console.log(classNames)
  }
  return (
    <ChakraProvider>
      <div className='mx-auto flex pt-[100px] w-[960px]  justify-between space-x-3 divide-x'>
        <div className='grow'>
          <div className='text-2xl font-bold'>Styles</div>
          <Textarea
            className='mt-3 w-full !h-52'
            value={styles}
            onChange={e => setStyles(e.target.value)}
          />
          <Button
            className='mt-2' colorScheme='teal' size='md'
            onClick={handleTransform}
          >
            Transform
          </Button>
        </div>
        <div className='grow pl-3'>
          <div className='text-2xl font-bold'>Results</div>
          <div>
            <Textarea
              className='mt-3 w-full !h-52'
              value={classNames}
            />
          </div>
        </div>
      </div>
    </ChakraProvider>
  )
}
export default React.memo(Page)

