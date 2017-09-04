// @flow

import React from 'react'
import { fromJS } from 'immutable'
import type { fromJS as Immutable } from 'immutable'
import 'flexboxgrid'

import Image from '../image'
import Modal from '../modal'
import addIdField from '../utiles/addIdField'
import findImageById from '../utiles/findImageById'
import getIndex from '../utiles/getIndex'

// flow-disable-next-line
class Gallery extends React.Component {
  constructor(props: Object) {
    super(props)
    this.state = {
      images: this.setImages(),
      selectedImage: '',
    }
    this.selectImage = this.selectImage.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.getNextImage = this.getNextImage.bind(this)
  }

  selectImage(id: string): void {
    const { images } = this.state
    this.setState({ selectedImage: findImageById(images, id) })
  }

  closeModal(): void {
    this.setState({ selectedImage: '' })
  }

  setImages(): Immutable {
    if (this.props.images) return addIdField(this.props.images)
    if (this.props.children) return addIdField(addIdField(this.makeListOfChildrenProps()))
    return undefined
  }

  makeListOfChildrenProps(): Immutable {
    const children = fromJS(this.props.children)
    return children.reduce((acc, curr, i) => {
      return acc.push(curr.get('props'))
    }, fromJS([]))
  }


  // Get Next Image (forward or backward)
  getNextImage(infinite: boolean = this.props.infinite, order: string): Immutable {
    console.log(process.env.NODE_ENV)
    const { images } = this.state
    const selectedId = this.state.selectedImage.get('id')
    const index = getIndex(images, selectedId)
    const length = this.state.images.size
    const animationTime = this.props.theme.modalSettings.animationTime * 1000

    const nextImg = (images, index) => images.get(index + 1)
    const prevImg = (images, index) => images.get(index - 1)
    const selectNextImg = (order: string, infinite: boolean) => {
      if (infinite) {
        if (order === 'next') return images.get(0)
        if (order === 'prevoius') return images.get(length - 1)
      }
      if (order === 'next') return nextImg(images, index)
      else if (order === 'previous') return prevImg(images, index)
      else return false
    }

    // Add a timeout so the transition has time to end
    const timeout = (resolve) => setTimeout(() => {
      resolve(this.setState({ selectedImage: '' }))
    }, animationTime)


    if((index !== length - 1 && order === 'next') || (index !== 0 && order === 'previous')) {
      new Promise(resolve => {
        timeout(resolve)
      })
      .then(() => this.setState({ selectedImage: selectNextImg(order) }))
    } else if (infinite){
      new Promise(resolve => {
        timeout(resolve)
      })
      .then(() => this.setState({ selectedImage: selectNextImg(order, infinite) }))
    } else {
      return false
    }
  }

  props: {
    children: Object,
    images: Array<mixed>,
    theme: Object,
    withModal: boolean,
    infinite: boolean
  }

  render () {
    const { withModal } = this.props
    const imageSettings = (t) => ({
      key: t.get('id'),
      src: t.get('src'),
      alt: t.get('alt'),
      size: t.get('size'),
      hover: t.get('hover'),
      title: t.get('title'),
      id: t.get('id'),
    })
    return (
      <div className="row">
        {
          this.state.selectedImage && withModal &&
            <Modal
              theme={this.props.theme.modalSettings}
              selectedImage={this.state.selectedImage}
              closeModal={this.closeModal}
              getNextImage={this.getNextImage}
              images={this.state.images}
            />
        }
        {
          this.state.images && this.state.images.map(t =>
            <Image
              {...imageSettings(t)}
              theme={this.props.theme}
              onClick={this.selectImage}
            />
          )
        }
      </div>
    )
  }
}

export default Gallery
