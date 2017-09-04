// @flow

export default (theme: Object, overlay:Object): Object => ({
  // Slide Down
  slideDownOverlay: {
    '&::before': {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: 0,
      content: '""',
      transition: `${overlay.animationTime}s ${overlay.animationTimingFunction}`,
      background: overlay.background || '#000',
      opacity: overlay.opacity || 0.5,
    },
    '&:hover::before': {
      height: '100%',
    },
  },

  // Slide Up
  slideUpOverlay: {
    '&::before': {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 0,
      content: '""',
      transition: `${overlay.animationTime}s ${overlay.animationTimingFunction}`,
      background: overlay.background || '#000',
      opacity: overlay.opacity || 0.5,
    },
    '&:hover::before': {
      height: '100%',
    },
  },

  // Zoom In
  zoomInOverlay: {
    transition: '0.5s ease-in',
    '&:hover': {
      transform: 'scale(1.3, 1.3)'
    }
  },

  // Fade In
  fadeInOverlay: {
    '&::before': {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: '100%',
      content: '""',
      transition: `${overlay.animationTime}s ${overlay.animationTimingFunction}`,
      background: overlay.background || '#000',
      opacity: 0,
    },
    '&:hover::before': {
      opacity: overlay.opacity || 0.5,
    },
  },

  // Overlay Content Transitions
  // Slide Down
  slideDownOverlayContent: {
    '&::before': {
      position: 'absolute',
      textAlign: 'center',
      fontSize: '3rem',
      top: '5%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '-ms-transform': 'translate(-50%, -50%)',
      content: '""',
      transition: `${overlay.animationTime}s ${overlay.animationTimingFunction}`,
    },
    '&:hover::before': {
      content: `"${theme.overlayTitle}"`|| '"item"',
      textAlign: 'center',
      top: '50%',
    },
  },

  // Slide Up
  slideUpOverlayContent: {
    '&::before': {
      position: 'absolute',
      textAlign: 'center',
      fontSize: '3rem',
      bottom: '5%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '-ms-transform': 'translate(-50%, -50%)',
      content: '""',
      transition: `${overlay.animationTime}s ${overlay.animationTimingFunction}`,
    },
    '&:hover::before': {
      content: `"${theme.overlayTitle}"`|| '"item"',
      textAlign: 'center',
      bottom: '45%',
    },
  },

  // Fade In
  fadeInOverlayContent: {
    '&:before': {
      content: '""',
      position: 'absolute',
      textAlign: 'center',
      fontSize: '3rem',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '-ms-transform': 'translate(-50%, -50%)',
      transition: `${overlay.animationTime}s ${overlay.animationTimingFunction}`,
      opacity: 0,
    },
    '&:hover::before': {
      content: `"${theme.overlayTitle}"`|| '"item"',
      textAlign: 'center',
      opacity: 1,
    }
  }
})
