function enrollment() {
    // Dau vao
    var diemChuan = document.getElementById("diemChuan").value;
    var diem1 = document.getElementById("diem1").value;
    var diem2 = document.getElementById("diem2").value;
    var diem3 = document.getElementById("diem3").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    diemChuan = parseInt(diemChuan);
    diem1 = parseInt(diem1);
    diem2 = parseInt(diem2);
    diem3 = parseInt(diem3);
    // Xu ly
    var examResult;
    var diemTong = 0;
    diemTong = diem1 + diem2 + diem3;
    if ((diem1 < 0) || (diem2 < 0) || (diem2 < 0) || (diemChuan < 0)) {
        alert("khong hop le");
    }
    else {
        switch (khuVuc) {
            case "A": {
                diemTong += 2;
                break;
            }
            case "B": {
                diemTong += 1;
                break;
            }
            case "C": {
                diemTong += 0.5;
                break;
            }
            default: {
                alert("Khong hop le");
                break;
            }
        }

        switch (doiTuong) {
            case "1": {
                diemTong += 2.5;
                break;
            }
            case "2": {
                diemTong += 1.5;
                break;
            }
            case "3": {
                diemTong += 1;
                break;
            }
            default: {
                alert("Khong hop le");
                break;
            }
        }

        

        if ((diemTong >= diemChuan) && (diem1 != 0) && (diem2 != 0) && (diem3 != 0)) {
            examResult = "dau";
        }
        else {
            examResult = "rot"
        }
        var result = "Ban da" + " " + examResult + ". Tong diem:" + " " + diemTong;

        // Dau ra
        document.getElementById("footer").innerHTML = result;
    }
}