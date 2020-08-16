# Title of Project
MediYantra Health Service - A suitable website to offer basic health services

## Desciption
MediYantra is a versatile cloud-enabled mobile-ready Express JS-powered web application designed to help people access crucial information in a medical emergency or crisis. Its salient features include quickly gathering data on hospitals with available services in the user's vicinity, fast access to locations of diagnostic centres in any specific region, details of NGOs and other organizations that are providing aid through supplies or kits and also a fully functional 24-hour medical helpline that people can use to seek assistance from trained professionals. Each of the services are elaborated on as follows: 

During a medical urgency, time is of the essence, and a person may waste valuable minutes in trying to glean information on the nearest hospital or clinic. Our website can solve this issue through the use of a highly minimalist and efficient interface specifically tailored to provide services in the shortest possible duration. On opening the website (which can be accessed both on phones and desktops), the users are greeted with four portals, each of which links to a specific service.

The first portal directly allows the user to access the hospital search function, allowing them to select a hospital in close proximity (done through the integration of Google Maps API within the database). This is, by far, the most crucial task on our website and hence is allocated the first portal. 

The second portal displays a list of diagnostic centres, sorted by location. Users can look up the closest centres to get a professional assessment of their medical condition. They may also elect to get tested for possible infections.

The third portal allows users to avail the services of NGOs either to seek essential provisions such as food or medical supplies, or to donate any surplus provisions for the aid of others.

The fourth portal enables access to a medical helpline, where users can contact doctors or physicians to receive important medical advice and guidance. The name and contact details of each person are listed in a neat and concise manner.

Our website is incredibly easy to use, specifically made to ensure maximum ergonomic function and user-friendliness. Both urban residents and rural dwellers can use this service without difficulty, maximizing its applicability and potential. This projet was made as part of a joint effort in light of the recent pandemic. We sincerely hope
our efforts do justice to the incredible zeal of individuals tirelessly working to help people during these troubled times.  


## Software Requirements
  - NodeJs
  - MongoDB
  - HTML & CSS
  - Bootstrap
  - Javascript
  - JQuery
  - Google Maps API
  - elfsight Website Widgets
  
## Process Flow Diagram
The below Process Flow Diagram is used to provide a pictorial representation of client-server interaction when the website is in use. 
Three blocks are used to represent the client, server and the data layers. The client can access the website either through a web browser or a mobile phone browser. The server ( a NodeJS web server) processes the incoming request and accesses the database to procure the required information. Upon finding the appropriate data, the database transmits this back to the server which subsequently relays the data back to the user through their browser. The database makes use of external sources as well ( such as acquiring geographical information about hospital locations). The arrows shown in the process flow diagram illustrate the above processes.

![alt text](https://github.com/darkpanda08/MediYantra-Heath-Service/blob/master/process_flow.png?raw=true "Process Flow Diagram")

## Data Flow Diagram
The Data Flow Diagram shows the retrieval of requisite information by the database.
The database segregates all the data by allocating separate categories for each of them. For instance, the contact details of medical professionals attending to the helpline are stored separately from the details of testing centres. Based on the client request processed by the server, the database accesses the corresponding category and searches for the correct information to transmit back to the server. To obtain geographical data pertaining to testing centres, the database uses the integrated Google Maps API to search for the appropriate locations.

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
