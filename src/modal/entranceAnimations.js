// @flow

export default (theme: Object) => ({
  '@keyframes slideDownEntranceAnimation': {
    from: { transform: 'translate(-50%, -80%)', opacity: 0.3 },
    to: { transform: 'translate(-50%, -50%)', opacity: 1 }
  },
  '@keyframes scaleUpEntranceAnimation': {
    from: { transform: 'translate(-50%, -50%) scale(0.4, 0.4)', opacity: 0.3 },
    to: { transform: 'translate(-50%, -50%) scale(1, 1)', opacity: 1 }
  },
  '@keyframes slideRightEntranceAnimation': {
    from: { transform: 'translate(-80%, -50%)', opacity: 0 },
    to: { transform: 'translate(-50%, -50%)', opacity: 1 }
  },
  '@keyframes slideLeftEntranceAnimation': {
    from: { transform: 'translate(-20%, -50%)', opacity: 0.3 },
    to: { transform: 'translate(-50%, -50%)', opacity: 1 }
  },
  scaleUpEntrance: {
    animationName: 'scaleUpAnimationEntrance',
    animationDuration: `${theme.animationTime}s`,
    animationTimingFunction: theme.animationTimingFunction || 'ease-in',
  },
  slideDownEntrance: {
    animationName: 'slideDownEntranceAnimation',
    animationDuration: `${theme.animationTime}s`,
    animationTimingFunction: theme.animationTimingFunction || 'ease-in',
  },
  slideRightEntrance: {
    animationName: 'slideRightEntranceAnimation',
    animationDuration: `${theme.animationTime}s`,
    animationTimingFunction: theme.animationTimingFunction || 'ease-in',
  },
  slideLeftEntrance: {
    animationName: 'slideLeftEntranceAnimation',
    animationDuration: `${theme.animationTime}s`,
    animationTimingFunction: theme.animationTimingFunction || 'ease-in',
  }
})
