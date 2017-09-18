// @flow

import { fromJS } from 'immutable'
import getIndex from './getIndex'

export default (images: Object, selectedImage: Object, infinite: boolean, order: string) => {
  images = fromJS(images)
  const selectedId = selectedImage.get('id')
  const index = getIndex(images, selectedId)  // Get the index of the currently selected image
  const length = images.size

  if (order === 'next') {
    if (infinite && index === length - 1) return images.get(0)
    if (index !== length - 1) return images.get(index + 1)
    return false
  }
  if (order === 'previous') {
    if (infinite && index === 0 ) return images.get(length - 1)
    if (index !== 0 ) return images.get(index - 1)
    return false
  }
  return false
}
