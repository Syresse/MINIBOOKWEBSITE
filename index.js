const humb = document.getElementById("menu_button");
const nav_list = document.getElementById("nav_list");
humb.onclick = () => {
    nav_list.classList.toggle("open");
};
