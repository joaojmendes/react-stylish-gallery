// @flow

import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import style from './style'
import Overlay from './overlay'

type Props = {
  theme: Object,
  classes: Object,
  size: number,
  src: string,
  alt: string,
  id: string,
  className?: string,
  title?: string,
  hover?: boolean,
  modal?: boolean,
  onClick: Function,
}



const Image = ({ classes, size, className, src, alt, title, hover, id, onClick, modal, theme }: Props) => (
  <div
    className={classNames({
      [`col-md-${size}`]: true,
      'col-xs-12': true,
      [classes.gridContainer]: true,
    })}
  >
    <div
      className={classNames({
        [classes.imageContainer]: true,
        [classes[`${theme.overlay.animationName}Overlay`]]: hover && !modal,
      })}
    >
      {hover && !modal && (
        <Overlay
          hover={hover}
          overlayClass={classNames({
            [classes.overlayContent]: hover,
            [classes[`${theme.overlay.animationName}OverlayContent`]]: hover,
          })}
          id={id}
          onClick={onClick}
        />
      )}
      <img
        className={`${className} ${classes.image}`}
        src={src}
        alt={alt}
        onClick={() => !modal && onClick(id)}
      />
    </div>
  </div>
)

export default injectSheet(style)(Image)
