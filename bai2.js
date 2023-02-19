function elecBill() {
    // Dau vao
    var hoTen = document.getElementById("hoTen").value;
    var kw = document.getElementById("kw").value;
    kw = parseInt(kw);

    // Xu ly
    if (kw < 0) {
        alert("Khong hop le")
    }
    else {
        var tienDien = 0;
        if (kw <= 50) {
            tienDien = kw * 500;
        }
        else if (kw <= 100) {
            tienDien = 50 * 500 + (kw - 50) * 650;
        }
        else if (kw <= 200) {
            tienDien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
        }
        else if (kw <= 350) {
            tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
        }
        else {
            tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
        }

        
        var result = "Ho va ten:" + " " + hoTen + ". So tien:" + " " + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tienDien);
        document.getElementById("footer2").innerHTML = result;
    }
    
}