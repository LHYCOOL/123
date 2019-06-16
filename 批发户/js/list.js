let urlPage = location.search.substr(1);
let nowPage = urlPage.split("=")[1] || 1;
function networkPage(nowPage,sort="") {
    $("#search_result")[0].innerHTML = "";
    $.get({
        url: "api/list.php",
        data: {
            "nowPage": nowPage,
            "sort":sort
        },
        success(res) {
            let result = JSON.parse(res);
            // $(".page_text").text(`${nowPage}/${result.allPage}`);
            $("#prevP a").attr("href", `list.html?nowPage=${Number(nowPage)-1}`);
            $("#nextP a").attr("href", `list.html?nowPage=${Number(nowPage)+1}`);
            if (nowPage == 1) {
                $("#prevP a").attr("href", "#").css("background","#ccc");
            }
            if (nowPage == result.allPage) {
                $("#nextP a").attr("href", "#").css("background","#ccc");
            }
            // 生成列表
            let html = "";
            $.each(result.lists, function (i, ele) {
                html += ` <li>
                <div id="pro_7667985"  class="collection-it classification-c7  "></div>
                <div class="big-photo">
                            <a href="" target="_blank" data-name="image0" alt="${ele.title}" class="bgp" style="display: block;">
                                <img alt="${ele.title} " src="${ele.src}" title="${ele.title} ">
                            </a>
                </div>
                <div class="small-photo">
                            <a href="" target="_blank" alt="${ele.src}" class="smp">
                                <img class="lazy" src="${ele.src}" data-original="https://cdnimg.pfhoo.com/Pro/s/20180409/2cabab30-6de2-4997-a363-6c16362f29b6.jpg" style="display: block;">
                            </a>
                </div></br>
                <div class="lknboxs-list-con">
                    <div class="lknboxs-list-pricenum">
                            <b>
                                <a href="javascrit:;" alt="${ele.title} " style="width: 100px; float: left;">价格登录可见</a>
                            </b>
                        <span title="59">成交额<text>${ele.price}</text></span>
                
                    </div>
                    <a href="" target="_blank" title="${ele.title} " alt="${ele.title} " class="lknboxs-list-title" style="text-indent:initial;">
                        
                        
                            <span style="line-height:20px;margin-left:5px;">${ele.title} </span>
                    </a>
                    <div class="lknboxs-list-adds">
                                <a href="javascript:" title="${ele.title} " alt="${ele.title} "  stc="${ele.src}" class="addto-datas">数据包</a>
                        
                            <a href="javascript:" title="${ele.title} " alt="${ele.title} " class="addto-receipts" stc="${ele.src}" >加入进货单</a>
                        <input type="hidden" id="IsLogin" value="False">
                    </div>
                        <div class="more-marketable">
                        ${ele.madeIn}
                        </div>
                    <div class="lknboxs-list-states"style="margin-top: 50px">
                        <div style="float:left">现货销售</div> <div style="float:right">上架时间：2018/04</div>
                    </div>
                </div>
                
            
                <div class="lknboxs-list-icon">
            
            
                </div>
                <i style="display:block" class="checked" name="choose" value="7667985" suppno="LKN"></i>
            </li>`;
            });
            $("#search_result").append(html);

            // 生成分页                
            let pageHtml = "";
            let selec = "";
            if (nowPage == 1) {
                pageHtml += `<span class="nextprev">首 页</span>
                <span class="nextprev">«上一页</span>`;
            } else {
                pageHtml += `<a href="list.html?nowPage=${Number(nowPage)-1}">上一页»</a>
                <a href="list.html?nowPage=1">首页</a>`;
            }

            for (let i = 1; i <= result.allPage; i++) {
                let temp = "";
                if (i == nowPage) {
                    temp = `<span class="current">${i}</span>`;
                } else {
                    temp = `<a href="list.html?nowPage=${i}">${i}</a>`;
                }
                pageHtml += temp;

                let opt = "";
                if (i == nowPage) {
                    opt = `<option value="${i}" selected="">${i}</option>`;
                } else {
                    opt = `<option value="${i}">${i}</option>`;
                }
                selec += opt;
            }
            if (nowPage == result.allPage) {
                pageHtml += `<span class="nextprev">末 页</span>
                <span class="nextprev">下一页»</span>`;
            } else {
                pageHtml += `<a href="list.html?nowPage=${Number(nowPage)+1}">下一页»</a>
                <a href="list.html?nowPage=${result.allPage}">末页</a>`;
            }
            pageHtml += `&nbsp;&nbsp;跳到<select name="selpage">` + selec + `</select>页`;
            $("#pageDiv .pages").append(pageHtml);
        }
    });
}
networkPage(nowPage);