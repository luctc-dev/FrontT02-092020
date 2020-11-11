var dropdownList= Array.from(document.querySelectorAll('.dropdown'));
// console.log(dropdownList);
dropdownList.forEach(
    function(el, index){
        // console.log(el , index);
        var btn = el.querySelector('.btn');
        btn.addEventListener('click', function(event){
            if(el.classList.value.indexOf('open') === -1){ //open chua ton tai
                el.classList.add('open');
            } else{
                el.classList.remove('open');
            }
            
            /*
            Nếu phần tử "el" đã tồn tại class "open" rồi -> thì tiến hành remove(xóa)
            Ngược lại nếu chưa có class " open" thì thêm vào
            */
        })
    }
)