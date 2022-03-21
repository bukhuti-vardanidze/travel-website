const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelector('.nav-link').forEach( n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');

} ))


/*animation */
LottieInteractivity.create({
  mode: 'scroll',
  player: '#firstLottie',
  actions: [
      {
        visibility: [0,1],
        type: 'seek',
        frames: [0, 900],
      },
    ],
});