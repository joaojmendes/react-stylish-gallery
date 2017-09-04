// @flow

import React from 'react'

const NavArrow = ({ iconContainerClassName, iconClassName, iconName, onClick, order }) => (
  <button
    className={iconContainerClassName}
    onClick={() => onClick(order)}
  >
    <i className={iconClassName}>{iconName}</i>
  </button>
)

export default NavArrow
