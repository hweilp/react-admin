const FormatDate = {
  /*
  * 判断这一年是闰年还是平年
  * @params (year)
  * */
  IsLeapYear: function (year) {
    if (!typeof +year === 'number') {
      throw new Error("年份格式不正确");
    }

    if (+year < 1790) {
      throw new Error("年份不能低于1790年");
    }

    // 计算闰年方法
    // 1.能被4整除而不能被100整除
    // 2.能被400整除

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  },

  /*
  * 返回年份
  * @params (date)
  * */
  getFullYear: function (date) {
    if (!date) date = new Date();
    return date.getFullYear();
  },

  /*
  * 返回月份
  * @params (date)
  * */
  getMonth: function (date) {
    if (!date) date = new Date();
    return date.getMonth();
  },

  /*
  * 获取一月中的某一天
  * @params (date)
  * */
  getDate: function (date) {
    if (!date) date = new Date();
    return date.getDate();
  },

  /*
   * 返回月份中的第一天是星期几
   * @params (date)
   * 1 星期一
   * 2 星期二
   * 3 星期三
   * 4 星期四
   * 5 星期五
   * 6 星期六
   * 0 星期天
   * */
  getWeekDay: function (date) {
    if (!date) date = new Date();
    return new Date(FormatDate.getFullYear(date), FormatDate.getMonth(date), 1).getDay();
  }

}

export default FormatDate