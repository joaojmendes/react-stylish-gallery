// @flow

import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import type { Map } from 'immutable'

import Image from '../image'
import NavArrow from './nav-arrow'
// import Navigation from './navigation'
import style from './style'



class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedImage: this.props.selectedImage,
      exits: false,
      animationEntrance: '',
      animationExit: '',
    }
    this.getNextImage = this.getNextImage.bind(this)
  }
  props: {
    closeModal: Function,
    getNextImage: Function,
    selectedImage: Map,
    classes: {
      modal: string,
      content: string,
      contentContainer: string,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedImage: nextProps.selectedImage })
  }

  scaleDown() {
    this.setState({ exits: true }, () => console.log(this.state))
  }

  getNextImage(order: string) {
    this.props.getNextImage(undefined, order)
    if (this.props.getNextImage(undefined, order) !== false) this.setState({ exits: true })
  }

  render() {
    const { selectedImage, exits } = this.state
    const { classes, closeModal, theme } = this.props
    return (
      <div>
        <div
          className={classes.modal}
          onClick={() => closeModal()}
        />
        <div className={classNames({
          [classes.contentContainer]: true,
          [classes[`${theme.animationEntrance}Entrance`]]: selectedImage && !exits,
          [classes[`${theme.animationExit}Exit`]]: exits
        })}
        >
          <NavArrow
            iconContainerClassName={classNames({
              [classes.iconContainer]: true,
              [classes.navLeft]: true,
            })}
            iconClassName={classNames({
              [theme.leftIconClassName]: true,
              [classes.icon]: true,
            })}
            iconName={theme.leftIconName}
            order="previous"
            onClick={this.getNextImage}
          />
          <NavArrow
            iconContainerClassName={classNames({
              [classes.iconContainer]: true,
              [classes.navRight]: true,
            })}
            iconClassName={classNames({
              [theme.rightIconClassName]: true,
              [classes.icon]: true,
            })}
            iconName={theme.rightIconName}
            order="next"
            onClick={this.getNextImage}
          />
          <div className={classes.content}>
            <Image
              src={selectedImage.get('src')}
              alt={selectedImage.get('alt')}
              title={selectedImage.get('title')}
              hover={selectedImage.get('hover')}
              modal
            />
          </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(style)(Modal)
