// @flow

import React from 'react'
import { fromJS } from 'immutable'
import type { fromJS as Immutable } from 'immutable'
// eslint-disable-next-line
import 'flexboxgrid'

import Image from '../image'
import Modal from '../modal'
import addIdField from '../utiles/addIdField'
import findImageById from '../utiles/findImageById'
import selectNextImage from '../utiles/selectNextImage'

type Props = {
    children: Array<mixed>,
    theme: Object,
    withModal: boolean,
    infinite: boolean,
    images: Object,
    selectedImage: Object,
  }

type State = {
    images: Object,
    selectedImage: Object
  }

// flow-disable-next-line
class Gallery extends React.Component<void, Props, State> {
  getNextImage: Function
  closeModal: Function
  selectImage: Function


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

  selectImage(id: string) {
    const state = this.state
    if (state) {
      if (state.images) {
        const images = fromJS(state.images)
        this.setState({ selectedImage: findImageById(images, id) })
      }
    }
  }

  closeModal(): void {
    this.setState({ selectedImage: '' })
  }


  setImages(): Immutable {
    if (this.props && this.props.children) {
      return addIdField(this.makeListOfChildrenProps())
    }
    return undefined
  }

  makeListOfChildrenProps(): Immutable {
    if (this.props && this.props.children) {
      const children = fromJS(this.props.children)
      return children.reduce((acc, curr) =>
        acc.push(curr.get('props'))
        , fromJS([]))
    }
    return fromJS([])
  }


  // Get Next Image (forward or backward)
  getNextImage(infinite: boolean = this.props.infinite, order: string): Immutable {
    const state = this.state
    const props = this.props
    if (state !== undefined && props !== undefined) {
      const images = state.images
      const selectedImage = state.selectedImage
      const theme = props.theme
      const animationTime = theme ? theme.animationTime * 1000 : 0

      const nextImage = selectNextImage(images, selectedImage, infinite ,order)

      // Add a timeout so the transition has time to end
      const timeout = (resolve: Function) => setTimeout(() => {
        resolve(this.setState({ selectedImage: '' }))
      }, animationTime)


      if(nextImage) {
        new Promise((resolve: Function) => {
          timeout(resolve)
        })
          .then(() => this.setState({ selectedImage: nextImage }))
      } else return false
    }
  }


  render() {
    const props = this.props
    let withModal = false
    let theme = {}
    if (props) {
      if (props.withModal) withModal = true
      if (props.theme) theme = props.theme
    }
    const imageSettings = t => ({
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
    }: Object)
    return (
      <div className="row">
        {
          this.state.selectedImage && withModal &&
            <Modal
              theme={theme}
              selectedImage={this.state.selectedImage}
              closeModal={this.closeModal}
              getNextImage={this.getNextImage}
            />
        }
        {
          this.state.images.map(t => (
            <Image
              {...imageSettings(t)}
            />
          ),
          )
        }
      </div>
    )
  }
}

export default Gallery
