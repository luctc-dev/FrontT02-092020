var allBoxEL = document.querySelectorAll('.parent .box');
for( let i=0; i <= allBoxEL.length-1; i++){
    allBoxEL[i].classList.add('box2');
}
console.log(allBoxEL);
