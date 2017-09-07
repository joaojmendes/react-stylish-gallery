// @flow

const commonFields = ({
    position,
    content,
    animationTime,
    animationTimingFunction,
    background,
    opacity
  }) => ({
    position: position || 'absolute',
    content: content || '""',
    transition: `${animationTime || 0.4}s ${animationTimingFunction || 'ease-in'}`,
    background: background || '#000',
    opacity: opacity || 0.5,
})



export default (theme: Object): Object => ({
  // Slide Right
  slideRight: {
    '&::before': {
      top: 0,
      bottom: 0,
      left: 0,
      width: 0,
      ...commonFields({
        animationTime: theme.animationTime,
        animationTimingFunction: theme.animationTimingFunction,
        background: theme.background,
        opacity: theme.opacity,
      })
    },
    '&:hover::before': {
      width: '100%',
    },
    '&::after': {
      position: 'absolute',
      textAlign: 'center',
      fontSize: `${theme.fontSize || 3}rem`,
      left: '5%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      '-ms-transform': 'translate(-50%, -50%)',
      content: '""',
      transition: `${theme.animationTime || 0.4}s ${theme.animationTimingFunction || 'ease-in'}`,
    },
    '&:hover::after': {
      content: `"${theme.overlayTitle || ''}"`,
      textAlign: 'center',
      left: '50%',
    },
  },

  // Slide Left
  slideLeft: {
    '&::before': {
      top: 0,
      bottom: 0,
      right: 0,
      width: 0,
      ...commonFields({
        animationTime: theme.animationTime,
        animationTimingFunction: theme.animationTimingFunction,
        background: theme.background,
        opacity: theme.opacity,
      })
    },
    '&:hover::before': {
      width: '100%',
    },
    '&::after': {
      position: 'absolute',
      textAlign: 'center',
      fontSize: `${theme.fontSize || 3}rem`,
      right: '5%',
      top: '50%',
      transform: 'translate(50%, -50%)',
      '-ms-transform': 'translate(50%, -50%)',
      content: '""',
      transition: `${theme.animationTime || 0.4}s ${theme.animationTimingFunction || 'ease-in'}`,
    },
    '&:hover::after': {
      content: `"${theme.overlayTitle || ''}"`,
      textAlign: 'center',
      right: '50%',
    },
  },

  // Slide Down
  slideDown: {
    '&::before': {
      top:0,
      right: 0,
      left: 0,
      height: 0,
      ...commonFields({
        animationTime: theme.animationTime,
        animationTimingFunction: theme.animationTimingFunction,
        background: theme.background,
        opacity: theme.opacity,
      })
    },
    '&:hover::before': {
      height: '100%',
    },
    '&::after': {
      position: 'absolute',
      textAlign: 'center',
      fontSize: `${theme.fontSize || 3}rem`,
      top: '5%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '-ms-transform': 'translate(-50%, -50%)',
      content: '""',
      transition: `${theme.animationTime || 0.4}s ${theme.animationTimingFunction || 'ease-in'}`,
    },
    '&:hover::after': {
      content: `"${theme.overlayTitle || ''}"`,
      textAlign: 'center',
      top: '50%',
    },
  },

  // Slide Up
  slideUp: {
    '&::before': {
      bottom: 0,
      left: 0,
      right: 0,
      height: 0,
      ...commonFields({
        animationTime: theme.animationTime,
        animationTimingFunction: theme.animationTimingFunction,
        background: theme.background,
        opacity: theme.opacity,
      })
    },
    '&:hover::before': {
      height: '100%',
    },
    '&::after': {
      position: 'absolute',
      textAlign: 'center',
      fontSize: `${theme.fontSize || 3}rem`,
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 50%)',
      '-ms-transform': 'translate(-50%, 50%)',
      content: '""',
      transition: `${theme.animationTime || 0.4}s ${theme.animationTimingFunction || 'ease-in'}`,
    },
    '&:hover::after': {
      content: `"${theme.overlayTitle || ''}"`,
      textAlign: 'center',
      bottom: '50%',
    },
  },

  // Fade In
  fadeIn: {
    '&::before': {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: '100%',
      ...commonFields({
        animationTime: theme.animationTime,
        animationTimingFunction: theme.animationTimingFunction,
        background: theme.background,
        opacity: '0',
      })
    },
    '&:hover::before': {
      opacity: theme.opacity || 0.5,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      textAlign: 'center',
      fontSize: `${theme.fontSize || 3}rem`,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '-ms-transform': 'translate(-50%, -50%)',
      transition: `${theme.animationTime || 0.4}s ${theme.animationTimingFunction || 'ease-in'}`,
      opacity: 0,
    },
    '&:hover::after': {
      content: `"${theme.overlayTitle || ''}"`,
      textAlign: 'center',
      opacity: 1,
    }
  }
})
