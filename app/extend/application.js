function getTime() {
  let now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  let nowTime = year + '年' + month + '月' + date + '日' + hour + ':' + minute + ':' + second

  return nowTime
}

module.exports = {
  currentTime() {
    const current = getTime()

    return current
  },
}
