var boxEl = document.querySelector('.box');


boxEl.addEventListener('click', function(evt) {
  console.log("click", evt);
})

boxEl.addEventListener('mouseenter', function(evt) {
  console.log("mouseenter", evt);
})

boxEl.addEventListener('mouseleave', function(evt) {
  console.log("mouseleave", evt);
})

boxEl.addEventListener('mousemove', function(evt) {
  boxEl.querySelector('.client').innerHTML = `ClientX: ${evt.clientX}px - ClientY: ${evt.clientY}px`;
  boxEl.querySelector('.offset').innerHTML = `offsetX: ${evt.offsetX}px - offsetY: ${evt.offsetY}px`;
  // boxEl.querySelector('.page').innerHTML = `pageX: ${evt.pageX}px - pageY: ${evt.pageY}px`;
  // boxEl.querySelector('.screen').innerHTML = `screenX: ${evt.screenX}px - screenY: ${evt.screenY}px`;
  // boxEl.querySelector('.xy').innerHTML = `x: ${evt.x}px - y: ${evt.y}px`;
})