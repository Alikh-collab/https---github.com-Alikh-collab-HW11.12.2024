const text = document.getElementById('text');
const newText = document.getElementById('newText');
const fon = document.getElementById('Fon');
const tk = document.getElementById('tk');


newText.addEventListener('click', () => {
    text.textContent = 'Jana text';
});
fon.addEventListener('click', () => {
    document.querySelector(".body").style.backgroundColor ="blue";
});
tk.addEventListener('mouseenter', () => {
    tk.style.color = "pink";
});
tk.addEventListener('mouseleave', () => {
    tk.style.color = "black";
});
