$(function () {

    let urlId = location.search.substr(1);
    let id = urlId.split("=")[1] || 15;
    $.get({
        url: "api/goods.php",
        data: {
            "id": id,
        },
        success(res) {
            let result = JSON.parse(res);

            $("#mypifajia").html(`<em>￥</em>${result.price}`);

            $("#stock_92514").text(result.inventory);
            // $(".idNum").text(result.id);
            $(".detail-title").text(result.title);
            $(".shops").attr("data-id", result.id);
        }
    });
    console.log(id);



    let middleImgBox = $(".zoom-pic");
    let middleImg = middleImgBox.children("img");
    let zheZao = middleImgBox.children("div");
    let bigImg = $(".bigImg");
    // 鼠标移入小图标切换图片
    $(".zoomlist-con ul li").mouseenter(function () {
        $(this).addClass("mouseover").siblings().removeClass("mouseover");
        let srcImg = $(this).children("img").attr("src");
        middleImg.attr("src", srcImg);
    });
    // 鼠标移入中图
    middleImgBox.mousemove(function (e) {
        middleImg = middleImgBox.children("img");
        let l = e.pageX - $(this).offset().left - 1 / 2 * zheZao.width();
        let t = e.pageY - $(this).offset().top - 1 / 2 * zheZao.height();

        if (l < 0) l = 0;
        if (l >= (middleImgBox.width() - zheZao.width())) {
            l = (middleImgBox.width() - zheZao.width());
        }
        if (t < 0) t = 0;
        if (t >= middleImgBox.height() - zheZao.height()) {
            t = (middleImgBox.height() - zheZao.height());
        }
        zheZao.css({
            "left": l,
            "top": t
        }).show();
        bigImg.css({
            "background-image": `url(${middleImg.attr("src")})`,
            "background-position": `-${l}px -${t}px`,
            "background-size": "620px 620px",
            "background-repeat": "no-repeat",
        }).stop(true).show();

    });
    middleImgBox.mouseleave(function () {
        zheZao.hide();
        bigImg.css("background", "white").hide();
    });
    // 增加减少
    let quantity = $(".the-addsub>input");
    console.log(quantity);

    $(".the-add").click(function () {
        let v = quantity.val() * 1 + 1;
        quantity.val(v);
    })
    $(".the-sub").click(function () {
        let v = quantity.val() * 1 - 1;
        if (v <= 0) v = 0;
        quantity.val(v);
    })

    //--------------------------------------------------------------
    $(".shops-add,.shops-now").click(function (e) {


        let id = $(".shops").attr("data-id");
        let num = quantity.val() * 1;
        if (typeof num != "number" || num < 1) {
            num = 1;
        }
        console.log($(".shops"));
        $.get({
            url: "api/goods.php",
            data: {
                "id": id,
            },
            success(res) {
                // 记录书的id
                let cookieId = myCookie.getItem("id") || "{}";
                cookieId = JSON.parse(cookieId);
                cookieId.id = cookieId.id || [];
                if (cookieId.id.indexOf(id) == -1) {
                    cookieId.id.push(id);
                }

                let strId = JSON.stringify(cookieId);

                // //找到对应的书，修改本数
                let cookieBook = myCookie.getItem(id) || "{}";
                let cookieBookNum = JSON.parse(cookieBook).num || 0;
                let resNum = cookieBookNum * 1 + num;

                let arrBook = JSON.parse(res);
                arrBook.num = resNum;

                myCookie.setItem("id", strId);
                myCookie.setItem(`${id}`, JSON.stringify(arrBook), 10);


                if (e.target.className == "buy") {
                    location.href = "cart.html";
                }
            }
        });
    });
})