import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
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
      <div className={'registerForm'}>
        <Form onSubmit={this.handleSubmit}>
          <h3>注 册</h3>
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
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('passwordCheck', {
              rules: [{ required: true, message: '确认密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请再次输入密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
              注 册
            </Button>
            <NavLink to='/login'>已有账号，去登录!</NavLink>
          </FormItem>
        </Form>
      </div>
    )
  }
}
const LoginForm = Form.create()(NormalLoginForm);
export default LoginForm

