
const sidebarToggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.querySelector(".close-btn");

sidebarToggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle("show-sidebar");
});

sidebarCloseBtn.addEventListener('click', function(){
    sidebar.classList.remove("show-sidebar");
})