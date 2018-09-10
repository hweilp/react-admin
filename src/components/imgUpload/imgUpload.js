import React, { Component } from 'react'
import '../../styles/uploadImg.less'

class ImgUpload extends Component {
  constructor (props) {
    super (props)
    this.state = {}
  }
  componentWillMount = () => {

  }
  uploadChange = (e) => {
    console.log(e.currentTarget.files[0])
    this.props.upOnChange(e)
  }
  render () {
    const imgUrl = this.props.imgUrl || ''

    return (
      <div className={'img-upload'}>
        <img src={imgUrl} alt=""/>
        <input type="file" className={'file-input'} onChange={this.uploadChange}/>
        <span className={'shade'}></span>
      </div>
    )
  }
}

export default ImgUpload