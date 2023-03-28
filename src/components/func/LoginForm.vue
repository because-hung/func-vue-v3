<template>
  <div class="wrap">
    <Form class="container" v-slot="{ errors }" ref="error" :validation-schema="mySchema" autocomplete="off">
      <div class="input-item">
          <div class="label">name</div>
          <Field type="text" v-model="form.name" name="name" :class="{error: errors.name, 'input-error': errors.name}" placeholder="請輸入姓名" />
          <div class="error">{{errors.name}}</div>
        </div>
        <div class="input-item">
          <div class="label">account</div>
          <Field type="tel" v-model="form.account" name="account" :class="{error: errors.account, 'input-error': errors.account}" maxlength="12" placeholder="請輸入帳號" />
          <div class="error">{{errors.account}}</div>
        </div>
         <div class="input-item">
          <div class="label">secret</div>
          <Field type="tel" v-model="form.secret" name="secret" :class="{error: errors.secret, 'input-error': errors.secret}" maxlength="12" placeholder="請輸入密碼" />
          <div class="error">{{errors.secret}}</div>
        </div>
        <div class="input-item">
          <div class="label">phone</div>
          <Field type="tel" v-model="form.phone" name="phone" :class="{error: errors.phone, 'input-error': errors.phone}" maxlength="10" placeholder="請輸入電話" />
          <div class="error">{{errors.phone}}</div>
        </div>
        <div class="input-item">
          <div class="label">email</div>
          <Field type="tel" v-model="form.email" name="email" :class="{error: errors.email, 'input-error': errors.email}"  placeholder="請輸入email" />
          <div class="error">{{errors.email}}</div>
        </div>
        <button @click="submit()">submit</button>
    </form>
  </div>
</template>
<script>
import schema from '../../validate/schema'
import { reactive, getCurrentInstance } from 'vue'
import { Form, Field } from 'vee-validate'
export default {
  name: 'LoginForm',
  components: {
    Field,
    Form
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const mySchema = {
      name: schema.name,
      account: schema.account,
      secret: schema.secret,
      phone: schema.phone,
      email: schema.email
    }
    // 表單資料
    const form = reactive({
      name: null,
      account: null,
      secret: null,
      phone: null,
      email: null
    })
    function submit () {
      proxy.$refs.error.validate().then(res => {
        console.log(res) // no res.valid
        if (res) {
          console.log('form =>', form)
        } else {
          console.log('Failed =>', form)
        }
      })
    }
    // 點擊  按鈕 滾動到表單
    // function scrollToForm () {
    //   document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' })
    // }

    // 手機格式 09xx-xxx-xxx // input 加上 @input="formatPhone"
    // function formatPhone () {
    //   const format = form.phone.split('')
    //   if (format.length > 8) {
    //     if (format[8] === '-') return
    //     format.splice(8, 0, '-')
    //   } else if (format.length > 4) {
    //     if (format[4] === '-') return
    //     format.splice(4, 0, '-')
    //   }
    //   const result = format.join('')
    //   form.phone = result
    // }
    return {
      form,
      submit,
      mySchema
    }
  }
}

</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  height: 100vh;
}
.container {
  border: 1px solid red;
  width: 500px;
  height: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .input-item{
    width: 80%;
    margin: 10px auto;
    .label{
      text-align: left;
      padding-left: 10px;
      margin-bottom: 5px;
    }
    input{
      width: 90%;
      padding: 10px;
    }
  }
  button{
      width: 100px;
      height: 50px;
    }
}
.error {
  margin-top: 5px;
  font-size: 12px;
  color: #E06D6D;
  font-weight: 400;
  line-height: 140%;
}
.input-error { // input 錯誤的時候 顯示紅框
  outline-style: none;
      border: 3px solid #E06D6D;
}
</style>
