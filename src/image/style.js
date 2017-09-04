// @flow
import overlay from './overlayAnimations'

export default (theme: Object) => ({
  ...overlay(theme, theme.overlay),
  imageContainer: {
    position: 'relative',
    height: '100%',
    padding: 0,
  },
  gridContainer: {
    padding: theme.image.padding || 0,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'block',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  overlayContent: {
    position: 'absolute',
    color: theme.overlay.color,
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
