'use client'
import React, { FC, useState } from 'react'
import { ChakraProvider, Textarea, Button } from '@chakra-ui/react'
import { getClassNames } from '@/utils'
import parseStyle from 'style-to-object'
import Preview from './components/preview'

const testStyles = `display: flex;
align-items: center;
justify-content: center;
margin: 4px 8px;
width: 100px;
border: 1px solid #ddd;
border-radius: 4px;
background: red;
font-size: 14px;
color: #fff;
`
const Page: FC = () => {
  const [styles, setStyles] = useState(testStyles)
  const styleObj = parseStyle(styles)
  const [classNames, setClassNames] = useState('')
  const [unMatchedStyles, setUnMatchedStyles] = useState('')
  const matchedStyleObj = (() => {
    if (!classNames) return {}
    const unMatchedStylesArr = unMatchedStyles.split('\n')
    let matchedStyle = styles
    unMatchedStylesArr.forEach(style => {
      matchedStyle = matchedStyle.replace(style, '')
    })
    return parseStyle(matchedStyle)
  })()
  const handleTransform = () => {
    const { classNames, unMatchedStyles } = getClassNames(styles)
    setClassNames(classNames.join(' '))
    setUnMatchedStyles(unMatchedStyles.map(({ key, value }) => `${key}: ${value};`).join('\n'))
  }
  return (
    <ChakraProvider>
      <div className='mx-auto flex pt-[100px] w-[1200px]  justify-between space-x-6 divide-x'>
        <div className='grow'>
          <div className='flex justify-between'>
            <div className='text-2xl font-bold'>Styles</div>
            <Button
              className='mt-2' colorScheme='teal' size='sm'
              onClick={handleTransform}
            >
              Transform
            </Button>
          </div>
          <Textarea
            className='mt-3 w-full !h-52'
            value={styles}
            onChange={e => setStyles(e.target.value)}
          />
          <Preview style={styleObj} />
        </div>
        <div className='grow pl-6'>
          <div className='text-2xl font-bold'>Results</div>
          <div>
            <Textarea
              className='mt-3 w-full !max-h-20'
              value={classNames}
            />
          </div>
          {unMatchedStyles && (
            <div className='mt-4'>
              <div className='text-xl font-bold'>Not matched styles</div>
              <div>
                <Textarea
                  className='mt-3 w-full !max-h-52'
                  value={unMatchedStyles}
                />
              </div>
            </div>
          )}
          {classNames && (
            <Preview style={matchedStyleObj} />
          )}

        </div>
      </div>
    </ChakraProvider>
  )
}
export default React.memo(Page)

