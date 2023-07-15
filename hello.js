// //import express from "express";
// //import http from "http";
// //key 526f759ddd20987fb7fc05ba06bb4821-us21

// //list id - 66aa9e730c

// const express = require("express");
// const http = require("http");
// const bodyParser =require("body-parser");
// const request = require("request");

// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended:true}));


// app.get("/" ,function (req, res){
//     res.sendFile(__dirname+ "/signup.html");

// });

// app.post("/" , function(req, res){
//     //console.log(req.body.cityName);

    
//     const firstName = req.body.fName;
// const lastName= req.body.lName;
// const email =req.body.email;

// const  data = {
//     members :[
// {
//     email_address: email,
//     status: "subscribed",
//     merge_fields :{

//         FNAME: firstName,
//         lNAME :lastName,
        
//  }

// }

//     ]
// };

// const jsonData =JSON.stringify(data);

// const url = "http://us21.api.mailchimp.com/3.0/lists/66aa9e730c";

// const options= {
//     method: "POST",
//     auth: "neha1:526f759ddd20987fb7fc05ba06bb4821-us21"
// }

//     const request = http.request(url ,options,function(response) {
// response.on("data" ,function(data){
//     console.log(JSON.parse(data));
// });
// });

// request.write(jsonData);
// request.end();

// });



// //const url ="http://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + apiKey +"&units=" + unit;


// //  http.get(url , function(response){
// // console.log(response.statusCode);

// // response.on("data" ,function(data){
// // //hexadecimal 
// // const weatherData = JSON.parse(data)
// // const temp= weatherData.main.temp
// // const weatherDescription = weatherData.weather[0].description
// // const icon = weatherData.weather[0].icon
// // const imgURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png"
// // res.write("<p>the weather is currently"  + weatherDescription +"<p>");
// // res.write("<h1>the temprature in " + query + " is " + temp + "degrees Celcius.</h1>");
// // res.write("<img src =" + imgURL+ ">");
// // res.send()
 

// // })

// // })


// // })



// app.listen(3000 ,function() {
//     console.log("Server is running on port 3000.");
// });