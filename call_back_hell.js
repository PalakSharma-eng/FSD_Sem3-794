function GetData(dataId) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data", dataId);
        resolve("successfull");
    }, 3000);
    });
}

GetData(1)
.then((res) => {
    return GetData(2);
})
.then((res) => {
    return GetData(3);
})
.then((res) => {
    return GetData(res);
})

async function hello() {
    console.log("hello!");
}

function Api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weatherData, i found");
            resolve(200);
        }, 3000);
});
}

async function getWeatherData() {
    await Api();
    await Api();
}
getWeatherData();


