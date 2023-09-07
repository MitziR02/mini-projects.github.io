document.getElementById('toggle').addEventListener('change', function() {
    var icon=document.getElementById("moon");
    if (this.checked) {
        document.body.classList.add('dark-mode');

        icon.innerHTML='<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');

        icon.innerHTML='<i class="fa-solid fa-moon"></i>';
    }
});
