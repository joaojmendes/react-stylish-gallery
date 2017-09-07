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
import uniqueIdGenerator from '../utiles/uniqueIdGenerator'

// flow-disable-next-line
class Gallery extends React.Component {
  constructor(props: Object) {
    super(props)
    this.state = {
      images: this.setImages().toJS(),
      selectedImage: '',
    }
    this.selectImage = this.selectImage.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.getNextImage = this.getNextImage.bind(this)
  }

  selectImage(id: string): void {
    const images = fromJS(this.state.images)
    this.setState({ selectedImage: findImageById(images, id) })
  }

  closeModal(): void {
    this.setState({ selectedImage: '' })
  }



  setImages(): Immutable {
    if (this.props.children) return addIdField(this.makeListOfChildrenProps())
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
    const images = fromJS(this.state.images)
    const selectedId = this.state.selectedImage.get('id')
    const index = getIndex(images, selectedId)
    const length = images.size
    const animationTime = this.props.theme ? this.props.theme.animationTime * 1000 : 0

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

 enhanceChildren(children, onClick) {
   return fromJS(children)
   .map(t => t.setIn(['props', 'selectImage'], onClick))
   .map(t => t.setIn(['props', 'id'], uniqueIdGenerator()))
   .toJS()
  }


  props: {
    children: Array,
    theme: Object,
    withModal: boolean,
    infinite: boolean
  }

  render () {
    const { withModal } = this.props
    const imageSettings = (t) => ({
      key: t.id,
      id: t.id,
      src: t.src,
      alt: t.alt,
      size: t.size,
      theme: t.theme,
      className: t.className,
      onClick: t.onClick,
      selectImage: this.selectImage,
      children: t.children,
    })
    return (
      <div className="row">
        {
          this.state.selectedImage && withModal &&
            <Modal
              theme={this.props.theme || {}}
              selectedImage={this.state.selectedImage}
              closeModal={this.closeModal}
              getNextImage={this.getNextImage}
            />
        }
        {
          this.state.images.map(t =>
          <Image
            {...imageSettings(t)}
          />)
        }
      </div>
    )
  }
}

export default Gallery
