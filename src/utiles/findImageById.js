// @flow

import type { fromJS as Immutable } from 'immutable'

export default (images: Immutable, id: string): Immutable => images.find(t => t.get('id') === id)
