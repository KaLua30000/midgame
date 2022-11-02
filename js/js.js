$(document).ready(function () {
    var w = $(window).width();
    var h = $(window).height();
    $(".bg").css("width", w * 1.2);
    $(".bg").css("height", h * 1.2);
    $(".container").fadeOut(0);
    $(".container").fadeIn(500);

    //sideimg
    $("html").mousemove(function (e) {
        $('.sideimgL1').css("left", e.pageX * 20 / w - 300);
        $('.sideimgL2').css("left", e.pageX * 40 / w - 300);
        $('.sideimgR1').css("right", -e.pageX * 20 / w - 200);
        $('.sideimgR2').css("right", -e.pageX * 40 / w - 250);
        $(".bg").css("top", e.pageY * 0.005 - h / 10); $(".bg").css("left", e.pageX * 0.005 - w / 10);
        console.log(e.pageX + "," + e.pageY);
    })



    //subinfo
    $(".info  div").fadeOut(0);
    $(document).find(".selectbox .infotext").fadeIn(0);
    $(".info").css("color", "black")

    $('.info').click(function (event) {
        $('.info').removeClass("selectbox");
        $(this).addClass("selectbox");
        $(".info  div").fadeOut(0);
        $(this).find(".infotext").fadeIn();
        $(".info  p").animate({ opacity: '100%' });
        $(this).find("p").animate({ opacity: '20%' }, { queue: false });
    });


    //photo
    $(".tinyphoto").mouseenter(function (event) {
        $(this).addClass("selectphoto");
    });

    $(".tinyphoto").mouseleave(function (event) {
        $(this).removeClass("selectphoto");
    });

    $(".tinyphoto").click(function (event) {
        $(".display").attr("SRC", $(this).attr("src"));
    });


    //news
    $(".sidenavchild.newsU").click(function (event) {
        $(".news").hide(); $(".newsU").show();
    });
    $(".sidenavchild.newsN").click(function (event) {
        $(".news").hide(); $(".newsN").show();
    });
    $(".sidenavchild.newsR").click(function (event) {
        $(".news").hide(); $(".newsR").show();
    });
    $(".sidenavchild.newsT").click(function (event) {
        $(".news").hide(); $(".newsT").show();
    });
    $(".sidenavchild.newsAll").click(function (event) {
        $(".news").show();
    });


    //others
    $(".a1").click(function (event) {
        $(".authorinfo").html("喜歡漢堡，尚未在遊戲業從業超過多年的準社畜<br>隨時準備為老闆獻出新鮮的肝<br>電話：3345678<br>ail：MOS7414@gmail.com ");
    });
    $(".a2").click(function (event) {
        $(".authorinfo").html("待補");
    });
});
