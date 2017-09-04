// @flow

import React from 'react'
import Image from '../image'

const Navigation = ({ images }) => (
  <div className="row" style={{ marginTop: '10px' }}>
    {
      images.map(t =>
          <Image
            key={t.get('id')}
            size={2}
            // style={{ height: '100%' }}
            src={t.get('src')}
            alt={t.get('alt')}
            modal
          />
      )
    }
  </div>
)

export default Navigation
