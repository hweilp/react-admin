import React, { Component } from 'react'
import '../styles/test.less'
import DatePicker from '../components/datepicker/datepicker'
import FormatDate from '../components/datepicker/formatDate'
class Test extends Component{
  constructor (props) {
    super (props)
    this.state = {
      year: '2018',
      month: '8',
      day: '2',
      tags: []
    }
  }
  componentWillMount () {
    this.setState({
      year: FormatDate.getFullYear(),
      month: FormatDate.getMonth() + 1,
      day: FormatDate.getDate()
    })
  }
  selectDate(year, month, day) {
    console.log("选择时间为：" + year + '年' + month + '月' + day + '日' );
  }
  previousMonth(year, month) {
    console.log("当前日期为：" + year + '年' + month + '月');
    this.setState({tags : [7, 11]});
  }
  nextMonth(year, month) {
    console.log("当前日期为：" + year + '年' + month + '月');
    this.setState({tags : [8, 23]});
  }
  render() {
    return (
      <div className="test-page">
        <DatePicker
          onSelectDate={this.selectDate}
          onPreviousMonth={this.previousMonth}
          onNextMonth={this.nextMonth}
          year={this.state.year}
          month={this.state.month}
          day={this.state.day}
          tags={this.state.tags}/>
      </div>
    );
  }
}
export default Test;
