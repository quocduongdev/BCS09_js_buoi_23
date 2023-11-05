const BOSS = "Sếp"
const MANAGER = "Trưởng phòng"
const EMPLOYER = "Nhân viên"


function NhanVien() {
    this.tknv = "";
    this.name = "";
    this.email = "";
    this.password = "";
    this.datepicker = "";
    this.luongCB = "";
    this.chucvu = "";
    this.gioLam = "";
    this.totalSalary = function totalSalary() {
        var salary
        switch (this.chucvu) {
            case BOSS:
                salary = this.luongCB * 3
                break;
            case MANAGER:
                salary = this.luongCB * 2
                break;
            default:
                salary = this.luongCB
                break;
        }
        return salary
    }
    this.rating = function ratings() {
        var rating = '';
        switch (this.chucvu) {
            case EMPLOYER:
                if (this.datepicker >= 192) {
                    rating = "Xuất Sắc"
                } if (this.datepicker >= 176 && this.datepicker < 192) {
                    rating = "Giỏi"
                } if (this.datepicker >= 160 && this.datepicker < 176) {
                    rating = "Khá"
                } else {
                    rating = "Trung Bình"
                }

                break;
            default:
                rating += "Chỉ rating Nhân Viên"
                break;
        }
        return rating
    }
}