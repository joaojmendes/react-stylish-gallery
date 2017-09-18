// @flow

import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import style from './style'

type Props = {
  classes: Object,
  size: number,
  src: string,
  alt: string,
  id: string,
  modal: boolean,
  className: ?string,
  onClick: Function,
  children: Function,
  selectImage: Function,
}


const enhanceChildren = (children, selectImage, onClick, id): Object => ({
  ...children,
  props: {
    ...children.props,
    selectImage,
    onClick,
    id,
  },
})

const Image = ({ classes, size, className, src, alt, id, onClick, selectImage, modal, children }: Props) => (
  <div
    className={classNames({
      [`col-md-${size || 4}`]: !modal,
      'col-xs-12': true,
      [classes.gridContainer]: true,
    })}
  >
    <div className={classes.imageContainer}>
      {!modal && children && enhanceChildren(children, selectImage, onClick, id)}
      <img
        className={classNames({
          [className]: className,
          [classes.image]: true,
        })}
        src={src}
        alt={alt}
        onClick={() => {
          !modal && onClick && onClick()
          !modal && selectImage(id)
        }}
      />
    </div>
  </div>
)

export default injectSheet(style)(Image)
