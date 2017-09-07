// @flow

import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import style from './style'
import Overlay from '../overlay'

type Props = {
  theme: {
    padding: string,
    height: string,
  },
  classes: Object,
  size: number,
  src: string,
  alt: string,
  id: string,
  modal: boolean,
  className?: string,
  onClick: Function,
  children: Function,
}



const enhanceChildren = (children, selectImage, onClick, id) => ({
  ...children,
  props: {
    ...children.props,
    selectImage,
    onClick,
    id,
  }
})

const Image = ({ classes, size, className, src, alt, id, onClick, selectImage, modal, theme, children }: Props) => (
  <div
    className={classNames({
      [`col-md-${size || 4}`]: !modal,
      'col-xs-12': true,
      [classes.gridContainer]: true,
    })}
  >
    <div className={classes.imageContainer}>
      {!modal && enhanceChildren(children, selectImage, onClick, id)}
      <img
        className={classNames({
          [className]: className,
          [classes.image]: true,
        })}
        src={src}
        alt={alt}
        onClick={() => !modal && onClick()}
      />
    </div>
  </div>
)

export default injectSheet(style)(Image)
