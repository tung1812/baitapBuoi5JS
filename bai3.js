function perTax() {
    // Dau vao
    var hoTen = document.getElementById("hoTen").value;
    var thuNhap = document.getElementById("thuNhap").value;
    var soNguoi = document.getElementById("soNguoi").value;
    thuNhap = parseInt(thuNhap);
    soNguoi = parseInt(soNguoi);

    // Xu ly
    if ((thuNhap < 0) || (soNguoi < 0)) {
        alert("Khong hop le");
    }
    else {
        var thuNhapChiuThue = thuNhap - 4e+6 - soNguoi * 1.6e+6;
        var thueThuNhap = 0;
        if (thuNhapChiuThue <= 60e+6) {
            thueThuNhap = thuNhapChiuThue * 0.05;
        }
        else if (thuNhapChiuThue <= 120e+6) {
            thueThuNhap = thuNhapChiuThue * 0.1;
        }
        else if (thuNhapChiuThue <= 210e+6) {
            thueThuNhap = thuNhapChiuThue * 0.15;
        }
        else if (thuNhapChiuThue <= 384e+6) {
            thueThuNhap = thuNhapChiuThue * 0.2;
        }
        else if (thuNhapChiuThue <= 624e+6) {
            thueThuNhap = thuNhapChiuThue * 0.25;
        }
        else if (thuNhapChiuThue <= 960e+6) {
            thueThuNhap = thuNhapChiuThue * 0.3;
        }
        else {
            thueThuNhap = thuNhapChiuThue * 0.35;
        }
    }

    var result = "Ho va ten:" + " " + hoTen + ". Tien thue thu nhap ca nhan:" + " " + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thueThuNhap);

    document.getElementById("footer").innerHTML = result;

}