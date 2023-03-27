startDate= new Date(2022, 9, 15, 19, 25);

// Anios, meses, dias, horas, minuto, segundo, milisegundo
const msIn = [31536000000,2628000000,86400000,3600000,60000,1000, 1]

function getTotalTimeMS(){
    let totalTime = Date.now() - startDate.getTime();
    return totalTime;
}

function getStandardTimeForm(){
    let times = [];
    let time = getTotalTimeMS();
    for(let i=0; i<msIn.length; i++){
        let currentTime = time / msIn[i];
        time -= (Math.floor(currentTime)*msIn[i]);
        times.push(Math.floor(currentTime));
    }

    return times
}

function getTotalForm(){
    let totalTime = Date.now() - startDate.getTime();
    let times = [];
    let Ntimes = [];
    const MsTime =   totalTime;const SecTime = totalTime/msIn[5]; const MinTime = totalTime/msIn[4]; const HourTime = totalTime/msIn[3];
    const DayTime = totalTime/msIn[2]; const MonthTime = totalTime/msIn[1]; const YearTime = totalTime/msIn[0];
    times.push(MsTime, SecTime, MinTime, HourTime, DayTime, MonthTime, YearTime);
    let i = 0
    while (i < times.length){
        let tm = times.shift();
        times.push(tm.toFixed(2));
        i+=1;
    }
    for(let i=0; i<times.length ;i++){
        Ntimes.push(Number(times[i]));
    }
    return Ntimes;
}

const timeList = getStandardTimeForm();
const totalTimeList = getTotalForm();

console.log(timeList)
console.log(totalTimeList)


let date1 = document.getElementById("TimeContainer1");
let date2 = document.getElementById("TimeContainer2");
let date3 = document.getElementById("TimeContainer3");
let date4 = document.getElementById("TimeContainer4");
let date5 = document.getElementById("TimeContainer5");
let date6 = document.getElementById("TimeContainer6");
let date7 = document.getElementById("TimeContainer7");
let date8 = document.getElementById("TimeContainer8");


date1.innerHTML = timeList[0].toLocaleString('en') + " años " + timeList[1].toLocaleString('en') + " meses " + timeList[2].toLocaleString('en') + " dias " + timeList[3].toLocaleString('en') + " horas " + timeList[4].toLocaleString('en') + " minutos " + timeList[5].toLocaleString('en') + " segundos";

date2.innerHTML = totalTimeList[0].toLocaleString('en');
date3.innerHTML = totalTimeList[1].toLocaleString('en');
date4.innerHTML = totalTimeList[2].toLocaleString('en');
date5.innerHTML = totalTimeList[3].toLocaleString('en');
date6.innerHTML = totalTimeList[4].toLocaleString('en');
date7.innerHTML = totalTimeList[5].toLocaleString('en');
date8.innerHTML = totalTimeList[6].toLocaleString('en');