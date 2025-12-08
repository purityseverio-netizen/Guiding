// Shake any element by ID
function  shake(id) {
    const element=document.getElementById(id);
element.classList.add('shake');

    setTimeout(() =>{
        element.classList.remove('shake');
        },500);
}

// Toggle Dropdown (for menu items)
function toggleDropdown(id) {
    const content =document.getElementById(id);
    content.style.display = content.style.display ===
        "block" ? "none" : "block";
}
// Rotate any image
function startSpin(id) {
   const img = document.getElementById(id);
   img.classList.add('spin');
}
window.onload = function () {
    shake('title');
};