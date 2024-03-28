const con = require("../database/database");

exports.ModelEventsLoad = (data) => {
    return new Promise((resolve, reject) => {
        const { event_name, city_name, date, time, latitude, longitude } = data;
        if (!event_name || !city_name || !date || !time || !latitude || !longitude) {
            const missingFields = [];
            if (!event_name) missingFields.push('event_name');
            if (!city_name) missingFields.push('city_name');
            if (!date) missingFields.push('date');
            if (!time) missingFields.push('time');
            if (!latitude) missingFields.push('latitude');
            if (!longitude) missingFields.push('longitude');

            const errorMessage = `Missing fields: ${missingFields.join(', ')}`;
            return reject(errorMessage);
        }
        const sqlCheckDuplicate = 'SELECT * FROM eventsdata WHERE event_name = ? AND city_name = ? AND date = ? AND time = ? AND latitude = ? AND longitude = ?';
        con.query(sqlCheckDuplicate, [event_name, city_name, date, time, latitude, longitude], (err, rows) => {
            if (err) {
                reject(err);
            } else if (rows.length > 0) {
                reject('Duplicate entry: This event already exists');
            } else {
                const sqlquery = 'INSERT INTO eventsdata (event_name, city_name, date, time, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)';
                con.query(sqlquery, [event_name, city_name, date, time, latitude, longitude], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ message: "Addition of events into CSV dataset successfully" });
                    }
                });
            }
        });
    });
};




exports.ModelEventsFind = (latitude, longitude, date, endDate,page) => {
    return new Promise((resolve, reject) => {
    
        const sql = "SELECT * FROM eventsdata WHERE date BETWEEN ? AND ?;";
        con.query(sql, [date, endDate,page], async (err, results) => {
            if (err) {
                reject(err);
            } else {
                return resolve(results)
            }
        });
    });
};
