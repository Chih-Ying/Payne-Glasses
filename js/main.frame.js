//------------------------------------------------------------------tab change  sunglasses
var t_index_sun = new Array(0, 0, 0);
var set_btn_visibility_sun = new Array();
set_btn_visibility_sun['index'] = 0;
set_btn_visibility_sun[0] = new Array();
set_btn_visibility_sun[1] = new Array();
set_btn_visibility_sun[2] = new Array();
set_btn_visibility_sun[0]['pg_plp_down_all_left_icon_sun'] = "hidden";
set_btn_visibility_sun[0]['pg_plp_down_all_right_icon_sun'] = "visible";
set_btn_visibility_sun[1]['pg_plp_down_all_left_icon_sun'] = "hidden";
set_btn_visibility_sun[1]['pg_plp_down_all_right_icon_sun'] = "visible";
set_btn_visibility_sun[2]['pg_plp_down_all_left_icon_sun'] = "hidden";
set_btn_visibility_sun[2]['pg_plp_down_all_right_icon_sun'] = "visible";

var set_pg_plp_sun = "pg_Eye_women_frame_div";
$(".pg_plp_up_tab_left_sun p").css({ "color": '#f90', "border-bottom": "3px solid #f90" })
$(".pg_plp_up_tab_left_sun p").mouseenter(function () {
    //index=0
    //$('.pg_PLP_women_out_ul_sun>li').css('margin-left','17px')
    $(this).css({ "color": '#f90', "border-bottom": "3px solid #f90" });
    $(this).parent().siblings().children().css({ "color": 'black', "border-bottom": "3px solid #ccc" })
    $('.pg_PLP_button_sun a').text('SHOP ALL WOMEN');
    $('.pg_PLP_button_sun a').attr('href', "sunglasses/women.html");
    $(".pg_Eye_women_frame").fadeIn("slow").siblings().fadeOut("slow");
    set_pg_plp_sun = "pg_Eye_women_frame_div";
/*     $('#pg_plp_down_all_left_icon_sun').css("visibility", set_btn_visibility[0]['pg_plp_down_all_left_icon_sun']);
    $('#pg_plp_down_all_right_icon_sun').css("visibility", set_btn_visibility[0]['pg_plp_down_all_right_icon_sun']); */
})
$(".pg_plp_up_tab_middle_sun p").mouseenter(function () {
    //index=0
    //$('.pg_PLP_men_out_ul_sun>li').css('margin-left','17px')
    $(this).css({ "color": '#f90', "border-bottom": "3px solid #f90" });
    $(this).parent().siblings().children().css({ "color": 'black', "border-bottom": "3px solid #ccc" })
    $('.pg_PLP_button_sun a').text('SHOP ALL MEN');
    $('.pg_PLP_button_sun a').attr('href', "sunglasses/men.html");
    $(".pg_Eye_men_frame").fadeIn("slow").siblings().fadeOut("slow");
    set_pg_plp = "pg_Eye_men_frame_div";
/*     $('#pg_plp_down_all_left_icon_sun').css("visibility", set_btn_visibility[1]['pg_plp_down_all_left_icon_sun']);
    $('#pg_plp_down_all_right_icon_sun').css("visibility", set_btn_visibility[1]['pg_plp_down_all_right_icon_sun']); */
})

//------------------------------------------------------------------tab change choose pair
/* var set_pg_plp_sun = "pg_Eye_women_frame_div"; */
$(".pg_choosepair_tab_left p").css({ "color": '#f90', "border-bottom": "3px solid #f90" })
$(".pg_choosepair_tab_left p").mouseenter(function () {
    $(this).css({ "color": '#f90', "border-bottom": "3px solid #f90" });
    $(this).parent().siblings().children().css({ "color": 'black', "border-bottom": "3px solid #ccc" })
    /* $(".pg_choosepair_content_women").fadeIn("slow").siblings().fadeOut("slow"); */
    $(".pg_choosepair_content_men").fadeOut("slow")
    $(".pg_choosepair_content_women").fadeIn("slow");
    /* set_pg_plp_sun = "pg_Eye_women_frame_div"; */
})
$(".pg_choosepair_tab_middle p").mouseenter(function () {
    $(this).css({ "color": '#f90', "border-bottom": "3px solid #f90" });
    $(this).parent().siblings().children().css({ "color": 'black', "border-bottom": "3px solid #ccc" })
    /* $(".pg_choosepair_content_men").fadeIn("slow").siblings().fadeOut("slow"); */
    $(".pg_choosepair_content_women").fadeOut("slow")
    $(".pg_choosepair_content_men").fadeIn("slow");
    /* set_pg_plp = "pg_Eye_men_frame_div"; */
})

//-----------------------------------------------click icon left and right chang big img
$("#pg_plp_down_all_right_icon_sun").on("click", function () {

    var new_text = $('.pg_PLP_button_sun').text().trim();
    switch (new_text) {
        case "SHOP ALL WOMEN":
            move_ul_right_sun("pg_PLP_women_out_ul_sun", 0);
            break;
        case "SHOP ALL MEN":
            move_ul_right_sun("pg_PLP_men_out_ul_sun", 1);
            break;
        case "SHOP ALL KIDS":
            move_ul_right_sun("pg_PLP_kids_out_ul_sun", 2);
            break;
    }
});
function move_ul_right_sun(name, t) {
    var liQ = $("." + name).children("li").length;
    var obj = $("." + name).children("li")[0];
    var width_li = parseInt($(obj).css("width").split("px")[0]);
    var li_margin = parseInt($(obj).css("margin-right").split("px")[0]) * 2 + 4;
    var now_marginleft = parseInt($(obj).css('margin-left').split("px")[0]);
    var index = t_index_sun[t];
    if ($(window).width() <= 680) {
        if (index < liQ - 1) {
            index++;
            $(obj).stop().animate({ "margin-left": -index * (width_li + li_margin) + li_margin / 2 }, 50);
        }
        if (index == (liQ - 1)) {
            $("#pg_plp_down_all_right_icon_sun").css("visibility", "hidden")
        }
    } else if (1198 >= $(window).width() && $(window).width() > 681) {
        if (index < liQ - 2) {
            index++;
            $(obj).stop().animate({ "margin-left": -index * (width_li + li_margin) + li_margin / 2 }, 50);
        }
        if (index == (liQ - 2)) {
            $("#pg_plp_down_all_right_icon_sun").css("visibility", "hidden")
        }
    } else if ($(window).width() > 1200) {
        if (index < liQ - 3) {
            index++;
            $(obj).stop().animate({ "margin-left": -index * (width_li + li_margin) + li_margin / 2 }, 50);
        }
        if (index == (liQ - 3)) {
            $("#pg_plp_down_all_right_icon_sun").css("visibility", "hidden")
        }
    }
    t_index_sun[t] = index;
    set_btn_visibility_sun['index'] = index;
    $("#pg_plp_down_all_left_icon_sun").css("visibility", "visible");

    set_btn_visibility_sun[t]['pg_plp_down_all_left_icon_sun'] = $('#pg_plp_down_all_left_icon_sun').css("visibility");
    set_btn_visibility_sun[t]['pg_plp_down_all_right_icon_sun'] = $('#pg_plp_down_all_right_icon_sun').css("visibility");

}

$("#pg_plp_down_all_left_icon_sun").on("click", function () {
    var new_text = $('.pg_PLP_button_sun').text().trim();
    switch (new_text) {
        case "SHOP ALL WOMEN":
            move_ul_left_sun("pg_PLP_women_out_ul_sun", 0);
            break;
        case "SHOP ALL MEN":
            move_ul_left_sun("pg_PLP_men_out_ul_sun", 1);
            break;
    }
});
function move_ul_left_sun(name, t) {
    var obj = $("." + name).children("li")[0];
    var liQ = $("." + name).children("li").length;
    var width_li = parseInt($(obj).css("width").split("px")[0]);
    var li_margin = parseInt($(obj).css("margin-right").split("px")[0]) * 2 + 4;
    var now_marginleft = parseInt($(obj).css('margin-left').split("px")[0]);
    var index = t_index_sun[t];
    if (index > 0) {
        index--
        $(obj).stop().animate({ "margin-left": -index * (width_li + li_margin) + li_margin / 2 }, 50);
    }
    $("#pg_plp_down_all_right_icon_sun").css("visibility", "visible")
    if (index == 0) {
        $("#pg_plp_down_all_left_icon_sun").css("visibility", "hidden")
    }
    t_index_sun[t] = index;
    set_btn_visibility_sun['index'] = index;
    set_btn_visibility_sun[t]['pg_plp_down_all_left_icon_sun'] = $('#pg_plp_down_all_left_icon_sun').css("visibility");
    set_btn_visibility_sun[t]['pg_plp_down_all_right_icon_sun'] = $('#pg_plp_down_all_right_icon_sun').css("visibility");
}

/* $(window).resize(function () {
    var bodywidth = $("body").outerWidth(true);
    $n = 0.3;
    if (bodywidth <= 680) {
        $n = 1;
    } else if (bodywidth <= 1199) {
        $n = 0.5;
    } else if (1200 <= bodywidth && bodywidth <= 1400) {
        $n = 0.3;
    } else if (1401 <= bodywidth && bodywidth <= 1840) {
        $n = 0.305;
    } else {
        $n = 0.31
    }
    var width_li = parseInt($(".pg_PLP_down_sun").outerWidth(true)) * $n;
    var li_margin = parseInt($("." + 0).find("li:eq(0)").css("margin-right").split("px")[0]) * 2 + 4;
    $.each(t_index, function (k, v) {
        if (v > 0) {
            var obj = $(".pg_PLP_down_sun>div:eq(" + k + ")").find("ul li")[0];
            $(obj).css("margin-left", -v * (width_li + li_margin) + li_margin / 2);
        }
    });
});
 */
//women
var startX_sun = 0;
var originX_sun = 0;
$('.pg_PLP_women_in_ul_li_sun>a>img').bind('touchstart', function (e) {
    e.cancelBubble = true;
    e.stopPropagation();
    startX_sun = e.originalEvent.changedTouches[0].pageX
    var obj = $(this).parent().parent().parent().children("li").eq(0);
    originX_sun = Number($(obj).css("margin-left").split("px")[0]);

});
$('.pg_PLP_women_in_ul_li_sun>a>img').bind('touchmove', function (e) {
    e.cancelBubble = true;
    e.stopPropagation();
    var endX = e.originalEvent.changedTouches[0].pageX;
    var distanceX = endX - startX_sun;
    var obj = $(this).parent().parent().parent().children("li").eq(0);

    $(obj).css("margin-left", originX_sun + distanceX + "px");
});

$('.pg_PLP_women_in_ul_li_sun>a>img').bind('touchend', function (e) {
    e.cancelBubble = true;
    e.stopPropagation();
    var endX = e.originalEvent.changedTouches[0].pageX;
    var distanceX = endX - startX_sun;
    var obj = $(this).parent().parent().parent().children("li").eq(0);
    var sku = $(this).attr("data-id");
    if (distanceX < 0 && $("#women" + sku).next().length > 0) {
        $("#women" + sku).next().click();
    } else if (distanceX > 0 && $("#women" + sku).prev().length > 0) {
        $("#women" + sku).prev().click();
    }
    else
        $(obj).animate({ "margin-left": originX_sun + "px" }, 100);
});
//men
/*$(".pg_plp_up_tab_middle_sun>p").mouseenter(function(){
  $("#pg_plp_down_all_right_icon_sun").css("visibility","visible")
})
$(".pg_plp_up_tab_left_sun>p").mouseenter(function(){
  $("#pg_plp_down_all_right_icon_sun").css("visibility","visible")
})
$(".pg_plp_up_tab_right_sun>p").mouseenter(function(){
  $("#pg_plp_down_all_right_icon_sun").css("visibility","visible")
})*/

$('.pg_PLP_men_in_ul_li_sun>a>img').bind('touchstart', function (e) {
    e.cancelBubble = true;
    e.stopPropagation();
    startX_sun = e.originalEvent.changedTouches[0].pageX
    var obj = $(this).parent().parent().parent().children("li").eq(0);
    originX_sun = Number($(obj).css("margin-left").split("px")[0]);
});
$('.pg_PLP_men_in_ul_li_sun>a>img').bind('touchmove', function (e) {
    e.cancelBubble = true;
    e.stopPropagation();
    var endX = e.originalEvent.changedTouches[0].pageX;
    var distanceX = endX - startX_sun;
    var obj = $(this).parent().parent().parent().children("li").eq(0);
    $(obj).css("margin-left", originX_sun + distanceX + "px");
});

$('.pg_PLP_men_in_ul_li_sun>a>img').bind('touchend', function (e) {
    e.cancelBubble = true;
    e.stopPropagation();
    var endX = e.originalEvent.changedTouches[0].pageX;
    var distanceX = endX - startX_sun;
    var obj = $(this).parent().parent().parent().children("li").eq(0);
    var sku = $(this).attr("data-id");
    if (distanceX < 0 && $("#men" + sku).next().length > 0) {
        $("#men" + sku).next().click();
    } else if (distanceX > 0 && $("#men" + sku).prev().length > 0) {
        $("#men" + sku).prev().click();
    }
    else
        $(obj).animate({ "margin-left": originX_sun + "px" }, 100);
});
