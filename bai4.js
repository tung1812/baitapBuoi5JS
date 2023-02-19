document.getElementById("ketNoi").style.display = "none";

function myFunction() {
    var khachHang = document.getElementById("khachHang").value;
    if (khachHang == "doanhNghiep") {
        document.getElementById("ketNoi").style.display = "inherit";
    }
    else {
        document.getElementById("ketNoi").style.display = "none";
    }
}

function cableTv() {
    var khachHang = document.getElementById("khachHang").value;
    var soKetNoi = document.getElementById("soKetNoi").value;
    var soKenh = document.getElementById("soKenh").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var tienCap = 0;
    soKetNoi = parseInt(soKetNoi);
    soKenh = parseInt(soKenh);
    if ((soKenh < 0) || (soKetNoi <= 0)) {
        alert("Khong hop le");
    }
    else {
        switch (khachHang) {
            case "nhaDan": {
                tienCap = 4.5 + 20.5 + soKenh * 7.5;
                break;
            }
            case "doanhNghiep": {
                 if (soKetNoi <= 10) {
                    tienCap = 15 + 75 + soKenh * 50;
                 }
                 else {
                    tienCap = 15 + 75 + (soKetNoi - 10) * 5 + soKenh * 50;
                 }
                 break;
            }
        }
    }
    var result = "Ma khach hang:" + " " + maKhachHang + ". Tien cap:" + " " + new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(tienCap);
    document.getElementById("footer2").innerHTML = result;
}