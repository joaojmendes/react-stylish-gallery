// @flow

import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import Image from '../image'
import NavArrow from './nav-arrow'
import style from './style'


type State = {
  selectedImage: Object,
  exits: boolean,
  animationEntrance: string,
  animationExit: string
}

type Props = {
  closeModal: Function,
  getNextImage: Function,
  selectedImage: Object,
  theme: {
    animationExit: string,
    animationEntrance: string,
    rightIconClassName: string,
    rightIconName: string,
    leftIconClassName: string,
    leftIconName: string,
  },
  classes: {
    modal: string,
    content: string,
    contentContainer: string,
  }
}

class Modal extends React.Component<void, Props, State> {
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

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedImage: nextProps.selectedImage })
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
          [classes[`${theme.animationExit}Exit`]]: exits,
        })}
        >

          <NavArrow
            iconContainerClassName={classNames({
              [classes.iconContainer]: true,
              [classes.navLeft]: true,
            })}
            iconClassName={classNames({
              [theme.leftIconClassName]: theme.leftIconClassName && true,
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
              [theme.rightIconClassName]: theme.rightIconClassName && true,
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
