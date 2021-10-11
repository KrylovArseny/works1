<template>
  <h2>Пространство</h2>
  <div id="slider_ars_cont">
    <div id="slider_ars">
      <l1 :blocks="blocks" />
    </div>
  </div>
  <div id="slider_ars_point"></div>

  <l2form />
</template>

<script lang="ts">
import l1 from "./components/l1/l1.vue";
import l2form from "./components/l2/l2_form.vue";

export default {
  name: "app",
  components: {
    l1,
    l2form,
  },
  mounted() {},
  props: {
    blocks: {
      default: [
        {
          img: {
            url: "l1.jpg",
            alt: "",
          },
          text: {
            h: "Опенспейс",
            p: "<p>Тихие и&nbsp;комфортные пространства с&nbsp; эргономичной и&nbsp;умной мебелью и&nbsp;отличным видом</p> <p> Каждый кабинет оборудован умными столами с&nbsp;  розетками и&nbsp;usb-портами, тумбами на&nbsp;замках и&nbsp; удобными креслами</p>",
          },
          info_btn: {
            m: "130 кв м",
            text_btn: "Узнать свободные места",
          },
        },
        {
          img: {
            url: "l2.jpg",
            alt: "",
          },
          text: {
            h: "Переговорные",
            p: "<p>Стильные и гармонично обустроенные пространства для продуктивной работы и деловых встреч</p> <p> В каждой переговорной есть умная доска-проектор, чтобы вам было удобно проводить совещания и встречи</p>",
          },
          info_btn: {
            m: "от 17 до 22 кв м",
            text_btn: "Узнать свободные места",
          },
        },
        {
          img: {
            url: "l3.jpg",
            alt: "",
          },
          text: {
            h: "Конференц-зал",
            p: "<p>Зал оборудован мобильной 55-ти дюймовой панелью с HDMI подключением и профессиональным звуковым оборудованием.</p> <p>  В зале имеется маркерная доска для размещения графической информации</p>",
          },
          info_btn: {
            m: "от 60 до 70 кв м",
            text_btn: "Узнать свободные места",
          },
        },
      ],
    },
  },
};
</script>

<style>
.block_img_info_btn:hover {
  background: #f29a38;
  color: #fff;
}
#app {
  max-width: 1290px;
  margin: 0 auto;
}

h2 {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 55px;
  color: #303766;
  margin: 100px 0 200px 0;
  text-align: center;
}

@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"),
    url("./assets/fonts/Gilroy-Regular.ttf") format("truetype"),
    url("./assets/fonts/Gilroy-Regular.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Gilroy-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: local("Gilroy Extrabold"), local("Gilroy-Extrabold"),
    url("./assets/fonts/Gilroy-Extrabold.woff2") format("woff2"),
    url("./assets/fonts/Gilroy-Extrabold.woff") format("woff"),
    url("./assets/fonts/Gilroy-Extrabold.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: local("Gilroy Semibold"), local("Gilroy-Semibold"),
    url("./assets/fonts/Gilroy-Semibold.woff2") format("woff2"),
    url("./assets/fonts/Gilroy-Semibold.woff") format("woff"),
    url("./assets/fonts/Gilroy-Semibold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@media (max-width: 768px) {
  h2 {
    margin: 80px 0 100px 0;
  }
}

@media (max-width: 376px) {
  #slider_ars {
    display: flex;
    position: relative;
    left: 0;
    transition: all ease 1s;
  }

  .ars_dot {
    width: 9px;
    height: 9px;
    background: #dee6f4;
    border-radius: 100px;
    cursor: pointer;
  }

  #slider_ars_point {
    display: flex;
    justify-content: center;
  }

  .active {
    background: #303766;
  }
  .ars_dot:not(:first-child):not(:last-child) {
    margin: 0 10px;
  }
  h2 {
    font-size: 25px;
    line-height: 31px;
    margin: 40px 0 90px 0;
  }
}
</style>
