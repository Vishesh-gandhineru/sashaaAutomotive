import {blockContent} from './schemaTypes/blockContent'
import {teamMember} from './schemaTypes/teamMember'
import {heroSlider} from './schemaTypes/HeroSlider'
import { counters } from './schemaTypes/counters'
import { partnersLogo } from './schemaTypes/PartnersLogo'
import { WhatWeDo } from './schemaTypes/WhatWeDo'
import { Legacy } from './schemaTypes/Legacy'
import { specialOrders } from './schemaTypes/specialOrders'
import { SparePartCategory } from './schemaTypes/SparePartCategory'
import { SpareParts } from './schemaTypes/SpareParts'

export const schema = {
  types: [heroSlider,counters , partnersLogo,WhatWeDo ,Legacy,teamMember,specialOrders,SpareParts,SparePartCategory,blockContent],
}
