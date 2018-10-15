import React, { Component } from 'react'
import { Cascader } from 'antd'
import AreaLists from './area.json'
import './area.less'

export default class Area extends Component{
  static defaultProps =  {
    isThreeLevelLinkage: false, // 是否三级联动
    areaClassName: '',
    defaultValue: ['110000', '110100', '110105'], // 默认值 key/value
    onAreaCallback: () => {}
  }
  constructor (props) {
    super (props)
    this.state = {
      areaList: []
    }
  }

  // 即将挂载
  componentWillMount () {
    const areaList = this.turnData()
    this.setState({
      areaList: areaList
    })
  }

  // 挂载完成
  componentDidMount () {}

  // area.json 转换 array
  turnData (json) {
    json = json || AreaLists
    let Array = []
    for (let name in json) {
      let Obj = {}
      Obj.value = name
      Obj.label = json[name].name
      Obj.children = []

      for (let name2 in json[name].child) {

        let Obj2 = {}
        Obj2.value = name2
        Obj2.label = json[name].child[name2].name
        Obj.children.push(Obj2)

        if (this.props.isThreeLevelLinkage) {
          Obj2.children = []
          for (let name3 in json[name].child[name2].child) {
            let Obj3 = {}
            Obj3.value = name3
            Obj3.label = json[name].child[name2].child[name3]
            Obj2.children.push(Obj3)
          }
        }
      }
      Array.push(Obj)
    }
    return Array
  }

  // 选择变动
  onChange (value, selectedOptions) {
    this.props.onAreaCallback(selectedOptions)
  }

  // 组件卸载
  componentWillUnmount () {}

  render() {
    return (
      <Cascader
        placeholder={'请选择'}
        className={this.props.areaClassName}
        options={this.state.areaList}
        onChange={this.onChange.bind(this)}
        defaultValue={this.props.defaultValue}
      />
    )
  }
}
