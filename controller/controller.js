const { ModelEventsLoad, ModelEventsFind } = require("../model/model")
const axios = require("axios");


exports.ControlEventsLoad=async (req, res) => {
    try{
        const data=await ModelEventsLoad(req.body)
        res.status(201).json(data); 
        res.status("Addition of events into CSV dataset succefull")
    }catch (err){
        console.error(err);
        res.status(500).json({ error:err}); 
    }
};

exports.ControlEventsFind = async (req, res) => {
    try {
        const { latitude, longitude, date } = req.query;
        const page = req.query.page;
        console.log(page)
        const end = new Date(date);
        end.setDate(end.getDate() + 14);
        const endDate = end.toISOString().substring(0, 10);
        
        const events = await ModelEventsFind(latitude, longitude, date, endDate, page);

        const eventsWithWeatherAndDistance = await Promise.all(events.map(async (event) => {
            const weather = await fetchWeather(event.city_name, event.date);
            const distance = await calculateDistance(latitude, longitude, event.latitude, event.longitude);

            return {
                event_name: event.event_name,
                city_name: event.city_name,
                date: event.date,
                weather,
                distance
            };
        }));

        const sortedEvents = eventsWithWeatherAndDistance.sort((a, b) => new Date(a.date) - new Date(b.date));

        const pageSize = 10;
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;
        if(page>Math.ceil(sortedEvents.length / pageSize) || page==undefined){
            const eventsForPage = "No events are present"
            const responseObject = {
                events: eventsForPage,
                page: parseInt(page),
                pageSize: pageSize,
                totalEvents: sortedEvents.length,
                totalPages: Math.ceil(sortedEvents.length / pageSize)
            };
            res.status(200).json(responseObject);
        }
        else{
            eventsForPage = sortedEvents.slice(startIndex, endIndex);
            const responseObject = {
                events: eventsForPage,
                page: parseInt(page),
                pageSize: pageSize,
                totalEvents: sortedEvents.length,
                totalPages: Math.ceil(sortedEvents.length / pageSize)
            };
            res.status(200).json(responseObject);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error OR inputs latitude,longitude and date are missing"});

    }
};


async function fetchWeather(city_name, date) {
    try {
        const response = await axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Weather?code=${process.env.WEATHER}&city=${encodeURIComponent(city_name)}&date=${date}`);
                                        
        return response.data.weather;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
}

async function calculateDistance(latitude1, longitude1, latitude2, longitude2) {
    try {
        const response = await axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Distance?code=${process.env.DISTANCE}&latitude1=${latitude1}&longitude1=${longitude1}&latitude2=${latitude2}&longitude2=${longitude2}`);
        return response.data.distance;
    } catch (error) {
        throw new Error('Failed to calculate distance');
    }
}