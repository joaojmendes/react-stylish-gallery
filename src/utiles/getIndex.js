// @flow

import type { fromJS as Immutable } from 'immutable'

export default (List: Immutable, comparator: string) =>  List.findIndex(t => t.get('id') === comparator)
