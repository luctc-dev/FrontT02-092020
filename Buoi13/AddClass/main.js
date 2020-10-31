var allBoxEl = document.querySelectorAll('.parent .box');
for(var index = 0; index < allBoxEl.length; index++) {
  allBoxEl[index].classList.add('box2');
  allBoxEl[index].style.backgroundColor = 'blue';
  allBoxEl[index].style.position = 'relative';

  allBoxEl[index].addEventListener('click', function(e) {
    console.log(e.target);
  })
}