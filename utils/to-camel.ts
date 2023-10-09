const hyphenToCamel = (str) => {
  return str.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
}

export const toReactStyle = (styleObject: Record<string, any>) => {
  const res = {}
  for (const key in styleObject) {
    res[hyphenToCamel(key)] = styleObject[key]
  }
  return res
}
