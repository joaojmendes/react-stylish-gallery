// @flow

import { fromJS } from 'immutable'
import type { fromJS as Immutable } from 'immutable'

import idGenerator from './uniqueIdGenerator'

export default (images: Array<mixed>): Immutable => fromJS(images).map(t => t.set('id', idGenerator()))
