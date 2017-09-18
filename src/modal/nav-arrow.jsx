// @flow

import React from 'react'

type Props = {
  iconClassName: string,
  iconContainerClassName: string,
  iconName: string,
  order: string,
  onClick: Function,
}

const NavArrow = ({ iconContainerClassName, iconClassName, iconName, onClick, order }: Props) => (
  <button
    className={iconContainerClassName}
    onClick={() => onClick(order)}
  >
    <i className={iconClassName && iconClassName}>{iconName && iconName}</i>
    {
      order === 'previous' && !iconName &&
        <svg fill="#fff" height="60" viewBox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
          <path d="M0-.5h24v24H0z" fill="none"/>
        </svg>
    }
    {
      order === 'next' && !iconName &&
        <svg fill="#fff" height="60" viewBox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
            <path d="M0-.25h24v24H0z" fill="none"/>
        </svg>
    }
  </button>
)

export default NavArrow
