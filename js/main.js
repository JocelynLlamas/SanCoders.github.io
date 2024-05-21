AOS.init({
  once: true,
  disable: 'phone',
  duration: 750,
  easing: 'ease-out-quart',
});

const carouselEl = document.querySelectorAll('.carousel');
if (carouselEl.length > 0) {
  const carousel = new Swiper('.carousel', {
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 24,
    autoplay: {
      delay: 7000,
    },
    navigation: {
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    },
  });
}

// Light switcher
// const lightSwitches = document.querySelectorAll('.light-switch');
// if (lightSwitches.length > 0) {
//   lightSwitches.forEach((lightSwitch, i) => {
//     if (localStorage.getItem('dark-mode') === 'true' || !('dark-mode' in localStorage)) {
//       // eslint-disable-next-line no-param-reassign
//       lightSwitch.checked = true;
//     }
//     lightSwitch.addEventListener('change', () => {
//       const { checked } = lightSwitch;
//       lightSwitches.forEach((el, n) => {
//         if (n !== i) {
//           // eslint-disable-next-line no-param-reassign
//           el.checked = checked;
//         }
//       });
//       if (lightSwitch.checked) {
//         document.documentElement.classList.add('dark');
//         localStorage.setItem('dark-mode', true);
//       } else {
//         document.documentElement.classList.remove('dark');
//         localStorage.setItem('dark-mode', false);
//       }
//     });
//   });
// }

// Light switcher
// const lightSwitches = document.querySelectorAll('.light-switch');
// if (lightSwitches.length > 0) {
//   lightSwitches.forEach((lightSwitch, i) => {
//     // Inicializa el estado del switch y el tema al cargar
//     if (localStorage.getItem('dark-mode') === 'true' || !('dark-mode' in localStorage)) {
//       lightSwitch.checked = true;
//       document.documentElement.classList.add('dark');
//       document.getElementById('logoImage').src = './images/3blanco.png';
//     } else {
//       lightSwitch.checked = false;
//       document.documentElement.classList.remove('dark');
//       document.getElementById('logoImage').src = './images/3.png';
//     }

//     // Agrega el evento para cambiar el tema
//     lightSwitch.addEventListener('change', () => {
//       const { checked } = lightSwitch;
//       lightSwitches.forEach((el, n) => {
//         if (n !== i) {
//           el.checked = checked;
//         }
//       });

//       if (checked) {
//         document.documentElement.classList.add('dark');
//         document.getElementById('logoImage').src = './images/3blanco.png';
//         localStorage.setItem('dark-mode', 'true');
//       } else {
//         document.documentElement.classList.remove('dark');
//         document.getElementById('logoImage').src = './images/3.png';
//         localStorage.setItem('dark-mode', 'false');
//       }
//     });
//   });
// }

// Light switcher
const lightSwitches = document.querySelectorAll('.light-switch');
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    // Inicializa el estado del switch y el tema al cargar
    if (localStorage.getItem('dark-mode') === 'true' || !('dark-mode' in localStorage)) {
      lightSwitch.checked = true;
      document.documentElement.classList.add('dark');
      document.getElementById('logoImage').src = './images/3blanco.png';
      // document.getElementById('logoImage2').src = './images/3blanco.png';
    } else {
      lightSwitch.checked = false;
      document.documentElement.classList.remove('dark');
      document.getElementById('logoImage').src = './images/3.png';
      // document.getElementById('logoImage2').src = './images/3.png';
    }

    // Agrega el evento para cambiar el tema
    lightSwitch.addEventListener('change', () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          el.checked = checked;
        }
      });

      if (checked) {
        document.documentElement.classList.add('dark');
        document.getElementById('logoImage').src = './images/3blanco.png';
        // document.getElementById('logoImage2').src = './images/3blanco.png';
        localStorage.setItem('dark-mode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('logoImage').src = './images/3.png';
        // document.getElementById('logoImage2').src = './images/3.png';
        localStorage.setItem('dark-mode', 'false');
      }
    });
  });
}
