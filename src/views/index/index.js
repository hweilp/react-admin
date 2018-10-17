import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Arae from '../../components/area/area'
import { Form, Icon, Input, Select } from 'antd'
import '../../styles/index.less'
const FormItem = Form.Item
const Option = Select.Option

class Index extends Component{
  constructor (props) {
    super (props)
    this.state = {
      value: 'rmb',
      list: [
        { value: 'rmb', label: 'RMB' },
        { value: 'dollar', label: 'Dollar' }
      ]
    }
  }
  onAreaCallback (val) {
    console.log(val)
  }
  handleCurrencyChange = (val) => {
    console.log(val)
    this.setState({
      value: val
    })
  }
  render() {
    const SelectOptions = this.state.list
    return (
      <div className="index">
        <div className="index-header">
          this is index
          <NavLink to="/login" style={{marign: '20px 0'}}>login</NavLink>
          <NavLink to="/register">register</NavLink>
          <FormItem className={'view'}>
            <Arae
              onAreaCallback={this.onAreaCallback.bind(this)}
              className={'area-box'}
              isThreeLevelLinkage={true}
              defaultValue={['500000', '500100', '500101']}
            />
          </FormItem>
          <FormItem className={'view'}>
            <Input className={'c-input'} prefix={<Icon type="compass" style={{ fontSize: 14, color: '#2E9321' }} />} placeholder={'出发地'} />
          </FormItem>

          <FormItem className={'view'}>
            <Select
              value={this.state.value}
              className={'c-select'}
              size={'large'}
              onChange={this.handleCurrencyChange}
            >
              {
                SelectOptions.map(item => {
                  return <Option value={item.value} key={item.value}>{item.label}</Option>
                })
              }
            </Select>
          </FormItem>
        </div>
      </div>
    )
  }
}
export default Index
