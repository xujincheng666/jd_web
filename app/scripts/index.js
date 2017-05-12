var limit_time;
if(window.name==""){//查看是否已有记录的时间
    limit_time=6000;//设置结束时间，单位秒
}else{
    limit_time=window.name;
}
function timeDown(){
    if(limit_time>=0){
        var day=Math.floor(limit_time/60/60/24); /*划分出时分秒*/
        var hour=Math.floor(limit_time/60/60%24);
        var minutes=Math.floor(limit_time/60%60);
        var  seconds=Math.floor(limit_time%60);
        $("#t_day").html(day+"天"); /*写到页面中*/
        $("#t_hour").html(hour+"时");
        $("#t_minute").html(minutes+"分");
        $("#t_second").html(seconds+"秒");
        if(limit_time==10){
            alert("提醒，还有10秒结束");
        }
        --limit_time;
        window.name=limit_time;//记录当前时间。
    }
    else{clearInterval(timer);
        alert("时间到！活动结束");
    }
}
timer=setInterval("timeDown()",1000);//设置定时器，1秒钟执行一次timeDown()函数；
