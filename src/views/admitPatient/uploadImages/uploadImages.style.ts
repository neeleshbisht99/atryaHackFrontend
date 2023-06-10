import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme:any) => {
  return {
    subtitleText: {
      display: 'flex',
      fontSize: 10,
      color: 'gray',
      marginTop: 5,
    },
    browseInput: {
      display: 'none',
    },
    browseParent: {
      textAlign: 'center',
    },
    rightParent: {
      borderLeft: '1px solid #C7CEDC',
    },
    imageContainerParent: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      minHeight: 220,
      maxHeight: 220,
      overflow: 'auto',
      alignItems: 'center',
      position: 'relative',
    },
    imageRemoveIcon: {
      position: 'absolute',
      zIndex: 2,
      background: 'white',
      border: '1px solid black',
      borderRadius: '50%',
      width: 20,
      height: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      right: 0,
      cursor: 'pointer',
    },
    imagePreview: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: 200,
      height: 100,
      margin: 5,
    },
    imagePreviewParent: {
      position: 'relative',
    },
    imageContainerLoader: { position: 'absolute' },
  }
})

export default useStyles
