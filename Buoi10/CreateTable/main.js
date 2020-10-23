var isCreate = false;
var createBtn = document.getElementById("create-table"),
    addRow = document.getElementById("add-row"),
    addColumn = document.getElementById("add-column"),
    deleteTable = document.getElementById("delete-table");

var idxRowInput = document.getElementById("idx-row"),
    delRow = document.getElementById("delete-row");

var idxColInput = document.getElementById("idx-column"),
    delCol = document.getElementById("delete-column");
var tableArea = document.querySelector(".table-area");

createBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(!isCreate) {
        var table = document.createElement("table");
        table = renderHeader(table);
        table = renderBody(table);

        removeAllChildTable();
        tableArea.appendChild(table);

        isCreate = true;
        setTimeout(() => alert("Tạo thành công bảng 2x2!"), 100);
    } else {
        alert("Table đã được tạo. Xoá đi để tạo lại!");
    }
});

deleteTable.addEventListener("click", function(e){
    e.preventDefault();
    removeAllChildTable();
    isCreate = false;
    setTimeout(() => alert("Xoá thành công tất cả dữ liệu bảng"), 100);
});

addRow.addEventListener("click", function(e){
    e.preventDefault();
    if(isCreate) {
        var rowCurrents = document.querySelectorAll("tr"),
            lastRow = rowCurrents[rowCurrents.length - 1],
            colInLastRow = lastRow.querySelectorAll("td");
        // console.log(lastRow, colInLastRow);
        var newRow = document.createElement("tr"),
            countCol = colInLastRow.length;
        for (let col = 0; col < countCol; col++) {
            let td = document.createElement("td");
            td.innerHTML = `Row ${rowCurrents.length + 1} Column ${col + 1}`;

            newRow.appendChild(td);
        }

        tableArea.querySelector("table tbody").appendChild(newRow);
        setTimeout(() => alert("Thêm hàng thành công!"), 100);
    } else {
        alert("Vui lòng tạo bảng trước khi thực hiện chức năng này!");
    }
});

addColumn.addEventListener("click", function(e){
    e.preventDefault();
    if(isCreate) {
        var rowCurrents = document.querySelectorAll("tr");
        var tHead = document.querySelector("thead");

        // Add header
        var th = document.createElement("th");
        th.innerHTML = `Header ${tHead.querySelectorAll("th").length + 1}`;

        tHead.appendChild(th);

        // Add column each row
        var count = rowCurrents.length;
        for (let row = 0; row < count; row++) {
            var td = document.createElement("td");
            td.innerHTML = `Row ${row + 1} Column ${rowCurrents[row].querySelectorAll("td").length + 1}`;

            rowCurrents[row].appendChild(td);
        }
        setTimeout(() => alert("Thêm cột thành công!"), 100);
    } else {
        alert("Vui lòng tạo bảng trước khi thực hiện chức năng này!");
    }
});

delRow.addEventListener("click", function(e){
    e.preventDefault();
    if(isCreate) {
        var rowCurrents = document.querySelectorAll("tr");
        var idxDel = parseInt(idxRowInput.value);

        if(idxRowInput.value.trim() !== '' && idxDel) {

            if(idxDel <= rowCurrents.length) {
                var tbody = document.querySelector("tbody");
                tbody.removeChild( rowCurrents[idxDel - 1] );
            } else {
                alert("Không tồn tại hàng có chỉ số vừa nhập. Xin mời nhập lại!");
            }

        } else {
            alert("Nhập chỉ số hàng không hợp lệ, xin mời nhập lại!");
        }
    } else {
        alert("Vui lòng tạo bảng trước khi thực hiện chức năng này!");
    }
});

delCol.addEventListener("click", function(e) {
    e.preventDefault();
    if(isCreate) {
        var thead = document.querySelector("thead"),
            tbody = document.querySelector("tbody");
        var idxDel = parseInt(idxColInput.value);

        if(idxColInput.value.trim() !== '' && idxDel) { 
            var thCurrents = thead.querySelectorAll("th");

            if(idxDel <= thCurrents.length) {
                // Delete thead
                thead.removeChild(thCurrents[idxDel - 1]);

                // Delete tbody
                var trCurrents = tbody.querySelectorAll("tr");
                for (let row = 0; row < trCurrents.length; row++) {
                    trCurrents[row].removeChild(trCurrents[row].querySelectorAll("td")[idxDel - 1]);
                }

            } else {
                alert("Không tồn tại cột có chỉ số vừa nhập. Xin mời nhập lại!");
            }
        } else {
            alert("Nhập chỉ số cột không hợp lệ, xin mời nhập lại!");
        }

    } else {
        alert("Vui lòng tạo bảng trước khi thực hiện chức năng này!");
    }
});

function removeAllChildTable() {
    while (tableArea.firstChild) {
        tableArea.removeChild(tableArea.firstChild);
    }
}C

function renderHeader(table) {
    var thead = document.createElement("thead");
    for (let i = 0; i < 2; i++) {
        var th = document.createElement("th");
        th.innerHTML = `Header ${i + 1}`;
        thead.appendChild(th);
    }
    table.appendChild(thead);
    return table;
}

function renderBody(table) {
    var tbody = document.createElement("tbody");
    for (var row = 0; row < 2; row++) {
        let tr = document.createElement("tr");
        for (var col = 0; col < 2; col++) {
            let td = document.createElement("td");
            td.innerHTML = `Row ${row + 1} Column ${col + 1}`;

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
}