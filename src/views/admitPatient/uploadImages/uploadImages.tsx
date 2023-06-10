import Compressor from 'compressorjs'
import React, { useEffect, useRef, useState } from 'react'


import { Grid, Typography, Button } from '@mui/material'
import Loader from 'src/ui-component/circularLoader'
import ICTUploadImages from './iUploadImages'
import useStyles from './uploadImages.style'

const MB_IN_BYTES = 1000000
const CTUploadImages = (props: ICTUploadImages) => {
  const { classes } = useStyles()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [loader, setLoader] = useState(false)
  const [imagePreview, setImagePreview] = useState(props.data || [])
  const [imgPreviewEl, setImgPreviewEl] = useState([])
  useEffect(() => {
    setImgPreviewEl(
      (imagePreview as any).map((item: any, index: any) => {
        let imgUrl = item?.url || URL.createObjectURL(item)
        return (
          <div className={classes.imagePreviewParent}>
            {(!item?.url && (
              <span onClick={() => onRemoveClick(index)} className={classes.imageRemoveIcon}>
                X
              </span>
            )) ||
              null}
            <div
              key={`${index}${item.image || item.name}`}
              style={{
                backgroundImage: `url(${imgUrl})`,
              }}
              className={classes.imagePreview}
            ></div>
          </div>
        )
      })
    )
    props.onUpdate(imagePreview)
  }, [imagePreview])

  const onFileAdded = () => {
    const options = {
      maxSizeMB: 5,
      useWebWorker: true,
    }
    const files = fileInputRef.current?.files || []
    const len = files.length
    const promiseArr = []
    for (let i = 0; i < len; i++) {
      //promiseArr.push(imageCompression(files[i], options))
      promiseArr.push(
        new Compressor(files[i], {
          quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
        })
      )
    }
    setLoader(true)
    Promise.all(promiseArr)
      .then((resArr: any) => {
        const arr = [...(imagePreview as any)]
        for (let i = 0; i < resArr.length; i++) {
          if (resArr[i].file.size / MB_IN_BYTES < 5) {
            arr.push(resArr[i].file)
          }
        }
        setImagePreview(arr)
        setLoader(false)
      })
      .catch((e) => {
        alert('Please upload a valid image')
        setLoader(false)
      })
  }

  const onRemoveClick = (index: number): void => {
    const arr: any = imagePreview
    if (fileInputRef?.current?.files) {
      const dt = new DataTransfer()
      const files = fileInputRef?.current?.files
      for (let i = 0; i < (files?.length || 0); i++) {
        const file = files?.[i]
        if (file && file?.name !== arr?.[index]?.name) dt.items.add(file) // here you exclude the file. thus removing it.
      }
      // fileInputRef.current.onchange = null
      fileInputRef.current.files = dt.files // Assign the updates list
    }
    setImagePreview((imagePreview as any).filter((_: any, i: number) => i !== index))
  }
  return (
    <Grid item container>
      <Grid item xs={6}>
        <div>
          <div className={classes.imageContainerParent}>
            {imgPreviewEl?.length ? (
              imgPreviewEl
            ) : loader ? (
              <Loader style={{ position: 'absolute' }} />
            ) : (
              <Typography variant="body1">No Images</Typography>
            )}
          </div>
        </div>
      </Grid>
      <Grid className={classes.rightParent} item xs={6} container justifyContent="center" alignItems="center">
        <div className={classes.browseParent}>
          <input
            className={classes.browseInput}
            accept="image/*"
            id="contained-button-file"
            type="file"
            ref={fileInputRef}
            onChange={onFileAdded}
            multiple
          />
          <label htmlFor="contained-button-file">
            <Button variant="outlined" color="secondary" component="span">
              Browse Files
            </Button>
          </label>
          <span className={classes.subtitleText}>Maximum File Size: 1GB</span>
        </div>
      </Grid>
    </Grid>
  )
}
export default React.memo(CTUploadImages)
