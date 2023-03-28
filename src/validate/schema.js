export default {
  // regex 說明
  // RegExp 驗證
  // const rex1 = /^[A-Za-z\d]{6,12}$/
  // (?![0-9]+$)
  // 断言此位置之后，字符串结尾之前，所有的字符不能全部由数字组成
  // (?![a-zA-Z]+$)
  // 断言此位置之后，字符串结尾之前，所有的字符不能全部由26个英文字母组成
  // [0-9A-Za-z]{6,12}
  // 匹配整个字符串由6~12位由数字和26个英文字母混合而成
  // EX: const rex = /^(?![\d]+$)(?![A-Za-z]+$)[A-Za-z\d]{6,12}$/
  // \W 特殊符號
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,10}$/
  name (value) {
    const regex = /^[A-Za-z-\u4e00-\u9fa5]+$/
    if (!value) return 'required 必填'
    if (!regex.test(value)) return '請輸入中英文'
    return true
  },
  account (value) {
    // 6 ~ 20 字中英文組成
    // 至少包含 1 個大小寫英文
    // 至少包含 1 個數字
    const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/
    if (!value) return 'required 必填'
    if (!regex.test(value)) return '請輸入6 ~ 20 字 中英文組成'
    return true
  },
  // 6 ~ 16 字中英文組成
  // 至少包含 1 個大小寫英文
  // 至少包含 1 個數字
  secret (value) {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/
    if (!value) return 'required 必填'
    if (!regex.test(value)) return '請輸入6 ~ 16 字 中英文組成'
    return true
  },
  phone (value) {
    // const regex = /^\d{4}[\\-]\d{3}[\\-]\d{3}/ // 09xx-xxx-xxx
    // /^09\d{2}-\d{6}$/  // 09xx-xxxxxx
    const regex = /^09[0-9]{8}$/
    if (!value) return 'required 必填'
    if (!regex.test(value)) return '請輸入完整的電話號碼'
    return true
  },
  email (value) {
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if (!value) return 'required 必填'
    if (!regex.test(value)) return '請輸入完整的Email'
    return true
  }
}
