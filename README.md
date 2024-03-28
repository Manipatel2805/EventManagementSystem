# EventManagementSystem
Clone the Repository: git clone https://github.com/Manipatel2805/EventManagementSystem_By_Nodejs.

Navigate to the Project Directory: cd EventManagementSystem.

Install Dependencies: npm install ___.

Run the Application: nodemon index.js.

Project Structure src/: Contains the source code. index/:main file. controller/:user.controller file. model/: user.model file. routes/:user routes file database/:user database file.

Usage : Give input by the user through the "Postman" with different http methods like:
1.Post for Data creation API.
2.Get for Event Finder API.
After completing the request methods check mysql database. So the given input is showed in table format.

First API: Post http://localhost:3002/events/add
Second API: Get http://localhost:3002/events/find?latitude=40.7128&longitude=-74.0060&date=2024-03-15&page=1

First api is allows for the addition of events into your system using the details provided in the CSV database.
Second Api is for return events occurring within the next 14 days from the specified date. So the finder would accept the user's latitude, longitude and a date.

At the last : The response shown in sorted by the earliest event after the specified date, with a page size of 10.
Each event in the response should include the event name, city, date, weather, and the distance from the user's location.

Dependencies :express mysql axios dotenv nodemon.

License This project is licensed under the MIT License - see the LICENSE file for details. Make sure to customize the content based on your specific project details.

VIDEO FILE:
[controller.js - EventManagement - Visual Studio Code 2024-03-28 19-11-12.zip](https://github.com/Manipatel2805/EventManagementSystem_By_Nodejs/files/14790490/controller.js.-.EventManagement.-.Visual.Studio.Code.2024-03-28.19-11-12.zip)
