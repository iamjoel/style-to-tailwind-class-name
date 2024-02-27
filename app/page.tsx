'use client'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { ChakraProvider, Textarea, Switch } from '@chakra-ui/react'
import { getClassNames } from '@/utils'
import parseStyle from '@/utils/parse-style'
import Preview from './components/preview'
import PrimaryBtn from './components/primary-btn'
import copy from 'copy-to-clipboard'
import { toReactStyle } from '@/utils/to-camel'
import { typographyStyle } from '@/config/whitelist-style-config'

const testStyles = `display: flex;
align-items: center;
justify-content: center;
margin: 4px 8px;
width: 100px;
border: 1px solid #ddd;
border-radius: 4px;
background: #f60;
font-size: 14px;
font-weight: 500;
text-align: center;
text-transform: uppercase;
line-height: 1.5;
color: var(--gray-500, #667085);
`

const Page: FC = () => {
  const [typographyStyleOnly, setTypographyStyleOnly] = useState(false)
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
    const { classNames, unMatchedStyles } = getClassNames(styles, typographyStyleOnly ? typographyStyle : undefined)
    if (classNames.length > 0) {
      // console.log(classNames)
      setClassNames(classNames.join(' '))
      setUnMatchedStyles(unMatchedStyles.map(({ key, value }) => `${key}: ${value};`).join('\n'))
    }
  }

  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = useCallback(() => {
    copy(classNames)
    setHasCopied(true)
  }, [classNames])
  useEffect(() => {
    if (!hasCopied) return
    const timer = setTimeout(() => {
      setHasCopied(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [hasCopied])

  useEffect(() => {
    handleTransform()
  }, [typographyStyleOnly, styles])

  return (
    <ChakraProvider>
      <div className='mx-auto flex pt-[100px] w-[1200px]  justify-between space-x-6 divide-x'>
        <div className='grow'>
          <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold'>Styles</div>
            <div className='flex items-center space-x-2'>
              <div className='flex items-center'>
                <Switch
                  colorScheme='teal'
                  isChecked={typographyStyleOnly}
                  onChange={e => setTypographyStyleOnly(e.target.checked)}
                />
                <span className='ml-2'>Typography style only</span>
              </div>
            </div>
          </div>
          <Textarea
            className='mt-3 w-full !h-52'
            value={styles}
            onChange={e => setStyles(e.target.value)}
          />
          <Preview style={toReactStyle(styleObj)} />
        </div>
        <div className='grow pl-6'>
          <div className='flex items-center justify-between'>
            <div className='text-2xl font-bold'>Results</div>
            {classNames && (
              <PrimaryBtn
                className='mt-2'
                variant='outline'
                onClick={handleCopy}
              >
                {hasCopied ? 'Copied' : 'Copy'}
              </PrimaryBtn>
            )}
          </div>
          <div>
            <Textarea
              className='mt-3 w-full !max-h-20'
              value={classNames}
              disabled
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
            <Preview style={toReactStyle(matchedStyleObj)} />
          )}

        </div>
      </div>
    </ChakraProvider>
  )
}
export default React.memo(Page)

