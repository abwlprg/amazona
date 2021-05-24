# Amazona ECommerce Website
![amazona](/template/images/amazona.jpg)

# MERN: MongoDB Express React Node Website. Premise of it

I needed to practice more for the position I am in the running for. I have to practice more MERN website development like this.

Made a MERN website to look almost like the king of all Ecommerce: Amazon.

I use MongoDB at and Node.js all the time. React is where I need to practice more since I have not used it in a while. And in the beginning you said I could make the site using MongoDb instead of MYSQL.

It is not completely finished it does have the basics of a CRUD APP. 

## Demo Website IS DOWN

<!-- - 👉 Heroku : [https://amazona-ecommerce-app.herokuapp.com/](https://amazona-ecommerce-app.herokuapp.com/) -->

SITE IS DOWN FOR NOW, HEROKU CONFIG need tweaking. Going through many errors especially with AWS, GOOGLE MAPS, and a couple dependencies that I might have to use downgraded versions of.
Bu
## Technologies Used

- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Redux: Store, Reducers, Actions
- Node & Express: Web API, Body Parser, File Upload, JWT
- MongoDB: Mongoose, Aggregation
  
- Development: ESLint, Babel, Git, Github,
- Deployment: Heroku
    - At time of deployment the Heroku deployment is still not running correctly.
    -Seeding a Heroku..site is fun (sarcasm levels at max);

## Run Locally FOR NOW

### 1. Clone repo

```
$ git clone git@github.com:abwlprg/amazona.git
$ cd amazona
```
### 2. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb://localhost/amazona  
- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb+srv://your-db-connection

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```


### 5. CREAT THE API KEYS
- Creat a .env and .config file in root directory
- For .env just use these for now
//JWT
JWT_SECRET=somethingsecret
//MONGODB
MONGODB_URL=mongodb://localhost/amazona
MONGODB_URL="mongodb+srv://amazona:amazona@cluster0.gyegh.mongodb.net/amazona?retryWrites=true&w=majority"
//PAYPAL
PAYPAL_CLIENT_ID=ASHWWqxUFflxE3WnVusHxWzeiFTpZC1lMsFG54hiNByCnmax5eln3Az5hxb9UiSgiKwH-CAe7IB1ETtc
//GOOGLE MAPS
GOOGLE_API_KEY=AIzaSyBMOQX1WFEvEQ3lIMbyzSaw8AZUUJKfXZY
//AWS
accessKeyId=AKIATT24N2KUT5ASH6WF
secretAccessKey=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

- Creat a config.js file in backend directory
- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

- import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/amazona'
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || accessKeyId,
  secretAccessKey: process.env.secretAccessKey || secretAccessKey.
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMIAN,
};

### 6. Seed Users and Products

- Run this on chrome: http://localhost:5000/api/users/seed
- It returns admin email and password
- Run this on chrome: http://localhost:5000/api/products/seed
- It creates 6 sample products

### 7. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin
