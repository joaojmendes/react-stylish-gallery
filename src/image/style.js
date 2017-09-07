// @flow

export default (theme: Object) => ({
  imageContainer: {
    position: 'relative',
    height: '100%',
    padding: 0,
  },
  gridContainer: {
    padding: theme.padding || 0,
    height: theme.height || 'auto',
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
})
