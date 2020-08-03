// if the viewport is above 480px use normal dark mode, if not use mobile darkmode 

const viewportWidth = window.innerWidth

if (viewportWidth > 480) {

  // Select the button
  let localDarkmode = localStorage.getItem('darkmode')
  const btn = document.querySelector('.main__toggle__button');
  // Listen for a click on the button
  btn.addEventListener('click', function () {
    localDarkmode = localStorage.getItem('darkmode')

    // if local storage variable darmode is true, run darkMode function
    if (localDarkmode !== 'enabled') {
      enableDarkMode()
    } else {
      disableDarkmode()
    }
  })


  if (localDarkmode === 'enabled') {
    enableDarkMode()
  }

  function enableDarkMode() {

    // change moon to sun
    btn.classList.remove('fa-moon-o')
    btn.classList.add('fa-sun-o')
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.add('dark-mode');
    // toggle darkmode on main-content
    const main = document.querySelector('.main')
    main.classList.add('dark-mode');
    const a = document.querySelectorAll('a')
    a.forEach(item => item.classList.add('dark-mode'))
    const h2 = document.querySelectorAll('h2')
    h2.forEach(h2 => h2.classList.add('dark-mode'))
    const p = document.querySelectorAll('p')
    p.forEach(p => p.classList.add('dark-mode'))
    // update local storage
    localStorage.setItem('darkmode', 'enabled');
    // update localDarkmode
    localDarkmode = 'enabled'

  }
  function disableDarkmode() {

    // change sun to moon
    btn.classList.add('fa-moon-o')
    btn.classList.remove('fa-sun-o')
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.remove('dark-mode');
    // toggle darkmode on main-content
    const main = document.querySelector('.main')
    main.classList.remove('dark-mode');
    const a = document.querySelectorAll('a')
    a.forEach(item => item.classList.remove('dark-mode'))
    const h2 = document.querySelectorAll('h2')
    h2.forEach(h2 => h2.classList.remove('dark-mode'))
    const p = document.querySelectorAll('p')
    p.forEach(p => p.classList.remove('dark-mode'))
    localDarkmode = 'disabled'
    localStorage.setItem('darkmode', null)
  }
} else if (window.location.pathname != '/') {
  // Mobile darkmode

  // Select the button
  let localDarkmode = localStorage.getItem('darkmode')
  const btn = document.querySelector('.main__toggle__button');
  // Listen for a click on the button
  btn.addEventListener('click', function () {
    localDarkmode = localStorage.getItem('darkmode')

    // if local storage variable darmode is true, run darkMode function
    if (localDarkmode !== 'enabled') {
      enableDarkMode()
    } else {
      disableDarkmode()
    }
  })

  if (localDarkmode === 'enabled') {
    enableDarkMode()
  }


  function enableDarkMode() {

    // change moon to sun
    btn.classList.remove('fa-moon-o')
    btn.classList.add('fa-sun-o')
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.add('darkmode-home-mobile');
    // toggle darkmode on main-content
    const main = document.querySelector('.main')
    main.classList.add('darkmode-home-mobile');
    const a = document.querySelectorAll('a')
    a.forEach(item => item.classList.add('darkmode-home-mobile'))
    const h2 = document.querySelectorAll('h2')
    h2.forEach(h2 => h2.classList.add('darkmode-home-mobile'))
    const p = document.querySelectorAll('p')
    p.forEach(p => p.classList.add('darkmode-home-mobile'))
    // make background image dark 
    const bgimage = document.querySelector('.bgimage')
    bgimage.classList.add('darken-image')

    // update local storage
    localStorage.setItem('darkmode', 'enabled');
    // update localDarkmode
    localDarkmode = 'enabled'
  }
  function disableDarkmode() {

    // change sun to moon
    btn.classList.add('fa-moon-o')
    btn.classList.remove('fa-sun-o')
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.remove('darkmode-home-mobile');
    // toggle darkmode on main-content
    const main = document.querySelector('.main')
    main.classList.remove('darkmode-home-mobile');
    const a = document.querySelectorAll('a')
    a.forEach(item => item.classList.remove('darkmode-home-mobile'))
    const h2 = document.querySelectorAll('h2')
    h2.forEach(h2 => h2.classList.remove('darkmode-home-mobile'))
    const p = document.querySelectorAll('p')
    p.forEach(p => p.classList.remove('darkmode-home-mobile'))
    // make background image dark 
    const bgimage = document.querySelector('.bgimage')
    bgimage.classList.remove('darken-image')


    localDarkmode = 'disabled'
    localStorage.setItem('darkmode', null)
  }

} else {
  // Mobile darkmode

  // Select the button
  let localDarkmode = localStorage.getItem('darkmode')
  const btn = document.querySelector('.main__toggle__button');
  // Listen for a click on the button
  btn.addEventListener('click', function () {
    localDarkmode = localStorage.getItem('darkmode')

    // if local storage variable darmode is true, run darkMode function
    if (localDarkmode !== 'enabled') {
      enableDarkMode()
    } else {
      disableDarkmode()
    }
  })


  if (localDarkmode === 'enabled') {
    enableDarkMode()
  }

  function enableDarkMode() {

    // change moon to sun
    btn.classList.remove('fa-moon-o')
    btn.classList.add('fa-sun-o')
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.add('dark-mode');
    // toggle darkmode on main-content
    const main = document.querySelector('.main')
    main.classList.add('dark-mode');
    const a = document.querySelectorAll('a')
    a.forEach(item => item.classList.add('dark-mode'))
    const h2 = document.querySelectorAll('h2')
    h2.forEach(h2 => h2.classList.add('dark-mode'))
    const p = document.querySelectorAll('p')
    p.forEach(p => p.classList.add('dark-mode'))
    // update local storage
    localStorage.setItem('darkmode', 'enabled');
    // update localDarkmode
    localDarkmode = 'enabled'
  }
  function disableDarkmode() {

    // change sun to moon
    btn.classList.add('fa-moon-o')
    btn.classList.remove('fa-sun-o')
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.remove('dark-mode');
    // toggle darkmode on main-content
    const main = document.querySelector('.main')
    main.classList.remove('dark-mode');
    const a = document.querySelectorAll('a')
    a.forEach(item => item.classList.remove('dark-mode'))
    const h2 = document.querySelectorAll('h2')
    h2.forEach(h2 => h2.classList.remove('dark-mode'))
    const p = document.querySelectorAll('p')
    p.forEach(p => p.classList.remove('dark-mode'))
    localDarkmode = 'disabled'
    localStorage.setItem('darkmode', null)
  }

}
