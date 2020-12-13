document.addEventListener('scroll', ev => {
  let desktopheader = document.getElementById('desktop-header');
  let mobileheader = document.getElementById('mobile-header');

  if (window.pageYOffset > 100) {
    desktopheader.style.backgroundColor = '#1b1b1b';
    mobileheader.style.backgroundColor = '#1b1b1b';
  } else {
    desktopheader.style.backgroundColor = 'transparent';
    mobileheader.style.backgroundColor = 'transparent';
  }
});

let sidebartoggle = document.querySelector('#a1');
sidebartoggle.addEventListener('click', evt => {

  if (evt.target.classList.contains('fa-bars')) {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.width = '100%';
    document.querySelector('body').style.overflow = 'hidden';
  } else if (evt.target.classList.contains('fa-times')) {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.width = '0';
    document.querySelector('body').style.overflow = 'auto';
  }

});
