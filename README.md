# Title of Project
MediYantra Health Service - A suitable website to offer basic health services

## Desciption
MediYantra is a cloud-enabled, mobile-ready Express JS powered web application to help patients to gather crucial information regarding hospitals nearby, diagnostic centres in their geographic region, NGO's that accept surplus food donations and medical advice from trained doctors and specialists. The website is very easy to use even for people not well-versed with the internet, to facilitate usage among both urban and rural dwellers.

## Software Requirements
  - NodeJs
  - MongoDB
  - HTML & CSS
  - Bootstrap
  - Javascript
  - JQuery
  - Google Maps API
  - elfsight Website Widgets
  
## Process Flow
![alt text](https://github.com/darkpanda08/MediYantra-Heath-Service/blob/master/process_flow.png?raw=true "Process Flow Diagram")

## Data Flow Diagram
![alt text](https://github.com/darkpanda08/MediYantra-Heath-Service/blob/master/data_flow.png?raw=true "Data Flow Diagram")

## Installation

MediYantra requires [Node.js](https://nodejs.org/) v4+ to run.

Run the following command to clone the repository and install the dependencies and devDependencies.

```sh
$ git clone https://github.com/darkpanda08/MediYantra-Heath-Service.git
$ cd MediYantra-Heath-Service
$ npm install
```
To run in development mode...
```sh
$ npm run dev
```
To run production mode...

```sh
$ npm start
```
>If the application is being run other than on localhost, HTTPS is mandatory to use Geolocation feature.

### Extra Steps to Perform 

MediYantra is currently extended with the following tools. Instructions on how to set them up are mentioned below.

1. To setup MongoDB, get the URI for MongoDB and set it as environment variable with Key as "Mongo_URI" and Value as the URI.

2. To populate the data in MongoDB for Testing Centres, NGO's and Helpine check the data folder for sample JSON file with data.

3. Go to routes/ngo.js and uncomment from line 28-40. Then run the server and send POST request to route /ngo/add with body having data as shown in JSON file. After data is uploaded, comment the lines 28-40.

4. Go to routes/helpline.js and uncomment from line 44-62. Then run the server and send POST request to route /helpline/add with body having data as shown in JSON file. After data is uploaded, comment the lines 44-62.

5. Go to routes/search.js and uncomment from line 43-54. Then run the server and send POST request to route /search/add with body having data as shown in JSON file. After data is uploaded, comment the lines 43-54.

4. Go to elfsight.com and create 4 widgets: Click to call, Social Media links, Chats and Coronavirus Track and add the provided code into the views/dashboard.ejs in line 89 and views/layout.ejs in line 17-19.

5. Hospital registration to be done so that the details such as Beds Avialable, Total Beds and Total Doctors can be shown on Maps.

6. While registering for any hospital, find the Plus Code of that hospital from [Google Maps](https://maps.google.com) as it is mandatory for registration. 

## Team
- Vineet Ranjan : https://github.com/darkpanda08
- Siddharth Ghodasara : https://github.com/SiddharthGhodasara
- Prashanth R : https://github.com/Prashanth1999xD
- Bharath Bhaskar: https://github.com/bbharath4

## Additional Details

Youtube Link: https://youtu.be/Dr_CLm4s6WE </br>
Live Version Demo: https://mediyantra.herokuapp.com/

## Achievement
Project selected in Top 10 out of 156 submissions in [e-yantra Hackathon](https://www.e-yantra.org/).

### Future Work
- We are currently working on a integrating a delivery drone (using ROS) with the website, to deliver essential medical supplies in the event of a crisis.
- We are also considering adding a chat-bot to help the users navigate through the website and order medical essentials with ease.
