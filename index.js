const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");


const app = express();
app.use(cors());
app.use(express.json());

app.get("/get",async(req,res)=>{
    const city = req.query.city;
    console.log(city);
    
    const api = "5a3e055f0cd5503c3a3653362f1a4e9c";
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${api}&units=metric`;
    try{
        response = await axios.get(url1)

        const temp = response.data.main.temp;
        const humidity = response.data.main.humidity
        console.log(temp);
        console.log(humidity);
        res.json({ temp, humidity }); 

    }
    catch (error) {
        console.error("Error fetching weather data:", error.message);
        res.status(500).json({ error: "Error fetching weather data" }); // Respond with an error status code
    }

});

app.listen(9002,()=>{console.log("Server ready at http://localhost:9002");});