'use strict';


window.addEventListener('load', () => {
  // (1)ページ読み込み時に一度だけスクロール量を出力
  let flag = true;
  // (2)スクロールするたびにスクロール量を出力
  window.addEventListener('scroll', () => {
    let scroll_y = window.scrollY;
    let set_position = 200;
    const menubar = document.querySelector('.l-header');
    // console.log(flag);

    if (scroll_y > set_position) {

      if (flag) {
        menubar.classList.add('is-scrolled');
        menubar.classList.add('is-slidedown-animating');
        menubar.classList.remove('is-slideup-animating');
        flag = false;
      }
    } else {
      if (!flag) {
        menubar.classList.add('is-slideup-animating');
        menubar.classList.remove('is-slidedown-animating');

        setTimeout(() => {
          menubar.classList.remove('is-scrolled');
          flag = true;
        }, 300);
      }
    }
  });
});

/*=================================================
フェードイン
===================================================*/
// let fadeInTarget = document.querySelectorAll('.fade-in');
// console.log(fadeInTarget);

// window.addEventListener('scroll', () => {
//   for (let i = 0; i < fadeInTarget.length; i++) {
//     // 画面内のおける要素の位置座標を取得
//     const rect = fadeInTarget[i].getBoundingClientRect().top;
//     // 垂直方向のスクロール量　｜｜　または縦にどれほどスクロールしたかを取得
//     const scroll = window.pageYOffset || document.documentElement.scrollTop;

//     const offset = rect + scroll;

//     const windowHeight = window.innerHeight;
//     if (scroll > offset - windowHeight + 200) {
//       // console.log(scroll);
//       // console.log(offset);
//       fadeInTarget[i].classList.add('fadein-show');
//     }
//   }
// });

const fadeInTarget = document.querySelectorAll('.fade-in')
fadeInTarget.forEach(el => {
  gsap.from(el, 2, {
    y: 100,
    opacity: 0,
    stagger: {
      amount: 0.4,
    },
    scrollTrigger: {
      trigger: el,
      start: 'top center',
      // markers: true,
    }
  })
})


gsap.timeline({
  scrollTrigger: {
    trigger: '.situations-list',
    start: 'top center',
  }
})
  .from('.fade-in01', 0.8, {
    y: 80,
    opacity: 0,
  })
  .from('.fade-in02', 0.8, {
    y: 160,
    opacity: 0,
  })
  .from('.fade-in03', 0.8, {
    y: 240,
    opacity: 0,
  })


gsap.timeline({
  default: {
    ease: 'power2.out',
  },
  scrollTrigger: {
    trigger: '.scene-list',
    start: 'top center',
  }
})
  .from('.fade-in1', {
    opacity: 0,
    y: 160,
  })
  .from('.fade-in2', {
    opacity: 0,
    y: 80,

  })
  .from('.fade-in3', {
    opacity: 0,
    y: 40,
  })
  .from('.fade-in4', {
    opacity: 0,
    y: 160,
  })
  .from('.fade-in5', {
    opacity: 0,
    y: 80,
  })
  .from('.fade-in6', {
    opacity: 0,
    y: 40,
  })