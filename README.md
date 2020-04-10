## Title of Project
MediYantra - A suitable website to offer basic health services

## Desciption
MediYantra is a cloud-enabled, mobile-ready Express JS powered web application to help people .

## Software Requirements
  - NodeJs
  - MongoBD
  - MySQL
  - HTML & CSS
  - Google Maps API
  - elfsight Website Widgets
  
## Process Flow

## Data Flow Diagram

## Installation

MediYantra requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/darkpanda08/MediYantra-Heath-Service.git
$ cd MediYantra-Heath-Service
$ npm install
$ npm run start
```
For development environments...
```sh
$ npm run dev
```
For production environments...

```sh
$ npm run start
```

### Extra Steps to Perform 

MediYantra is currently extended with the following tools. Instructions on how to set them up are mentioned below.

1) To setup MongoDB, get the URI for MongoDB and paste it in config/keys.js file inside the quotes on line 2.

2) To setup MySQL, Create a database and provide the connection details as envronment varibales as below mentioned:
DB_host : Hostname
DB_user : Username
DB_pass : Password
DB_name : Database Name

3) Create three tables as below mentioned in the above created database.
a. helpline_details : With columns id, uid, first_name, last_name, qualification, speciality, hospital, location, email and telephone.
b. ngo_details: With columns id, name, website and phone 
c. testing_centres: With columns id, state and name

4) Go to elfsight.com and create 4 widgets: Click to call, Social Media links, Chats and Coronavirus Track and add the provided code into the views/dashboard.ejs in line 89 and views/layout.ejs in line 17-19.


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

