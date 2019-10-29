window.onload = function () {
    function DataTime() {
        var date = new Date(),
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            second = date.getSeconds();

        if (day < 10) day = '0' + day;
        if (hour < 10) hour = '0' + hour;
        if (min < 10) min = '0' + min;
        if (second < 10) min = '0' + second;


        document.getElementById("number").innerHTML = day + "  :  " + hour + " : " + min +" : " + second;

    }

    var timer;

    function DataTimeStart() {
        timer = setInterval(DataTime, 60);
        DataTime();


    }

    DataTimeStart();
};