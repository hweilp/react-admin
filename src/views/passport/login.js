import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { user_login } from '../../store/action/action'
import { Login } from '../../api'

import { Form, Icon, Input, Button, message } from 'antd'
import '../../styles/login.less'
const FormItem = Form.Item;
class NormalLoginForm extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentWillUpdate(props, state) {
    if (props.LoginInfo.login) {
      this.props.history.push('/app/index')
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Login(values).then( res => {
          if (res.code === 2000) {
            message.success(res.msg)
            this.props.dispatch(user_login(res.data))
          }
        })

      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={'loginForm'}>
        <Form>
          <h3>欢迎登录</h3>
          <FormItem>
            {getFieldDecorator('user_name', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {/*{getFieldDecorator('remember', {*/}
              {/*valuePropName: 'checked',*/}
              {/*initialValue: true,*/}
            {/*})(*/}
              {/*<Checkbox>记住我</Checkbox>*/}
            {/*)}*/}
            {/*<a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>*/}
            <Button onClick={this.handleSubmit} type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
              登录
            </Button>
            或 <NavLink to='/register'>现在就去注册!</NavLink>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const LoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
  return { LoginInfo: state.LoginReducer }
};

export default connect(mapStateToProps)(LoginForm)
