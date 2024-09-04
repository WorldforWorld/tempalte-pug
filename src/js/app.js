console.log('hi');
// Скрипт для добавления класса "active" при клике на пункт меню
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      menuItem.classList.toggle('active');
    });
  });
});
