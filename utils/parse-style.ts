import doParseStyle from 'style-to-object'

const parseStyle = (styles: string) => {
  if(!styles) {
    return {}
  }
  try {
    return doParseStyle(styles) || {}
  }
  catch(e) {
    return {}
  }
}

export default parseStyle