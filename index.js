var arrinputId = ["tknv", "name", "email", "password", "datepicker", "luongCB", "chucvu", "gioLam"];
var arrinputSpan = ["tbTKNV", "tbTen", "tbEmail", "tbMatKhau", "tbNgay", "tbLuongCB", "tbChucVu", "tbGiolam"]
var arrEmployer = []


function getValueUser() {
    event.preventDefault()
    // document.getElementById("btnThemNV").style.display = "block";
    var employer = new NhanVien
    for (var i = 0; i < arrinputId.length; i++) {
        var valueUser = document.getElementById(arrinputId[i]).value;
        employer[arrinputId[i]] = valueUser;

    }

    // validation(arrinputId, arrinputSpan)

    if (validateNumber(arrinputId, arrinputSpan) == true) {
        console.log(validateNumber(arrinputId, arrinputSpan))
        arrEmployer.push(employer)
        setSaveLocal("arrEmployer", arrEmployer)
        renderDisplay()
        document.getElementById("form_reset").reset()
    }

}

function renderDisplay(arr = arrEmployer) {
    var content = '';
    for (var i = 0; i < arrEmployer.length; i++) {
        var employer = arrEmployer[i]
        let employLocal = new NhanVien; // tao hàm coppy cái từ employ qua cho đủ
        Object.assign(employLocal, employer)

        content += `
        <tr>
            <td>${employLocal.tknv}</td>
            <td>${employLocal.name}</td>
            <td>${employLocal.email}</td>
            <td>${employLocal.datepicker}</td>
            <td>${employLocal.chucvu}</td>
            <td>${employLocal.totalSalary()}</td>
            <td>${employLocal.rating()}</td>
            <td>
            <button class="btn btn-danger" id='${employer.tknv}' onclick="deleteUsers('${employer.tknv}')">Xóa</button>
            <button class="btn btn-warning" id='${employer.tknv}' onclick="editUser('${employer.tknv}')"  data-toggle="modal" data-target="#myModal">Sửa</button>
            </td>
        </tr>
        `

    }
    document.getElementById("tableDanhSach").innerHTML = content

}

function deleteUsers(idDel) {
    console.log("first")
    console.log(idDel)
    let index = -1;
    for (let i = 0; i < arrEmployer.length; i++) {
        var employer = arrEmployer[i]
        if (employer.tknv == idDel) {
            index = i
        }
    }
    console.log(index)
    if (index != -1) {
        arrEmployer.splice(index, 1)
        setSaveLocal("arrEmployer", arrEmployer)
    }
    renderDisplay()
}


function editUser(idEdit) {
    // document.getElementById("btnThemNV").style.display = "none"
    let index = -1
    for (var z = 0; z < arrEmployer.length; z++) {
        let employer = arrEmployer[z]
        if (employer.tknv == idEdit) {
            index = z
            for (var i = 0; i < arrinputId.length; i++) {
                document.getElementById(arrinputId[i]).value = employer[arrinputId[i]]
            }

        }

    }
    document.getElementById("btnCapNhat").onclick = () => {
        let employer = new NhanVien
        for (var i = 0; i < arrinputId.length; i++) {
            let valueUser = document.getElementById(arrinputId[i]).value;
            employer[arrinputId[i]] = valueUser;
        }
        if (validateNumber(arrinputId, arrinputSpan) == true) {
            console.log(validateNumber(arrinputId, arrinputSpan))
            arrEmployer[index] = employer
            setSaveLocal("arrEmployer", arrEmployer)
            renderDisplay()
            document.getElementById("form_reset").reset()
        }
    }
}

function setSaveLocal(key, value) {
    let arrJson = JSON.stringify(arrEmployer)
    localStorage.setItem(key, arrJson)
}

function getValueLocal(key) {
    arrLocal = JSON.parse(localStorage.getItem(key))
    console.log(arrLocal)
    if (arrLocal) {
        arrEmployer = arrLocal
    }
    renderDisplay()
}
getValueLocal("arrEmployer")

function searchInfoUser(event) {
    //chỗ này note lại => gọi như the DOM nhưn là get value từ form và ontime
    //chuyển đổi về hết định dạng dể sẽ search(ToLowerCase/toUpberCase)
    let keyword = event.target.value;
    let newKeyword = removeVietnameseTones(keyword.toLowerCase().trim())
    //trim() để loại bỏ trước sau các khoản trắng(space) thừa
    var shortArrDisplay = [];
    for (var i = 0; i < arrEmployer.length; i++) {
        let shortEmploy = new NhanVien;
        Object.assign(shortEmploy, arrEmployer[i])
        let xepLoai = shortEmploy.rating();
        // console.log(xepLoai)
        if (xepLoai.includes(newKeyword)) {
            // console.log(`${true}+ ${shortArrEmploy[i].rating()}`)
            // shortArrDisplay.push(shortArrEmploy[i])
            shortArrDisplay.push(arrEmployer[i])
        }
        // else {
        //     console.log(`${false}+ ${shortArrEmploy[i].rating()}`)
        // }
    }
    console.log(shortArrDisplay)

    renderDisplay(shortArrDisplay)
}

// phải thêm cái ob vào mới dc phần edit
// document.getElementById("btnThemNV").style.display = "none";// này ẩn btn-thêm khi btn-sửa
// document.getElementById("btnCapNhat").onclick