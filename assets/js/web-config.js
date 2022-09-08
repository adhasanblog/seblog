document.addEventListener('DOMContentLoaded', function () {
  subMenuControler();
});

function subMenuControler() {
  const menuItemsPrimary = document.querySelectorAll('nav ul .nav-item');

  menuItemsPrimary.forEach(function (menuItem) {
    menuItem.addEventListener('mouseover', function () {
      menuItem.classList.add('active');
    });
    menuItem.addEventListener('mouseout', function () {
      menuItem.classList.remove('active');
    });
  });
}
