
//value_x == arrinputID[i]
// value_y == arrinputspan[i]
const MAX_LUONG = 20000000;
const MIN_LUONG = 1000000;
const MAX_TIMEWORK = 200;
const MIN_TIMEWORK = 80;
const RE = /\S+@\S+\.\S+/;
function validation(value_x, value_y) {
    var isValid = true;

    for (var i = 0; i < value_x.length; i++) {
        var checkinput = document.getElementById(value_x[i]).value
        if (checkinput == '') {
            document.getElementById(value_y[i]).innerHTML = "Vui Lòng Không Để Trống"
            checkspan = false
        } else {
            checkspan = true
        }
    }

    isValid = isValid && checkspan
    return isValid
}


function validateNumber(value_x, value_y) {
    var checkall // check valid all
    var isValidMail // check valid mail
    var isValidLuong // check valid Lương
    var isvalidTimeWork // check timework
    var checkspan // check trống input
    var isvalidPosition // check chọn chức vụ

    for (var i = 0; i < value_x.length; i++) {
        //check input trống
        var checkinput = document.getElementById(value_x[i]).value
        if (checkinput == '') {
            document.getElementById(value_y[i]).innerHTML = "Vui Lòng Không Để Trống"
            checkspan = false
        } else {
            checkspan = true
        }
        //check chức vụ 
        if (value_x[i] == "chucvu") {
            var check_chuc = document.getElementById("chucvu").value;
            if (check_chuc == "Chọn chức vụ") {
                document.getElementById("tbChucVu").innerHTML = `Vui Lòng Chọn Chức Vụ`
                isvalidPosition = false;

            } else {
                document.getElementById("tbChucVu").innerHTML = ''
                isvalidPosition = true
            }
        }
        // check ivalid timework;
        if (value_x[i] == "gioLam") {
            var check_timework = document.getElementById("gioLam").value;
            if (check_timework <= MAX_TIMEWORK && check_timework >= MIN_TIMEWORK) {
                document.getElementById("tbGiolam").innerHTML = ''
                isvalidTimeWork = true

            } else {
                document.getElementById("tbGiolam").innerHTML = `Vui Lòng Giờ Làm Từ ${MIN_TIMEWORK}-${MAX_TIMEWORK}`
                isvalidTimeWork = false;
            }
        }

        // check isvalid_timework
        if (value_x[i] == "luongCB") {
            var checkLuong = document.getElementById("luongCB").value;
            if (checkLuong <= MAX_LUONG && checkLuong >= MIN_LUONG) {
                document.getElementById("tbLuongCB").innerHTML = ''
                isValidLuong = true

            } else {
                document.getElementById("tbLuongCB").innerHTML = `Vui Lòng Nhập Lương Từ ${MIN_LUONG}-${MAX_LUONG}`
                isValidLuong = false;
            }
        }

        //check valid_email

        if (value_x[i] == "email") {
            var mail = document.getElementById("email").value;
            if (RE.test(mail)) {
                document.getElementById("tbEmail").innerHTML = ''
                isValidMail = true

            } else {
                document.getElementById("tbEmail").innerHTML = 'Vui Lòng Đúng Định Dạng Mail'
                isValidMail = false;
            }
        }
    }

    checkall = isValidLuong && isvalidTimeWork && isValidMail && checkspan && isvalidPosition
    return checkall
}

