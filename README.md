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
# Handwriting OCR
The project tries to create software for recognition of a handwritten text from photos (also for Czech language). It uses computer vision and machine learning. And it experiments with different approaches to the problem. It started as a school project which I got a chance to present on Intel ISEF 2018.

<p align="center"><img src ="doc/imgs/poster.png?raw=true" height="340" alt="Sublime's custom image" /></p>

## Program Structure
Proces of recognition is divided into 4 steps. The initial input is a photo of page with text.

1. Detection of page and removal of background
2. Detection and separation of words
3. Normalization of words
4. Separation and recognition of characters (recognition of words)

Main files combining all the steps are [OCR.ipynb](notebooks/OCR.ipynb) or [OCR-Evaluator.ipynb](notebooks/ocr_evaluator.ipynb). Naming of files goes by step representing - name of machine learning model.

## Getting Started
### 1. Clone the repository
```
git clone https://github.com/Breta01/handwriting-ocr.git
```
After downloading the repo, you have to download the datasets and models (for more info look into [data](data/) and [models](models/) folders).

### 2. Requirements
The project is created using Python 3.6 with Jupyter Notebook. I recommend using Anaconda. If you have it, you can run the installation as:
```
conda create --name ocr-env --file environment.yml
conda activate ocr-env
```
Main libraries (all required libraries are in [environment.yml](environment.yml)):
* Numpy (1.13)
* Tensorflow (1.4)
* OpenCV (3.1)
* Pandas (0.21)
* Matplotlib (2.1)

### Run
With all required libraries installed and cloned repo, run `jupyter notebook` in the directory of the project. Then you can work on the particular notebook.

## Contributing
Best way how to get involved is through creating [GitHub issues](https://github.com/Breta01/handwriting-ocr/issues) or solving one! If there aren't any issues you can contact me directly on email.

## License
**MIT**

## Support the project
If this project helped you or you want to support quick answers to questions and issues. Or you just think it is an interesting project. Please consider a small donation.

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://paypal.me/bretahajek/2)
