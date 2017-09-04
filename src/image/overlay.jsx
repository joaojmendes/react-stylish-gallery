// @flow

import React from 'react'

type Props = {
  id: string,
  overlayClass?: string,
  textClass?: string,
  title?: string,
  onClick: Function
}

const Overlay = ({ id, overlayClass, textClass, title, onClick }: Props) => (
  <div className={overlayClass} onClick={() => onClick(id)} />
)

export default Overlay
