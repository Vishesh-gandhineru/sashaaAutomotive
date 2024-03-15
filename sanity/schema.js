import {blockContent} from './schemaTypes/blockContent'
import {category} from './schemaTypes/category'
import {teamMember} from './schemaTypes/teamMember'
import {heroSlider} from './schemaTypes/HeroSlider'
import { counters } from './schemaTypes/counters'

export const schema = {
  types: [heroSlider,counters,teamMember, category, blockContent],
}
