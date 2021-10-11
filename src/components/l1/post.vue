<template>
  <div class="l1">
    <div class="block_img">
      <div class="block_img_div">
        <div class="block_img_bg"></div>
        <img
          class="block_img_div_img"
          :src="getImgUrl(block.img.url)"
          :alt="block.img.alt"
        />

        <a class="block_img_div_a" href="#"
          ><img :src="getImgUrl('sv.svg')" alt=""
        /></a>
      </div>

      <div class="block_img_info">
        <h3>{{ block.text.h }}</h3>
        <p class="block_img_info_p" v-html="block.text.p"></p>
        <p class="block_img_info_m">
          <img :src="getImgUrl('m.svg')" alt="" />{{ block.info_btn.m }}
        </p>
        <a href="#div_l2">
          <button class="block_img_info_btn">
            {{ block.info_btn.text_btn }}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImgUrl: function (img_name) {
      return require("@/assets/" + img_name);
    },
  },
  props: {
    block: {
      type: Object,
    },
  },
};
</script>

<style scoped>
:root {
  --bg: white;
  --bg-text: black;
  --padding: 5px;
  --font: 3rem;
}

.l1 {
  margin-bottom: 200px;
}
.l1:nth-child(2n) > .block_img > .block_img_div {
  order: 1;
}

.l1:nth-child(2n) > .block_img > .block_img_info {
  padding-left: 0px;
  margin-left: 80px;
}

.block_img {
  display: flex;
  position: relative;
}

h3 {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 43px;
  color: #303766;
  margin: 0;
}

.block_img_info_p {
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #808080;
  margin: 30px 0 0 0;
  max-width: 432px;
}

.block_img_info {
  flex: 0 0 auto;
  margin: 0 auto;
  padding-left: 140px;
}

.block_img_bg {
  background: #f0f3f8;
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: 100%;
  right: -30px;
  bottom: -30px;
}

.block_img_div {
  position: relative;
  height: 400px;
  flex: 0 0 auto;
  width: 600px;
}
.block_img_div_img {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: 100%;
  border-radius: 15px;
}

.block_img_div_a {
  position: absolute;
  bottom: 30px;
  left: 30px;
}

.block_img_info_m {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 31px;
  color: #303766;
  display: flex;
  margin: 116px 0 0 0;
}

.block_img_info_m > img {
  margin-right: 30px;
}
.block_img_info_btn {
  padding: 20px 30px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #f29a38;
  border: 1px solid;
  background: none;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
}

@media (max-width: 769px) {
  .block_img {
    display: block;
    padding: 0 20px;
    max-width: 100%;
  }
  .block_img_div {
    width: auto;
    margin-right: 30px;
  }
  .block_img_info {
    margin: 100px auto 0;
    padding-left: 0;
    width: auto;
    max-width: 440px;
  }
  .l1:nth-child(2n) > .block_img > .block_img_div {
    left: 0;
  }
  .block_img_info_p {
    margin: 40px 0 0 0;
  }
  .block_img_info_m {
    margin: 80px 0 0 0;
  }

  .l1:nth-child(2n) > .block_img > .block_img_info {
    margin-left: auto;
  }
}

@media (max-width: 376px) {
  .block_img_bg {
    display: none;
  }
  .block_img_div_img {
    position: unset;
    max-width: none;
    width: 90vw;
  }
  .block_img_div {
    margin-right: 0px;
  }
  .block_img {
    padding: 10px;
  }

  .block_img_div {
    height: auto;
  }
  .l1 {
    margin-bottom: 40px;
  }
  .slider_ars_point:not(:first-child):not(:last-child) {
    margin: 0 10px;
  }
  .block_img_info {
    margin: 50px auto 0;
  }
  h3 {
    font-size: 20px;
    line-height: 25px;
  }
  .block_img_info_p {
    margin: 30px 0 0 0;
  }
  .block_img_info_p > p {
    font-size: 14px;
    line-height: 16px;
  }
  .block_img_info_m {
    font-size: 20px;
    line-height: 25px;
    margin: 60px 0 0 0;
  }
  .block_img_div_a > img {
    width: 40px;
    height: 30px;
  }
  .block_img_div_a {
    bottom: 20px;
    left: 20px;
  }
}
</style>




