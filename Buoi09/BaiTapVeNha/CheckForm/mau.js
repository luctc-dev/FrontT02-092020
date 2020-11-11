    var year = document.querySelector('.ddlNam');
    var month = document.querySelector('.ddlThang');
    var day = document.querySelector('.ddlNgay');
    //console.log(year);
    year.addEventListener('click',  function loadYear(){
        var iYear = 0; 
        var today = new Date();// lay thoi gian hien tai
        //console.log(today.getFullYear()); lay nam
        debugger;
        var yearHIenTai= today.getFullYear();
        for(iYear=1950; iYear<=yearHIenTai; iYear++){
            var optNam = document.createElement("option"); 
            optNam.innerText = iYear; 
            optNam.value = iYear;
            year.options.add(optNam);
        }
      
    })
   
    //Load Thang
    month.addEventListener('click',function loadMonth(){
        var iThang=0;
        for(iThang=1; iThang<=12; iThang++){
            var optThang = document.createElement("option");
            optThang.innerText= iThang;
            optThang.value = iThang;
            month.options.add(optThang);
        }
    }) 
    // Load Ngay
    day.addEventListener('click',function loadDay(){
        var thangValue = parseInt(month.value); 
        var SoNgay = 0;
        // Thuc hien cac dong lenh sau dua tren viec so sanh gia tri Thang
        switch (thangValue){
            case 2:
                var gtNam = year.selectedIndex;  // Lay gia tri Nam dang duoc chon trong ddlNam
                // Thuat toan tinh nam nhuan
                if((gtNam%4==0) && ((gtNam%100!=0)||(gtNam%400==0))){ // La nam nhuan
                    SoNgay = 28;
                } else { // Khong la nam nhuan
                    SoNgay = 29;
                } break;
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                SoNgay = 31;
                break;
            case 4: case 6: case 9: case 11:
                SoNgay = 30;
                break;
        }

        var iNgay=0;
        // Cho vong lap chay tu 1 den SoNgay o tren
        for(iNgay=1; iNgay<=SoNgay; iNgay++){
            var optNgay = document.createElement("option");
            optNgay.innerText = iNgay;
            optNgay.value = iNgay;
            day.options.add(optNgay);
        }
    })