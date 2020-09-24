$(function() {
    listing();
});
$(window).on('load resize', function() {
    var icon1width = $('.icon1').width();
    $('.icon1').height(icon1width);
});

function listing() {
    document.querySelector('.selection').addEventListener('click', function() {
        this.querySelector('.dropselect').classList.toggle('open');
    });

    for (const option of document.querySelectorAll(".option")) {
        option.addEventListener('click', function() {
            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.dropselect').querySelector('.export span').textContent = this.textContent;
                this.closest('.selection').querySelector('.dropselect').classList.toggle('open');
            }

        });
    }
}