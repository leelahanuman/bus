function switchOff() {
    document.getElementById("busImage").src = "https://www.firstlightsafety.com/wp-content/uploads/2022/07/IMG_4363_TBB_ISBS_FISA_RGB-1-scaled.jpg";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    document.getElementById("busImage").src = "https://stnonline.com/wp-content/uploads/2021/05/FLSP-BB-IRRSBSFISA-0D5A1213-768x512.jpg";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}
