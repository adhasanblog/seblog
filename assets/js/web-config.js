document.addEventListener('DOMContentLoaded', function () {
  menuController();
  subMenuController();
});

function menuController() {
  const menuMobileControl = document.querySelector('.menu-control-area');
  const menuMobileControlSimbol = document.querySelector(
    '.menu-control-area i'
  );
  const menuList = document.querySelector('nav .nav-list');

  menuMobileControl.addEventListener('click', function () {
    menuList.classList.toggle('active');

    if (menuList.classList.contains('active')) {
      menuMobileControlSimbol.className = 'fa-solid fa-xmark fa-xl ';
    } else {
      menuMobileControlSimbol.className = 'fa-solid fa-bars fa-xl';
    }
  });
}

function subMenuController() {
  const menuListPrimary = document.querySelector('nav .nav-list');
  const menuItemsPrimary = document.querySelectorAll('nav ul .nav-item');

  if (
    window.matchMedia('(max-width: 719px) and (min-width: 300px)').matches ===
    true
  ) {
    menuListPrimary.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav-item')) {
        menuItemsPrimary.forEach(function (menuItem) {
          menuItem.classList.remove('active');
        });
        e.target.classList.toggle('active');
      }
      console.log(e.target);
    });
  } else {
    menuItemsPrimary.forEach(function (menuItem) {
      menuItem.addEventListener('mouseover', function () {
        menuItem.classList.add('active');
      });
      menuItem.addEventListener('mouseout', function () {
        menuItem.classList.remove('active');
      });
    });
  }
}
