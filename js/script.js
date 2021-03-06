var offSet = 0;

function showTime(){
    var date = new Date(Date.now() + offSet * 3600000);
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
        
    var time = h + ":" + m + ":" + s + " CEST";
    document.getElementById("main").innerHTML = time;
    background();
    setTimeout(showTime, 1000);
}

function showDate(){
    var date = new Date(Date.now() + offSet * 3600000);
    var day = date.getDate(); // 1 - 31
    var month = date.getMonth() +1; // 1 - 12
    var year = date.getFullYear();

    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    var fullDate = day + "/" + month + "/" + year;
    document.getElementById("date").innerHTML = fullDate;
}

function background() {
    var now = new Date(Date.now() + offSet * 3600000);
    var hours = now.getHours();

    //06:00 - 10:59 MORNING
    if (hours > 5 && hours < 11){
        TweenMax.to('body', 1, {backgroundImage: 'url(images/morning.svg)', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'});
        TweenMax.to('#gridContainer',1,{color: '#534b6d'});
        //document.write ('<body style="background-image: url(images/morning.svg); background-position: center center; background-repeat: no-repeat; background-attachment: fixed;"> <div style="color: #534b6d;">');
    }
    //11:00 - 15:59 DAY
    else if (hours > 10 && hours < 16){
        TweenMax.to('body', 1, {backgroundImage: 'url(images/day.svg)', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'});
        TweenMax.to('#gridContainer',1,{color: '#2b5260'});
    }
    //16:00 - 19:59 AFTERNOON
    else if (hours > 15 && hours < 20){
        TweenMax.to('body', 1, {backgroundImage: 'url(images/afternoon.svg)', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'});
        TweenMax.to('#gridContainer',1,{color: '#751d08'});
    }
    //20:00 - 23:59 EVENING
    else if (hours > 19 && hours < 24){
        TweenMax.to('body', 1, {backgroundImage: 'url(images/evening.svg)', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'});
        TweenMax.to('#gridContainer',1,{color: '#a2aa52'});
    }
    //00:00 - 05:59 NIGHT
    else {
        TweenMax.to('body', 1, {backgroundImage: 'url(images/night.svg)', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'});
        TweenMax.to('#gridContainer',1,{color: '#ffffff'});
    }
}


window.onload = function() {
TweenMax.from("#main", 1, { ease: Back.easeInOut.config(1.7), y: -500, autoAlpha: 0 });
TweenMax.from("#date", 1, { ease: Back.easeInOut.config(1.7), y: -200, delay: 0.2, autoAlpha: 0});
    showTime();
    showDate();
    background();
};
