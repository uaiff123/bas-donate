// ซ่อนหน้าโหลดเมื่อเว็บโหลดเสร็จ
        window.onload = function() {
            document.getElementById("loading-screen").style.display = "none"; // ซ่อนหน้าโหลด
            document.getElementById("content").style.display = "none"; // แสดงเนื้อหาเว็บ
        };

const link = document.querySelector(".monny-my");

// ปิดการคลิกตอนเริ่ม
link.style.pointerEvents = "none";
// เปิดคลิกหลังจาก 12 วินาที (ตามเวลา animation)
setTimeout(() => {
    link.style.pointerEvents = "auto";
}, 14000);
// ตรวจสอบว่า URL ปัจจุบันผิดหรือไม่
let currentPath = window.location.pathname;
if (correctPaths[currentPath]) {
    window.location.replace(correctPaths[currentPath]); // Redirect ไปหน้า URL ที่ถูกต้อง
}
// autosong
function startMusic() {
    document.getElementById("music-frame").src = "autoplaysong.html";
    document.querySelector("button").style.display = "none";
}