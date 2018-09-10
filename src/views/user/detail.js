import React, { Component } from 'react'
import { Form, Input, Icon, Button, message, Upload} from 'antd'
// import ImgUpload from '../../components/imgUpload/imgUpload'
import { UserDetail, UserUpdate } from '../../api'
import { BaseUrl } from '../../api/apiConfig'
import { GetRequest } from '../../utils'

const FormItem = Form.Item;

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}


class UserDetailForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      confirmDirty: false,
      loading: false,
      UploadRequestUrl: BaseUrl,
      userInfo: {
        user_id: '',
        user_name: '',
        password: '',
        user_mobile: '',
        user_avatar: ''
      }
    }
  }
  componentWillMount = () => {
    this.getData()
  }
  getData = () => {
    let { id } = GetRequest(this.props.location.search)
    UserDetail({params: {id: id}}).then(res => {
      let data = res.data.list[0]
      this.setState({
        userInfo: {
          user_id: data.user_id,
          user_name: data.user_name,
          password: data.password,
          user_mobile: data.user_mobile,
          user_avatar: data.user_avatar
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }
  goBack = () => {
    this.props.history.goBack()
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  validatorPassword = (rule, value, callback) => {
    let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
    let errMsg = '不少于6位,至少包含一个字母和一个数字!'
    if (!passwordReg.test(value)) {
      callback(errMsg)
    } else {
      callback()
    }
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致，请重新输入密码!');
    } else {
      callback();
    }
  }

  validatorPhone = (rule, value, callback) => {
    let phoneReg = /^[1][3456789][0-9]{9}$/
    let errMsg = '手机号格式有误!'
    if (!phoneReg.test(value)) {
      callback(errMsg)
    } else {
      callback()
    }
  }
  handleInputChange = (info) => {
    let data = info.file.response || {}
    if (data.code && data.code === 2000) {
      const UserInfo = this.state.userInfo
      UserInfo.user_avatar = data.data.allPath
      this.setState({
        userInfo: UserInfo
      })
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.user_id = this.state.userInfo.user_id
        values.user_avatar = this.state.userInfo.user_avatar
        delete values.confirm
        UserUpdate(values).then( res => {
          if (res.code === 2000) {
            message.success(res.msg)
            this.props.history.push('/app/user/list')
          }
        })
      }
    });
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      }
    }
    const imageUrl = this.state.userInfo.user_avatar
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    return (
      <div className="page-main">
        <div className={'page-title'}>
          <h3>用户编辑</h3>
        </div>
        <div className={'page-opr'}>
          <Button icon="arrow-left" onClick={this.goBack}>返回</Button>
        </div>
        <div className={'page-form'}>
          <Form className={'user-add-form'} style={{width: '500px'}}>
            <FormItem
              {...formItemLayout}
              label="用户名"
            >
              {getFieldDecorator('user_name', {
                initialValue: this.state.userInfo.user_name,
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码"
            >
              {getFieldDecorator('password', {
                initialValue: this.state.userInfo.password,
                rules: [
                  { required: true, message: '请输入密码!' },
                  { validator: this.validatorPassword }
                ],
              })(
                <Input type={'password'} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="密码" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="确认密码"
            >
              {getFieldDecorator('confirm', {
                initialValue: this.state.userInfo.password,
                rules: [
                  { required: true, message: '请确认密码!' },
                  { validator: this.compareToFirstPassword}
                ]
              })(
                <Input type={'password'} onBlur={this.handleConfirmBlur} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="确认密码" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="电话号码"
            >
              {getFieldDecorator('user_mobile', {
                initialValue: this.state.userInfo.user_mobile,
                rules: [
                  { required: true, message: '请输入电话号码!' },
                  { validator: this.validatorPhone}
                ]
              })(
                <Input onBlur={this.handleConfirmBlur} prefix={<Icon type="phone" style={{ fontSize: 13 }} />} placeholder="电话号码" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="用户头像"
            >
              {/*<ImgUpload imgUrl={this.state.userInfo.user_avatar} upOnChange={this.handleInputChange}/>*/}
              <div style={{width: '105px', height: '105px'}}>
                <Upload
                  name="file"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action={'http://www.hw.com:8081/api/upload'}
                  beforeUpload={beforeUpload}
                  onChange={this.handleInputChange}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>
              </div>
            </FormItem>
            <FormItem
              wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
              }}
            >
              <Button onClick={this.handleSubmit} type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                编辑
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
const UsersDetail = Form.create()(UserDetailForm)

export default UsersDetail