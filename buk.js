var images = ["http://твоя-жизнь.рф/wp-content/uploads/2017/07/sigarety_filtr_okurki_bychki_tabak_1920x1080.jpg", "https://quiz.intex-press.by/wp-content/uploads/2020/11/cant-3372041_1280.jpg",
    "http://азюзин.рф/assets/uploads/stop-smoking-bg.jpg"]
var num=0
function next(){
    var slider=document.getElementsByClassName("slider")
    num++
    if(num>=images.length){
        num = 0;

    }
    slider[src]=images[num]
}
setInterval(next, 1000);
$(function(){
    $('.header_btn_menu').on('click', function (){
        $('.menu ul').slideToggle();
    })
})