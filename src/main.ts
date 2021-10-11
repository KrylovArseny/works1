import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')



window.onload = function () {
  class Slider {
    offset: number;
    width: any;
    elem: any;
    img: any[];
    parent: any;
    count: number;
    class_dot: string;
    class_dot_class: string;
    sliderLine: any;
    slider_ars_point: any;
    next: any;
    prev: any;
    btn: any;
    classList: any;
    constructor(selector: any, elem: any, btn: any) {
      this.offset = 0
      this.width
      this.elem = elem
      this.img = [...document.querySelector(selector).children]
      this.parent = document.querySelector(selector).parentElement
      this.count = this.img.length - 1
      this.class_dot = 'ars_dot'
      this.class_dot_class = '.' + this.class_dot
      this.sliderLine = document.querySelector('#slider_ars')
      this.slider_ars_point = document.querySelector('#slider_ars_point')
      this.next = document.querySelector('#slider_ars_next')
      this.prev = document.querySelector('#slider_ars_prev')
      this.btn = btn
      this._init();
    }

    _init() {
      this._dot()
      let dots = [...document.querySelectorAll(this.class_dot_class)]
      this.width = this.img[0].offsetWidth * this.elem
      this.parent.style.overflow = 'hidden'
      this.parent.style.width = this.width + 'px'
      this.sliderLine.style.left = 0 + 'px'
      this._dot_p(dots)
      if (this.btn) {
        this._btn(dots)
      }

    }

    _dot() {
      for (let i = 0; i < this.img.length / this.elem; i++) {
        if (i == 0) {
          let div = document.createElement("div");
          div.className = this.class_dot;
          div.classList.add("active");
          div.setAttribute("data-index", String(i))
          this.slider_ars_point.appendChild(div);
        } else {
          let div = document.createElement("div");
          div.className = this.class_dot;
          div.setAttribute("data-index", String(i))
          this.slider_ars_point.appendChild(div);
        }
      }
    }


    _dot_p(dots: string | any[]) {
      let widthl = this.width
      let sliderLine = this.sliderLine
      for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', (e: { target: { dataset: { index: any; }; className: any; }; }) => {

          let data = e.target.dataset.index
          let offsetAll = widthl * +data
          if (+data == 0) {
            offsetAll = 0
          }
          sliderLine.style.left = -offsetAll + 'px'
          for (i = 0; i < dots.length; i++) {
            if (dots[i].classList.contains('active')) {
              dots[i].classList.remove("active")
            }
          }
          e.target.className += " active";
        });
      }
    }




    _btn(dots: string | any[]) {
      let sliderLine = this.sliderLine
      let offset = this.offset
      let width = this.width
      let count = this.count
      let elem = this.elem
      this.next.addEventListener('click', function () {
        let offset_loc = -Number.parseInt(sliderLine.style.left)
        offset = offset_loc + width
        if (offset > width * count / elem) {
          offset = 0
        }
        sliderLine.style.left = -offset + 'px'
        for (let i = 0; i < dots.length; i++) {
          if (dots[i].classList.contains('active')) {
            dots[i].classList.remove("active")
          }

          if (dots[i].getAttribute('data') == offset / width) {
            dots[i].classList.add("active")
          }
        }
      });


      this.prev.addEventListener('click', function () {
        let offset_loc = -Number.parseInt(sliderLine.style.left)
        offset = offset_loc - width
        if (offset > width * count / elem) {
          offset = 0
        }

        if (offset < 0) {
          offset = width * count / elem
        }
        sliderLine.style.left = -offset + 'px'
        for (let i = 0; i < dots.length; i++) {
          if (dots[i].classList.contains('active')) {
            dots[i].classList.remove("active")
          }

          if (dots[i].getAttribute('data') == offset / width) {
            dots[i].classList.add("active")
          }
        }
      });

    }
  }

  if (screen.width < 376) {
    new Slider('#slider_ars', 1, false);
  }


};

