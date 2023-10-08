import margin, { dynamicRules as marginDynamicRules } from './margin'
import border from './border'
// transform
import position from './position'
// display
import flex from './flex'
// vertical
// horizontal
import padding, { dynamicRules as paddingDynamicRules } from './padding'
// border
// typography
// child

const rules = [margin, border, position, flex , padding].flat(1)
export default rules

export const dynamicRules = [marginDynamicRules, paddingDynamicRules].flat(1)