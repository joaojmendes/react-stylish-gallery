// @flow

export default (theme:Object) => ({
  '@keyframes scaleDownExitAnimation': {
    from: { transform: 'translate(-50%, -50%) scale(1, 1)', opacity: 1 },
    to: { transform: 'translate(-50%, -50%) scale(0.2, 0.2)', opacity: 0 }
  },
  '@keyframes slideDownExitAnimation': {
    from: { transform: 'translate(-50%, -50%)', opacity: 1 },
    to: { transform: 'translate(-50%, -20%)', opacity: 0 }
  },
  '@keyframes slideRightExitAnimation': {
    from: { transform: 'translate(-50%, -50%)', opacity: 1 },
    to: { transform: 'translate(-20%, -50%)', opacity: 0 }
  },
  scaleDownExit: {
    animationName: 'scaleDownExitAnimation',
    animationDuration: `${theme.animationTime}s`,
    animationTimingFunction: theme.animationTimingFunction || 'ease-in',
  },
  slideDownExit: {
    animationName: 'slideDownExitAnimation',
    animationDuration: `${theme.animationTime}s`,
    animationTimingFunction: theme.animationTimingFunction || 'ease-in',
  },
  slideRightExit: {
    animationName: 'slideRightExitAnimation',
    animationDuration: `${theme.animationTime}s`,
    animationTimingFunction: theme.animationTimingFunction || 'ease-in',
  }
})
