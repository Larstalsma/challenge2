window.onload = function(){

    function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
            
        var time = h + ":" + m + ":" + s + " CEST";
        document.getElementById("main").innerHTML = time;
        //document.getElementById("NYtime").innerHTML = ;
            
        setTimeout(showTime, 1000);
    }

    function showDate(){
        var date = new Date();
        var day = date.getDate(); // 1 - 31
        var month = date.getMonth() +1; // 1 - 12
        var year = date.getFullYear();

        day = (day < 10) ? "0" + day : day;
        month = (month < 10) ? "0" + month : month;

        var fullDate = day + "/" + month + "/" + year;
        document.getElementById("date").innerHTML = fullDate;
    }

showTime();
showDate();
}