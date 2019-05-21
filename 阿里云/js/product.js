
//遍历设置产品模块的Nav图片
var productNav_1 = my$("product-1").getElementsByTagName("li");
var productNav_2 = my$("product-2").getElementsByTagName("li");
var productNav_3 = my$("product-3").getElementsByTagName("li");
for(var i = 0; i < productNav_1.length; i++) { 
    productNav_1[i].style.backgroundImage = "url(images/prodcut-1-"+(i+=1)+".png)";
    i--;
}
productNav_1[0].style.backgroundImage = "url(images/prodcut-1-1-click.png)";
for(var i = 0; i < productNav_2.length; i++) { 
    productNav_2[i].style.backgroundImage = "url(images/prodcut-2-"+(i+=1)+".png)";
    i--;
}
for(var i = 0; i < productNav_3.length; i++) { 
    productNav_3[i].style.backgroundImage = "url(images/prodcut-3-"+(i+=1)+".png)";
    i--;
}

/**
 * 把所有图片遍历成未点击时的样子;
 */
function noClick(){
    for(var i = 0; i < productNav_1.length; i++) { 
        productNav_1[i].style.backgroundImage = "url(images/prodcut-1-"+(i+=1,i--)+".png)";
    }
    for(var i = 0; i < productNav_2.length; i++) { 
        productNav_2[i].style.backgroundImage = "url(images/prodcut-2-"+(i+=1,i--)+".png)";
    }
    for(var i = 0; i < productNav_3.length; i++) { 
        productNav_3[i].style.backgroundImage = "url(images/prodcut-3-"+(i+=1,i--)+".png)";
    }
}

var productBox_1 = my$("product-bd-box-1").getElementsByClassName("product-inner");
my$("product-bd-box-2").style = "display:none;"
my$("product-bd-box-3").style = "display:none;"

//下面为相似性的重复性代码，参数不同！
for(var i = 0; i < productNav_1.length; i++){
    productNav_1[i].index = i;
    productNav_1[i].onclick = function (){
        my$("product-bd-box-1").style = "display:block;"
        my$("product-bd-box-2").style = "display:none;"
        my$("product-bd-box-3").style = "display:none;"

        noClick();//把所有图片换成未点击时的图片;排他功能
        this.style.backgroundImage = "url(images/prodcut-1-"+(this.index+1)+"-click.png)";
        for(var j = 0; j < productBox_1.length; j++){
            productBox_1[j].className = "product-inner w product-hidden";
        }
        productBox_1[this.index].className = "product-inner w";
        productBox_1[this.index].style = "animation:product-inner-hidden 0.8s ease-in";

    };
}

var productBox_2 = my$("product-bd-box-2").getElementsByClassName("product-inner");
for(var i = 0; i < productNav_2.length; i++){
    productNav_2[i].index = i;
    productNav_2[i].onclick = function (){
        my$("product-bd-box-1").style = "display:none;"
        my$("product-bd-box-2").style = "display:block;"
        my$("product-bd-box-3").style = "display:none;"

        noClick();//把所有图片换成未点击时的图片;排他功能
        this.style.backgroundImage = "url(images/prodcut-2-"+(this.index+1)+"-click.png";
        for(var j = 0; j < productBox_2.length; j++){
            productBox_2[j].className = "product-inner w product-hidden";
        }
        productBox_2[this.index].className = "product-inner w";
        productBox_2[this.index].style = "animation:product-inner-hidden 0.8s ease-in";
    };
}

var productBox_3 = my$("product-bd-box-3").getElementsByClassName("product-inner");
for(var i = 0; i < productNav_3.length; i++){
    productNav_3[i].index = i;
    productNav_3[i].onclick = function (){
        my$("product-bd-box-1").style = "display:none;"
        my$("product-bd-box-2").style = "display:none;"
        my$("product-bd-box-3").style = "display:block;"

        noClick();//把所有图片换成未点击时的图片;排他功能
        this.style.backgroundImage = "url(images/prodcut-3-"+(this.index+1)+"-click.png";
        for(var j = 0; j < productBox_3.length; j++){
            productBox_3[j].className = "product-inner w product-hidden";
        }
        productBox_3[this.index].className = "product-inner w";
        productBox_3[this.index].style = "animation:product-inner-hidden 0.8s ease-in";
    };
}
/**
 * 后续必须优化代码！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
 */