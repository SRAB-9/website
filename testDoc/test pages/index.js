var gallery = document.getElementById('gallery');
var images = gallery.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    var modal = document.createElement('div');
    modal.classList.add('modal');
    var modalImg = document.createElement('img');
    modalImg.src = this.src;
    modal.appendChild(modalImg);
    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.addEventListener('click', function() {
      modal.remove();
    });
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
  });
}