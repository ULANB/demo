//banner模块start
var num = 2;
var bannerInner_h1 = my$("banner-inner").getElementsByTagName("h1")[0];
var bannerInner_p = my$("banner-inner").getElementsByTagName("p")[0];
var bannerInner_a = my$("banner-inner").getElementsByTagName("a")[0];
var bannerLine_Div = my$("banner-line").getElementsByTagName("div");
bannerLine_Div[0].style.backgroundColor = "white";
function bannerObj() {
    var bannerImg = my$("banner-img").getElementsByTagName("img");
    bannerImg[0].src = "images/banner"+num+".jpg";
    bannerImg[1].src = "images/banner"+num+"-inner.png";
    
    switch(num){
        case 1:
                bannerInner_h1.innerText = "云数据库Redis 5.0重磅发布";
                bannerInner_p.innerText = "支持全新Stream数据类型，带给您不一样的缓存体验";
                bannerInner_a.innerText = "查看详情";
                for(var i = 0; i <bannerLine_Div.length; i++){
                    bannerLine_Div[i].style.backgroundColor = "";
                }
                bannerLine_Div[0].style.backgroundColor = "white";
                break;
        case 2:
                bannerInner_h1.innerText = "智能语音自学习平台";
                bannerInner_p.innerText = "分钟级定制模型优化，实现秒级的热词实时生效";
                bannerInner_a.innerText = "查看详情";
                for(var i = 0; i <bannerLine_Div.length; i++){
                    bannerLine_Div[i].style.backgroundColor = "";
                }
                bannerLine_Div[1].style.backgroundColor = "white";
                break;
        case 3:
                bannerInner_h1.innerText = "阿里云数据库亮相ICDE";
                bannerInner_p.innerText = "推动云原生数据库成为行业标准";
                bannerInner_a.innerText = "了解更多";
                for(var i = 0; i <bannerLine_Div.length; i++){
                    bannerLine_Div[i].style.backgroundColor = "";
                }
                bannerLine_Div[2].style.backgroundColor = "white";
                break;
        case 4:
                bannerInner_h1.innerText = "全民云计算";
                bannerInner_p.innerText = "普惠上云，云服务器1核1G仅需504元/年";
                bannerInner_a.innerText = "立即抢购";
                for(var i = 0; i <bannerLine_Div.length; i++){
                    bannerLine_Div[i].style.backgroundColor = "";
                }
                bannerLine_Div[3].style.backgroundColor = "white";
                break;
        case 5:
                bannerInner_h1.innerText = "玩转数据库之跨数据库查询DSQL";
                bannerInner_p.innerText = "数据管理DMS持续释放技术红利，向开发者致敬";
                bannerInner_a.innerText = "立即使用";
                for(var i = 0; i <bannerLine_Div.length; i++){
                    bannerLine_Div[i].style.backgroundColor = "";
                }
                bannerLine_Div[4].style.backgroundColor = "white"; 
    }
    num++;
    if(num == 6){
        num = 1;
    }
}
function bannerImgObj(){
    var bannerImg1 = my$("banner-img").getElementsByTagName("img");
    bannerImg1[0].style.animation = "bannerImg 0.5s ease-in-out";
    bannerImg1[1].style.animation = "bannerImg 0.5s ease-in-out";
    setTimeout("bannerImgObj2()",1000);
}
function bannerImgObj2(){
    var bannerImg1 = my$("banner-img").getElementsByTagName("img");
    bannerImg1[0].style.animation = "";
    bannerImg1[1].style.animation = "";
}
var setIntbannerObj = setInterval("bannerObj()",10000);
var setIntbannerImg = setInterval("bannerImgObj()",10000);

// banner 点击事件

//banner 模块end
