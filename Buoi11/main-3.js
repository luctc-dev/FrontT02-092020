
var previousScrollY = window.scrollY;

document.addEventListener('scroll', function(e) {
  var currentScrollY = window.scrollY;
  
  if (currentScrollY > previousScrollY) {
    console.log("scroll down")
    document.querySelector('header').classList.add('hidden-menu');
  }

  if (currentScrollY < previousScrollY) {
    console.log("scroll up");
    document.querySelector('header').classList.remove('hidden-menu');
  }

  previousScrollY = currentScrollY;
})

// Trong lần chạy đầu tiên 

// currentScrollY = 30, previousScrollY = 0  -- - - - - - - -  previousScrollY = 30

// Trong lần chạy thứ hai
//currentScrollY = 35,previousScrollY = 30  -- - - - - - -- - - previousScrollY = 35

// Trong lần chạy thứ ba 
//currentScrollY = 29,previousScrollY = 35 -- - - - - - -- - - previousScrollY = 29