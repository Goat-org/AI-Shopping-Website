function clickCounter()
{
    if (sessionStorage.clickcount)
    {
        sessionStorage.clickcount = sessionStorage.clickcount1+sessionStorage.clickcount2+sessionStorage.clickcount3+sessionStorage.clickcount4+sessionStorage.clickcount5+sessionStorage.clickcount6+sessionStorage.clickcount7+sessionStorage.clickcount8;
    }
    else
    {
        sessionStorage.clickcount = 1;
    }
}
function clickCounter1()
{
    if (sessionStorage.clickcount1)
    {
        sessionStorage.clickcount1 = Number(sessionStorage.clickcount1)+1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount1;
    }
    else
    {
        sessionStorage.clickcount1 = 1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount1;
    }
}
function clickCounter2()
{
    if (sessionStorage.clickcount2)
    {
        sessionStorage.clickcount2 = Number(sessionStorage.clickcount2)+1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount2;
    }
    else
    {
        sessionStorage.clickcount2 = 1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount2;
    }
}
function clickCounter3()
{
    if (sessionStorage.clickcount3)
    {
        sessionStorage.clickcount3 = Number(sessionStorage.clickcount3)+1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount3;
    }
    else
    {
        sessionStorage.clickcount3 = 1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount3;
    }
}
function clickCounter4()
{
    if (sessionStorage.clickcount4)
    {
        sessionStorage.clickcount4 = Number(sessionStorage.clickcount4)+1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount4;
    }
    else
    {
        sessionStorage.clickcount4 = 1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount4;
    }
}
function clickCounter5()
{
    if (sessionStorage.clickcount5)
    {
        sessionStorage.clickcount5 = Number(sessionStorage.clickcount5)+1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount5;
    }
    else
    {
        sessionStorage.clickcount5 = 1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount5;
    }
}
function clickCounter6()
{
    if (sessionStorage.clickcount6)
    {
        sessionStorage.clickcount6 = Number(sessionStorage.clickcount6)+1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount6;
    }
    else
    {
        sessionStorage.clickcount6 = 1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount6;
    }
}
function clickCounter7()
{
    if (sessionStorage.clickcount7)
    {
        sessionStorage.clickcount7 = Number(sessionStorage.clickcount7)+1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount7;
    }
    else
    {
        sessionStorage.clickcount7 = 1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount7;
    }
}
function clickCounter8()
{
    if (sessionStorage.clickcount8)
    {
        sessionStorage.clickcount8 = Number(sessionStorage.clickcount8)+1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount8;
    }
    else
    {
        sessionStorage.clickcount8 = 1;
        sessionStorage.clickcount = sessionStorage.clickcount + sessionStorage.clickcount8;
    }
}
function showCartImg()
{ 
    var cartpic = document.getElementById("cart-pic");
    if(sessionStorage.clickcount == 1 || sessionStorage.clickcount1 == 1 || sessionStorage.clickcount2 == 1 || sessionStorage.clickcount3 == 1 || sessionStorage.clickcount4 == 1 || sessionStorage.clickcount5 == 1 || sessionStorage.clickcount6 == 1 || sessionStorage.clickcount7 == 1 || sessionStorage.clickcount8 == 1)
    {
        // Store
        sessionStorage.setItem("cartpic", cartpic.src);
        // Retrieve
        cartpic.src = "images/cart red circle 1.png";
        sessionStorage.getItem("cartpic");
    }
    else if(sessionStorage.clickcount == 2 || sessionStorage.clickcount1 == 2 || sessionStorage.clickcount2 == 2 || sessionStorage.clickcount3 == 2 || sessionStorage.clickcount4 == 2 || sessionStorage.clickcount5 == 2 || sessionStorage.clickcount6 == 2 || sessionStorage.clickcount7 == 2 || sessionStorage.clickcount8 == 2)
    {
        cartpic.src = "images/cart red circle 2.jpeg";
        sessionStorage.getItem("cartpic");
    }
    else if(sessionStorage.clickcount == 3 || sessionStorage.clickcount1 == 3 || sessionStorage.clickcount2 == 3 || sessionStorage.clickcount3 == 3 || sessionStorage.clickcount4 == 3 || sessionStorage.clickcount5 == 3 || sessionStorage.clickcount6 == 3 || sessionStorage.clickcount7 == 3 || sessionStorage.clickcount8 == 3)
    {
        cartpic.src = "images/cart red circle 2.jpeg";
        sessionStorage.getItem("cartpic");
    }
    else
    {
        cartpic.src = "images/cartpic.png";
    }
}
function showCartImgOnload()
{
    var cartpic = document.getElementById("cart-pic");
    if(sessionStorage.clickcount == 1 || sessionStorage.clickcount1 == 1 || sessionStorage.clickcount2 == 1 || sessionStorage.clickcount3 == 1 || sessionStorage.clickcount4 == 1 || sessionStorage.clickcount5 == 1 || sessionStorage.clickcount6 == 1 || sessionStorage.clickcount7 == 1 || sessionStorage.clickcount8 == 1)
    {
        // Store
        sessionStorage.setItem("cartpic", cartpic.src);
        // Retrieve
        cartpic.src = "images/cart red circle 1.png";
        sessionStorage.getItem("cartpic");
    }
    else if(sessionStorage.clickcount == 2 || sessionStorage.clickcount1 == 2 || sessionStorage.clickcount2 == 2 || sessionStorage.clickcount3 == 2 || sessionStorage.clickcount4 == 2 || sessionStorage.clickcount5 == 2 || sessionStorage.clickcount6 == 2 || sessionStorage.clickcount7 == 2 || sessionStorage.clickcount8 == 2)
    {
        cartpic.src = "images/cart red circle 2.jpeg";
        sessionStorage.getItem("cartpic");
    }
    else if(sessionStorage.clickcount == 3 || sessionStorage.clickcount1 == 3 || sessionStorage.clickcount2 == 3 || sessionStorage.clickcount3 == 3 || sessionStorage.clickcount4 == 3 || sessionStorage.clickcount5 == 3 || sessionStorage.clickcount6 == 3 || sessionStorage.clickcount7 == 3 || sessionStorage.clickcount8 == 3)
    {
        cartpic.src = "images/cart red circle 2.jpeg";
        sessionStorage.getItem("cartpic");
    }
    else
    {
        cartpic.src = "images/cartpic.png";    
    }
}
function addWineToCart1Preload()
{
    if(sessionStorage.getItem("logic1") == "1")
    {
        document.getElementById("cart-item1").style.visibility = "";
        var winepic1 = document.getElementById("wine-pic1");
        var winetitle1 = "Mary Rose Pinotage Red Wine";
        var wineprice1 = "Price: R119.99"
        var wineremovebutton1 = "Remove";
        var winequantity1;
        var winesubtotalprice1;
    }
    else
    {
        var winepic1 = "";
        var winequantity1 = "";
        var winetitle1 = "";
        var wineprice1 = ""
        var wineremovebutton1 = "";
    }
    winequantity1 = 1 * sessionStorage.clickcount1;
    winesubtotalprice1 = 119.99 * sessionStorage.clickcount1;
    winesubtotalprice1 = winesubtotalprice1 - (winesubtotalprice1 * 0.14);
    winesubtotalprice1 = winesubtotalprice1.toFixed(2);

    // Store
    sessionStorage.setItem("winepic1", winepic1.src);
    sessionStorage.setItem("winetitle1", winetitle1);
    sessionStorage.setItem("wineprice1", wineprice1);
    sessionStorage.setItem("winequantity1", winequantity1);
    sessionStorage.setItem("wineremovebutton1", wineremovebutton1);
    sessionStorage.setItem("winesubtotalprice1", winesubtotalprice1);
    winepic1.src = "images/Standard Red Wine5.png";
    // Retrieve
    sessionStorage.getItem("winepic1");
    document.getElementById("wine-title1").innerHTML = sessionStorage.getItem("winetitle1");
    document.getElementById("wine-price1").innerHTML = sessionStorage.getItem("wineprice1");
    document.getElementById("wine-quantity1").innerHTML = sessionStorage.getItem("winequantity1");
    document.getElementById("wine-remove-button1").innerHTML = sessionStorage.getItem("wineremovebutton1");
    document.getElementById("wine-subtotal-price1").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice1");
}
function addWineToCart2Preload()
{
    if(sessionStorage.getItem("logic2") == "1")
    {
        document.getElementById("cart-item2").style.visibility = "";
        var winepic2 = document.getElementById("wine-pic2");
        var winetitle2 = "Mary Rose Vintage Original";
        var wineprice2 = "Price: R149.99"
        var wineremovebutton2 = "Remove";
        var winequantity2;
        var winesubtotalprice2;
    }
    else
    {
        var winepic2 = "";
        var winequantity2 = "";
        var winetitle2 = "";
        var wineprice2 = ""
        var wineremovebutton2 = "";
    }
    winequantity2 = 1 * sessionStorage.clickcount2;
    winesubtotalprice2 = 149.99 * sessionStorage.clickcount2;
    winesubtotalprice2 = winesubtotalprice2 - (winesubtotalprice2 * 0.14);
    winesubtotalprice2 = winesubtotalprice2.toFixed(2);

    // Store
    sessionStorage.setItem("winepic2", winepic2.src);
    sessionStorage.setItem("winetitle2", winetitle2);
    sessionStorage.setItem("wineprice2", wineprice2);
    sessionStorage.setItem("winequantity2", winequantity2);
    sessionStorage.setItem("wineremovebutton2", wineremovebutton2);
    sessionStorage.setItem("winesubtotalprice2", winesubtotalprice2);
    winepic2.src = "images/Vintage normal1.jpg";
    // Retrieve
    sessionStorage.getItem("winepic2");
    document.getElementById("wine-title2").innerHTML = sessionStorage.getItem("winetitle2");
    document.getElementById("wine-price2").innerHTML = sessionStorage.getItem("wineprice2");
    document.getElementById("wine-quantity2").innerHTML = sessionStorage.getItem("winequantity2");
    document.getElementById("wine-remove-button2").innerHTML = sessionStorage.getItem("wineremovebutton2");
    document.getElementById("wine-subtotal-price2").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice2");
}
function addWineToCart3Preload()
{
    if(sessionStorage.getItem("logic3") == "1")
    {
        document.getElementById("cart-item3").style.visibility = "";
        var winepic3 = document.getElementById("wine-pic3");
        var winetitle3 = "Mary Rose Vintage Blue";
        var wineprice3 = "Price: R249.99"
        var wineremovebutton3 = "Remove";
        var winequantity3;
        var winesubtotalprice3;
    }
    else
    {
        var winepic3 = "";
        var winequantity3 = "";
        var winetitle3 = "";
        var wineprice3 = ""
        var wineremovebutton3 = "";
    }
    winequantity3 = 1 * sessionStorage.clickcount3;
    winesubtotalprice3 = 249.99 * sessionStorage.clickcount3;
    winesubtotalprice3 = winesubtotalprice3 - (winesubtotalprice3 * 0.14);
    winesubtotalprice3 = winesubtotalprice3.toFixed(2);

    // Store
    sessionStorage.setItem("winepic3", winepic3.src);
    sessionStorage.setItem("winetitle3", winetitle3);
    sessionStorage.setItem("wineprice3", wineprice3);
    sessionStorage.setItem("winequantity3", winequantity3);
    sessionStorage.setItem("wineremovebutton3", wineremovebutton3);
    sessionStorage.setItem("winesubtotalprice3", winesubtotalprice3);
    winepic3.src = "images/Vintage blue1.jpg";
    // Retrieve
    sessionStorage.getItem("winepic3");
    document.getElementById("wine-title3").innerHTML = sessionStorage.getItem("winetitle3");
    document.getElementById("wine-price3").innerHTML = sessionStorage.getItem("wineprice3");
    document.getElementById("wine-quantity3").innerHTML = sessionStorage.getItem("winequantity3");
    document.getElementById("wine-remove-button3").innerHTML = sessionStorage.getItem("wineremovebutton3");
    document.getElementById("wine-subtotal-price3").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice3");
}
function addWineToCart4Preload()
{
    if(sessionStorage.getItem("logic4") == "1")
    {
        document.getElementById("cart-item4").style.visibility = "";
        var winepic4 = document.getElementById("wine-pic4");
        var winetitle4 = "Mary Rose Vintage Limited Edition";
        var wineprice4 = "Price: R199.99"
        var wineremovebutton4 = "Remove";
        var winequantity4;
        var winesubtotalprice4;
    }
    else
    {
        var winepic4 = "";
        var winequantity4 = "";
        var winetitle4 = "";
        var wineprice4 = ""
        var wineremovebutton4 = "";
    }
    winequantity4 = 1 * sessionStorage.clickcount4;
    winesubtotalprice4 = 199.99 * sessionStorage.clickcount4;
    winesubtotalprice4 = winesubtotalprice4 - (winesubtotalprice4 * 0.14);
    winesubtotalprice4 = winesubtotalprice4.toFixed(2);

    // Store
    sessionStorage.setItem("winepic4", winepic4.src);
    sessionStorage.setItem("winetitle4", winetitle4);
    sessionStorage.setItem("wineprice4", wineprice4);
    sessionStorage.setItem("winequantity4", winequantity4);
    sessionStorage.setItem("wineremovebutton4", wineremovebutton4);
    sessionStorage.setItem("winesubtotalprice4", winesubtotalprice4);
    winepic4.src = "images/Vintage Limited1.jpg";
    // Retrieve
    sessionStorage.getItem("winepic4");
    document.getElementById("wine-title4").innerHTML = sessionStorage.getItem("winetitle4");
    document.getElementById("wine-price4").innerHTML = sessionStorage.getItem("wineprice4");
    document.getElementById("wine-quantity4").innerHTML = sessionStorage.getItem("winequantity4");
    document.getElementById("wine-remove-button4").innerHTML = sessionStorage.getItem("wineremovebutton4");
    document.getElementById("wine-subtotal-price4").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice4");
}
function addWineToCart5Preload()
{
    if(sessionStorage.getItem("logic5") == "1")
    {
        document.getElementById("cart-item5").style.visibility = "";
        var winepic5 = document.getElementById("wine-pic5");
        var winetitle5 = "Mary Rose Blue Edition";
        var wineprice5 = "Price: R299.99"
        var wineremovebutton5 = "Remove";
        var winequantity5;
        var winesubtotalprice5;
    }
    else
    {
        var winepic5 = "";
        var winequantity5 = "";
        var winetitle5 = "";
        var wineprice5 = ""
        var wineremovebutton5 = "";
    }
    winequantity5 = 1 * sessionStorage.clickcount5;
    winesubtotalprice5 = 299.99 * sessionStorage.clickcount5;
    winesubtotalprice5 = winesubtotalprice5 - (winesubtotalprice5 * 0.14);
    winesubtotalprice5 = winesubtotalprice5.toFixed(2);

    // Store
    sessionStorage.setItem("winepic5", winepic5.src);
    sessionStorage.setItem("winetitle5", winetitle5);
    sessionStorage.setItem("wineprice5", wineprice5);
    sessionStorage.setItem("winequantity5", winequantity5);
    sessionStorage.setItem("wineremovebutton5", wineremovebutton5);
    sessionStorage.setItem("winesubtotalprice5", winesubtotalprice5);
    winepic5.src = "images/Vintage blue2.png";
    // Retrieve
    sessionStorage.getItem("winepic5");
    document.getElementById("wine-title5").innerHTML = sessionStorage.getItem("winetitle5");
    document.getElementById("wine-price5").innerHTML = sessionStorage.getItem("wineprice5");
    document.getElementById("wine-quantity5").innerHTML = sessionStorage.getItem("winequantity5");
    document.getElementById("wine-remove-button5").innerHTML = sessionStorage.getItem("wineremovebutton5");
    document.getElementById("wine-subtotal-price5").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice5");
}
function addWineToCart6Preload()
{
    if(sessionStorage.getItem("logic6") == "1")
    {
        document.getElementById("cart-item6").style.visibility = "";
        var winepic6 = document.getElementById("wine-pic6");
        var winetitle6 = "Mary Rose Premium";
        var wineprice6 = "Price: R259.99"
        var wineremovebutton6 = "Remove";
        var winequantity6;
        var winesubtotalprice6;
    }
    else
    {
        var winepic6 = "";
        var winequantity6 = "";
        var winetitle6 = "";
        var wineprice6 = ""
        var wineremovebutton6 = "";
    }
    winequantity6 = 1 * sessionStorage.clickcount6;
    winesubtotalprice6 = 259.99 * sessionStorage.clickcount6;
    winesubtotalprice6 = winesubtotalprice6 - (winesubtotalprice6 * 0.14);
    winesubtotalprice6 = winesubtotalprice6.toFixed(2);

    // Store
    sessionStorage.setItem("winepic6", winepic6.src);
    sessionStorage.setItem("winetitle6", winetitle6);
    sessionStorage.setItem("wineprice6", wineprice6);
    sessionStorage.setItem("winequantity6", winequantity6);
    sessionStorage.setItem("wineremovebutton6", wineremovebutton6);
    sessionStorage.setItem("winesubtotalprice6", winesubtotalprice6);
    winepic6.src = "images/bottlepic3.png";
    // Retrieve
    sessionStorage.getItem("winepic6");
    document.getElementById("wine-title6").innerHTML = sessionStorage.getItem("winetitle6");
    document.getElementById("wine-price6").innerHTML = sessionStorage.getItem("wineprice6");
    document.getElementById("wine-quantity6").innerHTML = sessionStorage.getItem("winequantity6");
    document.getElementById("wine-remove-button6").innerHTML = sessionStorage.getItem("wineremovebutton6");
    document.getElementById("wine-subtotal-price6").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice6");
}
function addWineToCart7Preload()
{
    if(sessionStorage.getItem("logic7") == "1")
    {
        document.getElementById("cart-item7").style.visibility = "";
        var winepic7 = document.getElementById("wine-pic7");
        var winetitle7 = "Mary Rose Premium Gold";
        var wineprice7 = "Price: R499.99"
        var wineremovebutton7 = "Remove";
        var winequantity7;
        var winesubtotalprice7;
    }
    else
    {
        var winepic7 = "";
        var winequantity7 = "";
        var winetitle7 = "";
        var wineprice7 = ""
        var wineremovebutton7 = "";
    }
    winequantity7 = 1 * sessionStorage.clickcount7;
    winesubtotalprice7 = 499.99 * sessionStorage.clickcount7;
    winesubtotalprice7 = winesubtotalprice7 - (winesubtotalprice7 * 0.14);
    winesubtotalprice7 = winesubtotalprice7.toFixed(2);

    // Store
    sessionStorage.setItem("winepic7", winepic7.src);
    sessionStorage.setItem("winetitle7", winetitle7);
    sessionStorage.setItem("wineprice7", wineprice7);
    sessionStorage.setItem("winequantity7", winequantity7);
    sessionStorage.setItem("wineremovebutton7", wineremovebutton7);
    sessionStorage.setItem("winesubtotalprice7", winesubtotalprice7);
    winepic7.src = "images/bottlepic5.png";
    // Retrieve
    sessionStorage.getItem("winepic7");
    document.getElementById("wine-title7").innerHTML = sessionStorage.getItem("winetitle7");
    document.getElementById("wine-price7").innerHTML = sessionStorage.getItem("wineprice7");
    document.getElementById("wine-quantity7").innerHTML = sessionStorage.getItem("winequantity7");
    document.getElementById("wine-remove-button7").innerHTML = sessionStorage.getItem("wineremovebutton7");
    document.getElementById("wine-subtotal-price7").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice7");
}
function addWineToCart8Preload()
{
    if(sessionStorage.getItem("logic8") == "1")
    {
        document.getElementById("cart-item8").style.visibility = "";
        var winepic8 = document.getElementById("wine-pic8");
        var winetitle8 = "Mary Rose Black Rose";
        var wineprice8 = "Price: R259.99"
        var wineremovebutton8 = "Remove";
        var winequantity8;
        var winesubtotalprice8;
    }
    else
    {
        var winepic8 = "";
        var winequantity8 = "";
        var winetitle8 = "";
        var wineprice8 = ""
        var wineremovebutton8 = "";
    }
    winequantity8 = 1 * sessionStorage.clickcount8;
    winesubtotalprice8 = 259.99 * sessionStorage.clickcount8;
    winesubtotalprice8 = winesubtotalprice8 - (winesubtotalprice8 * 0.14);
    winesubtotalprice8 = winesubtotalprice8.toFixed(2);

    // Store
    sessionStorage.setItem("winepic8", winepic8.src);
    sessionStorage.setItem("winetitle8", winetitle8);
    sessionStorage.setItem("wineprice8", wineprice8);
    sessionStorage.setItem("winequantity8", winequantity8);
    sessionStorage.setItem("wineremovebutton8", wineremovebutton8);
    sessionStorage.setItem("winesubtotalprice8", winesubtotalprice8);
    winepic8.src = "images/Black Mary Rose Red Wine.jfif";
    // Retrieve
    sessionStorage.getItem("winepic8");
    document.getElementById("wine-title8").innerHTML = sessionStorage.getItem("winetitle8");
    document.getElementById("wine-price8").innerHTML = sessionStorage.getItem("wineprice8");
    document.getElementById("wine-quantity8").innerHTML = sessionStorage.getItem("winequantity8");
    document.getElementById("wine-remove-button8").innerHTML = sessionStorage.getItem("wineremovebutton8");
    document.getElementById("wine-subtotal-price8").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice8");
}
function addWineToCart1()
{
    clickCounter1();
    sessionStorage.setItem("logic1", "1");
    sessionStorage.setItem("proceedtocheckoutlogic", "1");
    showCartImg();
    addWineToCart1Preload();
    cartTotal();
}
function addWineToCart2()
{
    clickCounter2();
    sessionStorage.setItem("logic2", "1");
    sessionStorage.setItem("proceedtocheckoutlogic", "1");
    showCartImg();
    addWineToCart2Preload();
    cartTotal();
}
function addWineToCart3()
{
    clickCounter3();
    sessionStorage.setItem("logic3", "1");
    sessionStorage.setItem("proceedtocheckoutlogic", "1");
    showCartImg();
    addWineToCart3Preload();
    cartTotal();
}
function addWineToCart4()
{
    clickCounter4();
    sessionStorage.setItem("logic4", "1");
    sessionStorage.setItem("proceedtocheckoutlogic", "1");
    showCartImg();
    addWineToCart4Preload();
    cartTotal();
}
function addWineToCart5()
{
    clickCounter5();
    sessionStorage.setItem("logic5", "1");
    sessionStorage.setItem("proceedtocheckoutlogic", "1");
    showCartImg();
    addWineToCart5Preload();
    cartTotal();
}
function addWineToCart6()
{
    clickCounter6();
    sessionStorage.setItem("logic6", "1");
    sessionStorage.setItem("proceedtocheckoutlogic", "1");
    showCartImg();
    addWineToCart6Preload();
    cartTotal();
}
function addWineToCart7()
{
    clickCounter7();
    sessionStorage.setItem("logic7", "1");
    sessionStorage.setItem("proceedtocheckoutlogic", "1");
    showCartImg();
    addWineToCart7Preload();
    cartTotal();
}
function addWineToCart8()
{
    clickCounter8();
    sessionStorage.setItem("logic8", "1");
    sessionStorage.setItem("proceedtocheckoutlogic", "1");
    showCartImg();
    addWineToCart8Preload();
    cartTotal();
}
function addWineToCart1Onload()
{
    showCartImgOnload();
    addWineToCart1Preload();
    cartTotal();
}
function addWineToCart2Onload()
{
    showCartImgOnload();
    addWineToCart2Preload();
    cartTotal();
}
function addWineToCart3Onload()
{
    showCartImgOnload();
    addWineToCart3Preload();
    cartTotal();
}
function addWineToCart4Onload()
{
    showCartImgOnload();
    addWineToCart4Preload();
    cartTotal();
}
function addWineToCart5Onload()
{
    showCartImgOnload();
    addWineToCart5Preload();
    cartTotal();
}
function addWineToCart6Onload()
{
    showCartImgOnload();
    addWineToCart6Preload();
    cartTotal();
}
function addWineToCart7Onload()
{
    showCartImgOnload();
    addWineToCart7Preload();
    cartTotal();
}
function addWineToCart8Onload()
{
    showCartImgOnload();
    addWineToCart8Preload();
    cartTotal();
}
function addWineToCartOnload()
{
    if(sessionStorage.clickcount >= 1 || sessionStorage.clickcount1 >= 1 || sessionStorage.clickcount2 >= 1 || sessionStorage.clickcount3 >= 1 || sessionStorage.clickcount4 >= 1 || sessionStorage.clickcount5 >= 1 || sessionStorage.clickcount6 >= 1 || sessionStorage.clickcount7 >= 1 || sessionStorage.clickcount8 >= 1)
    {
        sessionStorage.setItem("proceedtocheckoutlogic", "1");
        showCartImgOnload();
        addWineToCart1Preload();
        addWineToCart2Preload();
        addWineToCart3Preload();
        addWineToCart4Preload();
        addWineToCart5Preload();
        addWineToCart6Preload();
        addWineToCart7Preload();
        addWineToCart8Preload();
        cartTotal();
    }
    else
    {
        sessionStorage.setItem("proceedtocheckoutlogic", "0");
        sessionStorage.setItem("logic1", "0");
        sessionStorage.setItem("logic2", "0");
        showCartImgOnload();
        addWineToCart1Preload();
        addWineToCart2Preload();
        addWineToCart3Preload();
        addWineToCart4Preload();
        addWineToCart5Preload();
        addWineToCart6Preload();
        addWineToCart7Preload();
        addWineToCart8Preload();
        cartTotal();
    }
}
function cartTotal()
{
    document.getElementById("purchase-button").style.visibility = "";
    var winesubtotalprice1 = 0;
    var winetax1 = 0;
    var winetotalprice1 = 0;
    var winesubtotalprice2 = 0;
    var winetax2 = 0;
    var winetotalprice2 = 0;
    var winesubtotalprice3 = 0;
    var winetax3 = 0;
    var winetotalprice3 = 0;
    var winesubtotalprice4 = 0;
    var winetax4 = 0;
    var winetotalprice4 = 0;
    var winesubtotalprice5 = 0;
    var winetax5 = 0;
    var winetotalprice5 = 0;
    var winesubtotalprice6 = 0;
    var winetax6 = 0;
    var winetotalprice6 = 0;
    var winesubtotalprice7 = 0;
    var winetax7 = 0;
    var winetotalprice7 = 0;
    var winesubtotalprice8 = 0;
    var winetax8 = 0;
    var winetotalprice8 = 0;
    if(sessionStorage.clickcount1 > 0)
    {
        winesubtotalprice1 = 119.99 * sessionStorage.clickcount1;
        winesubtotalprice1 = winesubtotalprice1 - (winesubtotalprice1 * 0.14);
        winetax1 = 119.99 * 0.14 * sessionStorage.clickcount1;
        winetotalprice1 = 119.99 * sessionStorage.clickcount1;
    }
    if(sessionStorage.clickcount2 > 0)
    {
        winesubtotalprice2 = 149.99 * sessionStorage.clickcount2;
        winesubtotalprice2 = winesubtotalprice2 - (winesubtotalprice2 * 0.14);
        winetax2 = 149.99 * 0.14 * sessionStorage.clickcount2;
        winetotalprice2 = 149.99 * sessionStorage.clickcount2;
    }
    if(sessionStorage.clickcount3 > 0)
    {
        winesubtotalprice3 = 249.99 * sessionStorage.clickcount3;
        winesubtotalprice3 = winesubtotalprice3 - (winesubtotalprice3 * 0.14);
        winetax3 = 249.99 * 0.14 * sessionStorage.clickcount3;
        winetotalprice3 = 249.99 * sessionStorage.clickcount3;
    }
    if(sessionStorage.clickcount4 > 0)
    {
        winesubtotalprice4 = 199.99 * sessionStorage.clickcount4;
        winesubtotalprice4 = winesubtotalprice4 - (winesubtotalprice4 * 0.14);
        winetax4 = 199.99 * 0.14 * sessionStorage.clickcount4;
        winetotalprice4 = 199.99 * sessionStorage.clickcount4;
    }
    if(sessionStorage.clickcount5 > 0)
    {
        winesubtotalprice5 = 299.99 * sessionStorage.clickcount5;
        winesubtotalprice5 = winesubtotalprice5 - (winesubtotalprice5 * 0.14);
        winetax5 = 299.99 * 0.14 * sessionStorage.clickcount5;
        winetotalprice5 = 299.99 * sessionStorage.clickcount5;
    }
    if(sessionStorage.clickcount6 > 0)
    {
        winesubtotalprice6 = 259.99 * sessionStorage.clickcount6;
        winesubtotalprice6 = winesubtotalprice6 - (winesubtotalprice6 * 0.14);
        winetax6 = 259.99 * 0.14 * sessionStorage.clickcount6;
        winetotalprice6 = 259.99 * sessionStorage.clickcount6;
    }
    if(sessionStorage.clickcount7 > 0)
    {
        winesubtotalprice7 = 499.99 * sessionStorage.clickcount7;
        winesubtotalprice7 = winesubtotalprice7 - (winesubtotalprice7 * 0.14);
        winetax7 = 499.99 * 0.14 * sessionStorage.clickcount7;
        winetotalprice7 = 499.99 * sessionStorage.clickcount7;
    }
    if(sessionStorage.clickcount8 > 0)
    {
        winesubtotalprice8 = 259.99 * sessionStorage.clickcount8;
        winesubtotalprice8 = winesubtotalprice8 - (winesubtotalprice8 * 0.14);
        winetax8 = 259.99 * 0.14 * sessionStorage.clickcount8;
        winetotalprice8 = 259.99 * sessionStorage.clickcount8;
    }
    var winesubtotalprice = winesubtotalprice1 + winesubtotalprice2 + winesubtotalprice3 + winesubtotalprice4 + winesubtotalprice5 + winesubtotalprice6 + winesubtotalprice7 + winesubtotalprice8;
    winesubtotalprice = winesubtotalprice.toFixed(2);
    var winetax = winetax1 + winetax2 + winetax3 + winetax4 + winetax5 + winetax6 + winetax7 + winetax8;
    winetax = winetax.toFixed(2);
    var winetotalprice = winetotalprice1 + winetotalprice2 + winetotalprice3 + winetotalprice4 + winetotalprice5 + winetotalprice6 + winetotalprice7 + winetotalprice8;
    winetotalprice = winetotalprice.toFixed(2);
    // Store
    sessionStorage.setItem("winesubtotalprice", winesubtotalprice);
    sessionStorage.setItem("winetax", winetax);
    sessionStorage.setItem("winetotalprice", winetotalprice);
    // Retrieve
    document.getElementById("wine-subtotal-price").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice");
    document.getElementById("wine-tax").innerHTML = "R" + sessionStorage.getItem("winetax");
    document.getElementById("wine-total-price").innerHTML = "R" + sessionStorage.getItem("winetotalprice");
    document.getElementById("purchase-button").style.visibility = "";
}
function removeCartItem1()
{
    document.getElementById("cart-item1").style.visibility = "collapse";
    // Remove Cart Item1
    sessionStorage.removeItem("winepic1");
    sessionStorage.removeItem("winetitle1");
    sessionStorage.removeItem("wineprice1");
    sessionStorage.removeItem("winequantity1");
    sessionStorage.removeItem("wineremovebutton1");
    sessionStorage.removeItem("winesubtotalprice1");

    // Remove Cart Total
    sessionStorage.removeItem("winesubtotalprice1");
    sessionStorage.removeItem("winetax1");
    sessionStorage.removeItem("winetotalprice1");
    sessionStorage.clickcount1 = 0;

    // Retrieve Cart Pic
    document.getElementById("cart-pic").src = "images/cartpic.png";

    // Retrieve Cart Item1
    document.getElementById("wine-pic1").src = "";
    document.getElementById("wine-title1").innerHTML = sessionStorage.getItem("winetitle1");
    document.getElementById("wine-price1").innerHTML = sessionStorage.getItem("wineprice1");
    document.getElementById("wine-quantity1").innerHTML = sessionStorage.getItem("winequantity1");
    document.getElementById("wine-remove-button1").innerHTML = sessionStorage.getItem("wineremovebutton1");
    document.getElementById("wine-subtotal-price1").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice1");

    // Retrieve Cart Total
    document.getElementById("wine-subtotal-price").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice");
    document.getElementById("wine-tax").innerHTML = "R" + sessionStorage.getItem("winetax");
    document.getElementById("wine-total-price").innerHTML = "R" + sessionStorage.getItem("winetotalprice");
    sessionStorage.setItem("logic1", "0");
    sessionStorage.setItem("proceedtocheckoutlogic", "0");
}
function removeCartItem2()
{
    document.getElementById("cart-item2").style.visibility = "collapse";
    // Remove Cart Item2
    sessionStorage.removeItem("winepic2");
    sessionStorage.removeItem("winetitle2");
    sessionStorage.removeItem("wineprice2");
    sessionStorage.removeItem("winequantity2");
    sessionStorage.removeItem("wineremovebutton2");
    sessionStorage.removeItem("winesubtotalprice2");

    // Remove Cart Total
    sessionStorage.removeItem("winesubtotalprice2");
    sessionStorage.removeItem("winetax2");
    sessionStorage.removeItem("winetotalprice2");
    sessionStorage.clickcount2 = 0;

    // Retrieve Cart Pic
    document.getElementById("cart-pic").src = "images/cartpic.png";

    // Retrieve Cart Item2
    document.getElementById("wine-pic2").src = "";
    document.getElementById("wine-title2").innerHTML = sessionStorage.getItem("winetitle2");
    document.getElementById("wine-price2").innerHTML = sessionStorage.getItem("wineprice2");
    document.getElementById("wine-quantity2").innerHTML = sessionStorage.getItem("winequantity2");
    document.getElementById("wine-remove-button2").innerHTML = sessionStorage.getItem("wineremovebutton2");
    document.getElementById("wine-subtotal-price2").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice2");

    // Retrieve Cart Total
    document.getElementById("wine-subtotal-price").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice");
    document.getElementById("wine-tax").innerHTML = "R" + sessionStorage.getItem("winetax");
    document.getElementById("wine-total-price").innerHTML = "R" + sessionStorage.getItem("winetotalprice");
    sessionStorage.setItem("logic2", "0");
    sessionStorage.setItem("proceedtocheckoutlogic", "0");
}
function removeCartItem3()
{
    document.getElementById("cart-item3").style.visibility = "collapse";
    // Remove Cart Item3
    sessionStorage.removeItem("winepic3");
    sessionStorage.removeItem("winetitle3");
    sessionStorage.removeItem("wineprice3");
    sessionStorage.removeItem("winequantity3");
    sessionStorage.removeItem("wineremovebutton3");
    sessionStorage.removeItem("winesubtotalprice3");

    // Remove Cart Total
    sessionStorage.removeItem("winesubtotalprice3");
    sessionStorage.removeItem("winetax3");
    sessionStorage.removeItem("winetotalprice3");
    sessionStorage.clickcount3 = 0;

    // Retrieve Cart Pic
    document.getElementById("cart-pic").src = "images/cartpic.png";

    // Retrieve Cart Item3
    document.getElementById("wine-pic3").src = "";
    document.getElementById("wine-title3").innerHTML = sessionStorage.getItem("winetitle3");
    document.getElementById("wine-price3").innerHTML = sessionStorage.getItem("wineprice3");
    document.getElementById("wine-quantity3").innerHTML = sessionStorage.getItem("winequantity3");
    document.getElementById("wine-remove-button3").innerHTML = sessionStorage.getItem("wineremovebutton3");
    document.getElementById("wine-subtotal-price3").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice3");

    // Retrieve Cart Total
    document.getElementById("wine-subtotal-price").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice");
    document.getElementById("wine-tax").innerHTML = "R" + sessionStorage.getItem("winetax");
    document.getElementById("wine-total-price").innerHTML = "R" + sessionStorage.getItem("winetotalprice");
    sessionStorage.setItem("logic3", "0");
    sessionStorage.setItem("proceedtocheckoutlogic", "0");
}
function removeCartItem4()
{
    document.getElementById("cart-item4").style.visibility = "collapse";
    // Remove Cart Item4
    sessionStorage.removeItem("winepic4");
    sessionStorage.removeItem("winetitle4");
    sessionStorage.removeItem("wineprice4");
    sessionStorage.removeItem("winequantity4");
    sessionStorage.removeItem("wineremovebutton4");
    sessionStorage.removeItem("winesubtotalprice4");

    // Remove Cart Total
    sessionStorage.removeItem("winesubtotalprice4");
    sessionStorage.removeItem("winetax4");
    sessionStorage.removeItem("winetotalprice4");
    sessionStorage.clickcount4 = 0;

    // Retrieve Cart Pic
    document.getElementById("cart-pic").src = "images/cartpic.png";

    // Retrieve Cart Item4
    document.getElementById("wine-pic4").src = "";
    document.getElementById("wine-title4").innerHTML = sessionStorage.getItem("winetitle4");
    document.getElementById("wine-price4").innerHTML = sessionStorage.getItem("wineprice4");
    document.getElementById("wine-quantity4").innerHTML = sessionStorage.getItem("winequantity4");
    document.getElementById("wine-remove-button4").innerHTML = sessionStorage.getItem("wineremovebutton4");
    document.getElementById("wine-subtotal-price4").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice4");

    // Retrieve Cart Total
    document.getElementById("wine-subtotal-price").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice");
    document.getElementById("wine-tax").innerHTML = "R" + sessionStorage.getItem("winetax");
    document.getElementById("wine-total-price").innerHTML = "R" + sessionStorage.getItem("winetotalprice");
    sessionStorage.setItem("logic4", "0");
    sessionStorage.setItem("proceedtocheckoutlogic", "0");
}
function removeCartItem5()
{
    document.getElementById("cart-item5").style.visibility = "collapse";
    // Remove Cart Item5
    sessionStorage.removeItem("winepic5");
    sessionStorage.removeItem("winetitle5");
    sessionStorage.removeItem("wineprice5");
    sessionStorage.removeItem("winequantity5");
    sessionStorage.removeItem("wineremovebutton5");
    sessionStorage.removeItem("winesubtotalprice5");

    // Remove Cart Total
    sessionStorage.removeItem("winesubtotalprice5");
    sessionStorage.removeItem("winetax5");
    sessionStorage.removeItem("winetotalprice5");
    sessionStorage.clickcount5 = 0;

    // Retrieve Cart Pic
    document.getElementById("cart-pic").src = "images/cartpic.png";

    // Retrieve Cart Item5
    document.getElementById("wine-pic5").src = "";
    document.getElementById("wine-title5").innerHTML = sessionStorage.getItem("winetitle5");
    document.getElementById("wine-price5").innerHTML = sessionStorage.getItem("wineprice5");
    document.getElementById("wine-quantity5").innerHTML = sessionStorage.getItem("winequantity5");
    document.getElementById("wine-remove-button5").innerHTML = sessionStorage.getItem("wineremovebutton5");
    document.getElementById("wine-subtotal-price5").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice5");

    // Retrieve Cart Total
    document.getElementById("wine-subtotal-price").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice");
    document.getElementById("wine-tax").innerHTML = "R" + sessionStorage.getItem("winetax");
    document.getElementById("wine-total-price").innerHTML = "R" + sessionStorage.getItem("winetotalprice");
    sessionStorage.setItem("logic5", "0");
    sessionStorage.setItem("proceedtocheckoutlogic", "0");
}
function removeCartItem6()
{
    document.getElementById("cart-item6").style.visibility = "collapse";
    // Remove Cart Item6
    sessionStorage.removeItem("winepic6");
    sessionStorage.removeItem("winetitle6");
    sessionStorage.removeItem("wineprice6");
    sessionStorage.removeItem("winequantity6");
    sessionStorage.removeItem("wineremovebutton6");
    sessionStorage.removeItem("winesubtotalprice6");

    // Remove Cart Total
    sessionStorage.removeItem("winesubtotalprice6");
    sessionStorage.removeItem("winetax6");
    sessionStorage.removeItem("winetotalprice6");
    sessionStorage.clickcount6 = 0;

    // Retrieve Cart Pic
    document.getElementById("cart-pic").src = "images/cartpic.png";

    // Retrieve Cart Item6
    document.getElementById("wine-pic6").src = "";
    document.getElementById("wine-title6").innerHTML = sessionStorage.getItem("winetitle6");
    document.getElementById("wine-price6").innerHTML = sessionStorage.getItem("wineprice6");
    document.getElementById("wine-quantity6").innerHTML = sessionStorage.getItem("winequantity6");
    document.getElementById("wine-remove-button6").innerHTML = sessionStorage.getItem("wineremovebutton6");
    document.getElementById("wine-subtotal-price6").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice6");

    // Retrieve Cart Total
    document.getElementById("wine-subtotal-price").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice");
    document.getElementById("wine-tax").innerHTML = "R" + sessionStorage.getItem("winetax");
    document.getElementById("wine-total-price").innerHTML = "R" + sessionStorage.getItem("winetotalprice");
    sessionStorage.setItem("logic6", "0");
    sessionStorage.setItem("proceedtocheckoutlogic", "0");
}
function removeCartItem7()
{
    document.getElementById("cart-item7").style.visibility = "collapse";
    // Remove Cart Item7
    sessionStorage.removeItem("winepic7");
    sessionStorage.removeItem("winetitle7");
    sessionStorage.removeItem("wineprice7");
    sessionStorage.removeItem("winequantity7");
    sessionStorage.removeItem("wineremovebutton7");
    sessionStorage.removeItem("winesubtotalprice7");

    // Remove Cart Total
    sessionStorage.removeItem("winesubtotalprice7");
    sessionStorage.removeItem("winetax7");
    sessionStorage.removeItem("winetotalprice7");
    sessionStorage.clickcount7 = 0;

    // Retrieve Cart Pic
    document.getElementById("cart-pic").src = "images/cartpic.png";

    // Retrieve Cart Item7
    document.getElementById("wine-pic7").src = "";
    document.getElementById("wine-title7").innerHTML = sessionStorage.getItem("winetitle7");
    document.getElementById("wine-price7").innerHTML = sessionStorage.getItem("wineprice7");
    document.getElementById("wine-quantity7").innerHTML = sessionStorage.getItem("winequantity7");
    document.getElementById("wine-remove-button7").innerHTML = sessionStorage.getItem("wineremovebutton7");
    document.getElementById("wine-subtotal-price7").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice7");

    // Retrieve Cart Total
    document.getElementById("wine-subtotal-price").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice");
    document.getElementById("wine-tax").innerHTML = "R" + sessionStorage.getItem("winetax");
    document.getElementById("wine-total-price").innerHTML = "R" + sessionStorage.getItem("winetotalprice");
    sessionStorage.setItem("logic7", "0");
    sessionStorage.setItem("proceedtocheckoutlogic", "0");
}
function removeCartItem8()
{
    document.getElementById("cart-item8").style.visibility = "collapse";
    // Remove Cart Item8
    sessionStorage.removeItem("winepic8");
    sessionStorage.removeItem("winetitle8");
    sessionStorage.removeItem("wineprice8");
    sessionStorage.removeItem("winequantity8");
    sessionStorage.removeItem("wineremovebutton8");
    sessionStorage.removeItem("winesubtotalprice8");

    // Remove Cart Total
    sessionStorage.removeItem("winesubtotalprice8");
    sessionStorage.removeItem("winetax8");
    sessionStorage.removeItem("winetotalprice8");
    sessionStorage.clickcount8 = 0;

    // Retrieve Cart Pic
    document.getElementById("cart-pic").src = "images/cartpic.png";

    // Retrieve Cart Item8
    document.getElementById("wine-pic8").src = "";
    document.getElementById("wine-title8").innerHTML = sessionStorage.getItem("winetitle8");
    document.getElementById("wine-price8").innerHTML = sessionStorage.getItem("wineprice8");
    document.getElementById("wine-quantity8").innerHTML = sessionStorage.getItem("winequantity8");
    document.getElementById("wine-remove-button8").innerHTML = sessionStorage.getItem("wineremovebutton8");
    document.getElementById("wine-subtotal-price8").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice8");

    // Retrieve Cart Total
    document.getElementById("wine-subtotal-price").innerHTML = "R" + sessionStorage.getItem("winesubtotalprice");
    document.getElementById("wine-tax").innerHTML = "R" + sessionStorage.getItem("winetax");
    document.getElementById("wine-total-price").innerHTML = "R" + sessionStorage.getItem("winetotalprice");
    sessionStorage.setItem("logic8", "0");
    sessionStorage.setItem("proceedtocheckoutlogic", "0");
}
function proceedToCheckOut()
{
    if(sessionStorage.getItem("proceedtocheckoutlogic") == "1")
    {
        alert("Proceed To Check Out");
        removeCartItem1();
        removeCartItem2();
        removeCartItem3();
        removeCartItem4();
        removeCartItem5();
        removeCartItem6();
        removeCartItem7();
        removeCartItem8();
        document.getElementById("purchase-button").style.visibility = "collapse";
        addWineToCartOnload();
    }
    else
    {
        alert("Your Basket Is Empty!");
    }
}