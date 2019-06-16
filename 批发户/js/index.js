$(function () {
    $(".mainnav-online").hover(function () {
        $(".mainnav_dl-sub").show();
        $(".mainnav_dl-sub>div").eq($(this).index()).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
        // $(".mainnav_dl-sub").css("display", "block").children(".mainnav_dl-sub-word").css("display", "block")
    })
    $(".cart-dd").mouseleave(function () {
        $(".mainnav_dl-sub").hide();
        $(".mainnav-online").removeClass("on");
    })
    $("li[name$='class_46']").hover(function () {
        $(this).addClass("curList")
        $(this).siblings().removeClass("curList")
    })
    $(".eShop_content_list").children("li").hover(function () {
        $(this).addClass("curList")
        $(this).siblings().removeClass("curList")
    })
    $(".ui_scroll_page").hover(function () {
        let index = $(this).index(".ui_scroll_page");
        $(this).children("li").hover(function () {
            let l = $(this).index() * (-220) + "px"
            $(this).addClass("RE_slide_pageCur")
            $(this).siblings().removeClass("RE_slide_pageCur")
            $(".ui_scroll_con").eq(index).css("left", l)
        })
    })

})
$(function () {

    /*00-获取页面标签，封装工具函数*/
    let oSlider = $(".slider");
    let oSliderBoxItem = $(".slider-box-item");
    let oSliderBox = $(".slider-box");
    let oPrev = $(".prev");
    let oNext = $(".next");
    let timer;
    let index = 0;
    let oSliderBoxLeft = 0;
    let oSliderBoxItemCount = oSliderBoxItem.length;
    let oSliderBoxItemWidth = oSliderBoxItem.width();
    let next = () => {
        index++;
        /*临界值检查*/
        if (index >= oSliderBoxItemCount) {
            index = 1;
            oSliderBox.css("left", 0);
        }
        oSliderBoxLeft = index * oSliderBoxItemWidth;
        oSliderBox.stop(true).animate({
            "left": -oSliderBoxLeft + "px"
        });
    }
    let prev = () => {
        index--;
        /*临界值检查*/
        if (index < 0) {
            index = oSliderBoxItemCount - 3;
            oSliderBox.css("left", -(oSliderBoxItemCount - 1) * oSliderBoxItemWidth);
        }
        oSliderBoxLeft = index * oSliderBoxItemWidth;
        oSliderBox.stop(true).animate({
            "left": -oSliderBoxLeft + "px"
        });
    }
    let autoPlay = () => {
        timer = setInterval(next, 4000);
    }

    autoPlay();
    oSlider.hover(() => clearInterval(timer), autoPlay);
    oNext.click(next);
    oPrev.click(prev);
    $(".slider-nav-item").mouseenter(function () {
        var index = $(this).index();
        oSliderBoxLeft = index * oSliderBoxItemWidth;
        oSliderBox.stop(true).animate({
            "left": -oSliderBoxLeft + "px"
        });
        switchSlider(index);
    })

})
$(function () {
    $(".topnav-r dd").hover(function () {
        $(this).children("ul").show();
        $(this).siblings().children("ul").hide();
        console.log(111);

    }, function () {
        $(this).children("ul").hide();
    });
})

$(function () {
    $(".select-wrapper").click(function () {
        if ($(this).children(".select-list").css("display") == "none") {
            $(this).children(".select-list").css("display", "block")
        } else {
            $(this).children(".select-list").css("display", "none")

        }
    })

})
$(function () {
    let urlId = location.search.substr(1);
    let id = urlId.split("=")[1] || 15;
    $.get({
        url: "api/index.php",
        // data: {
        //     "id": id,
        // },
        success(res) {
            let result = JSON.parse(res);


            let html = "";
            $.each(result, function (i, ele) {
                html += `<li>
                        <a href="goods.html" alt=" ${ele.title}">
                            <img src="${ele.src}"
                                alt=" ${ele.title}">
                        </a>
                        <p class="eShop_content_ppTit">${ele.title}
                        </p>
                        <p class="eShop_content_ppPrice">
                            <span  style="color: #8c8c8c">${ele.price}</span>
                        </p>
                    </li>`
            });
            console.log(result);
            $(".eShop_content_ppList").append(html);
        }
    })
})