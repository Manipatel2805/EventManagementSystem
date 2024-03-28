# Event Management System

## Overview
The Event Management System is a web application designed to handle event data and provide functionalities for adding events and finding events based on user input.

## Installation and Setup
### Clone the Repository:
```
git clone https://github.com/Manipatel2805/EventManagementSystem_By_Nodejs
```
### Navigate to the Project Directory:
```
cd EventManagementSystem
```
### Install Dependencies:
```
npm install
```
### Run the Application:
```
nodemon index.js
```
## Project Structure
src/: Contains the source code.
index.js: Main file.
controller/: User controller file.
model/: User model file.
routes/: User routes file.
database/: User database file.
## Usage
Interact with the system using Postman with different HTTP methods:

### Post for Data creation API:

Endpoint: http://localhost:3002/events/add
Description: Allows addition of events into the system using details provided in the CSV database.
#### Get for Event Finder API:

Endpoint: http://localhost:3002/events/find?latitude=40.7128&longitude=-74.0060&date=2024-03-15&page=1
Description: Returns events occurring within the next 14 days from the specified date. The finder accepts the user's latitude, longitude, and a date.
Response: Sorted by earliest event after the specified date, with a page size of 10. Each event includes event name, city, date, weather, and distance from the user's location.
## Dependencies
express
mysql
axios
dotenv
nodemon
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Support
For support or contributions, please create GitHub issues or contact via email.

## Video File
Download the controller.js file from the Visual Studio Code recording here below.

[controller.js - EventManagement - Visual Studio Code 2024-03-28 19-11-12.zip](https://github.com/Manipatel2805/EventManagementSystem_By_Nodejs/files/14793457/controller.js.-.EventManagement.-.Visual.Studio.Code.2024-03-28.19-11-12.zip)
