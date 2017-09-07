// @flow

import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

import style from './style'

type Props = {
  id: string,
  theme: Object,
  classes: {
    overlayContent: string,
    slideUp: string,
    slideDown: string,
    slideRight: string,
    slideLeft: string,
    fadeIn: string,
  },
  selectImage: Function,
  onClick: Function,
}

const Overlay = ({ id, theme, classes, onClick, selectImage }: Props) => (
  <div
  className={classNames({
    [classes.overlayContent]: true,
    [classes[theme.animationName]]: theme.animationName,
    [classes.fadeIn]: !theme.animationName,
  })}
  onClick={
    () => {
      onClick && onClick()
      selectImage(id)
    }
  }
  />
)

export default injectSheet(style)(Overlay)
