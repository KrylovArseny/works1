<template>
  <div id="div_l2" class="div_l2">
    <h2 class="div_l2_h2">Узнать свободные места</h2>
    <form class="div_l2_form" @submit.prevent="onSubmit">
      <div class="div_l2_form_flex">
        <p class="name_p">
          <input id="name" placeholder="Ваше имя" />
          <span class="form_span"
            ><img src="./../../assets/name.svg" alt=""
          /></span>
        </p>

        <p class="phone_p">
          <input id="phone" placeholder="Ваш телефон" />
          <span class="form_span"
            ><img src="./../../assets/phone.svg" alt=""
          /></span>
        </p>
      </div>
      <div class="div_l2_form_flex">
        <p class="div_l2_form_flex_btn">
          <button
            class="div_l2_btn"
            :disabled="!checked"
            type="submit"
            value="Submit"
          >
            Узнать
          </button>
        </p>
        <div class="div_l2_p_block">
          <input type="checkbox" id="checkbox" v-model="checked" />
          <p class="div_l2_p">
            Подтверждаю, что я ознакомлен с политикой
            <b>конфиденциальности</b> и даю свое согласие на сбор и обработку
            персональных данных
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    checked: false,
  },
};
</script>


<style scoped>
.div_l2 {
  max-width: 1290px;
  background: #ffffff;
  box-shadow: 0px 15px 50px rgb(120 120 120 / 10%);
  border-radius: 15px;
  padding: 40px 0 50px 0;
  margin-bottom: 130px;
}
.div_l2_h2 {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 43px;
  text-align: center;
  color: #303766;
  margin: 40px 0 50px 0;
}
.div_l2_p {
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #c4c4c4;
  max-width: 270px;
  margin: 0;
  padding-left: 20px;
}
.div_l2_p_block {
  display: flex;
}

.div_l2_form_flex {
  width: 300px;
}
.div_l2_form_flex_btn {
  margin: 0;
}
.div_l2_form_flex:nth-child(1) {
  margin-right: 30px;
}
#name,
#phone {
  background: #ffffff;
  border: 0.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 18px 0 18px 55px;
  max-width: 300px;
  width: 100%;
}
.name_p,
.phone_p {
  position: relative;
}
.name_p {
  margin: 0 0px 20px 0;
}

.form_span {
  position: absolute;
  top: 18px;
  left: 20px;
  z-index: 1;
}
.div_l2_btn {
  background: #f29a38;
  border-radius: 10px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  border: none;
  padding: 15px 0;
  width: 100%;
  cursor: pointer;
  border: 1px solid #f29a38;
}
.div_l2_btn:hover {
  background: #fff;
  color: #f29a38;
}

.div_l2_form {
  display: flex;
  justify-content: center;
}

.div_l2_p_block {
  margin-top: 20px;
}
@media (max-width: 769px) {
  .div_l2_form {
    display: block;
  }
  .div_l2 {
    margin: 0 120px 80px 120px;
  }
  .div_l2_h2 {
    padding: 0 100px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
  }

  .name_p {
    margin: 0;
  }
  .div_l2_form_flex_btn {
    margin: 0;
  }
  .div_l2_btn {
    width: 100%;
  }
  .div_l2_p {
    padding-left: 15px;
  }
  .div_l2_p_block {
    margin: 24px 0 0 0;
  }
  .phone_p {
    margin: 20px 0 60px 0;
  }
  .div_l2_form_flex {
    margin: 0 auto;
  }
  .div_l2_form_flex:nth-child(1) {
    margin: 0 auto;
  }
}
@media (max-width: 376px) {
  .div_l2 {
    margin: 100px 0 80px 0;
    padding: 0 15px 80px 15px;
  }
  .div_l2_h2 {
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    padding: 60px 0 0 0;
  }
}
</style>
