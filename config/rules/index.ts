import margin, { dynamicRules as marginDynamicRules } from './margin'
import border, { dynamicRules as borderDynamicRules } from './border'
// transform
import background, { dynamicRules as backgroundDynamicRules } from './background'
import position from './position'
// display
import flex from './flex'
// vertical
import height, { dynamicRules as heightDynamicRules } from './height'
// horizontal
import width, { dynamicRules as widthDynamicRules } from './width'
import padding, { dynamicRules as paddingDynamicRules } from './padding'
import typography, { dynamicRules as typographyDynamicRules } from './typography'
// cursor
// child

const rules = [margin, border, background, position, flex, height, width, padding, typography].flat(1)
export default rules

export const dynamicRules = [marginDynamicRules, borderDynamicRules, backgroundDynamicRules, heightDynamicRules, widthDynamicRules, paddingDynamicRules, typographyDynamicRules].flat(1)