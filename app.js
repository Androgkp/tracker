const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(request, respond){
    respond.sendFile(__dirname+"/index.html");
});

app.post("/", function(request, respond){
    const url="https://api.covid19india.org/data.json";

    https.get(url, function(res){
        res.on("data", function(data){
            const trackerData=JSON.parse(data);
            const demo=trackerData.cases_time_series;
            console.log(demo);
        });
    });


});


app.listen(3000, function(){
    console.log("Server started at port 3000");
});