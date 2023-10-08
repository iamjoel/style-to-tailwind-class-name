import margin, { dynamicRules as marginDynamicRules } from './margin'
import border from './border'
// transform
import position from './position'
// display
import flex from './flex'
// vertical
import height, { dynamicRules as heightDynamicRules } from './height'
// horizontal
import width, { dynamicRules as widthDynamicRules } from './width'
import padding, { dynamicRules as paddingDynamicRules } from './padding'
// typography
// child

const rules = [margin, border, position, flex, height, width, padding].flat(1)
export default rules

export const dynamicRules = [marginDynamicRules, heightDynamicRules, widthDynamicRules, paddingDynamicRules].flat(1)