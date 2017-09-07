// @flow

import overlayAnimations from './overlayAnimations'

export default (theme: Object) => ({
  ...overlayAnimations(theme),
  overlayContent: {
    position: 'absolute',
    color: theme.color || '#fff',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})
