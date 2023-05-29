window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.pageYOffset > 0) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
    }
  };

  function moveButton() {
    var button = document.querySelector('.button');
    var newTop = Math.random() * (window.innerHeight - 100);
    var newLeft = Math.random() * (window.innerWidth - 100);

    button.style.top = newTop + 'px';
    button.style.left = newLeft + 'px';
  }