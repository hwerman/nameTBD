console.log('script.js connected')

window.onload = ( () => {

  let showLogin = document.querySelector('#showLogin')
  let login = document.querySelector('#loginDiv');

  showLogin.addEventListener('click', showLoginFunc);

  function showLoginFunc() {
    console.log('clicked')
    console.log(login)
    login.style.display = 'block';
    showLogin.style.display = 'none';
  }

})
