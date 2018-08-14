import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import '../../styles/login.less'
const FormItem = Form.Item;
class NormalLoginForm extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={'loginForm'}>
        <Form onSubmit={this.handleSubmit}>
          <h3>欢迎登录</h3>
          <FormItem>
            {getFieldDecorator('userName', {
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
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            {/*<a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>*/}
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
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
export default LoginForm

