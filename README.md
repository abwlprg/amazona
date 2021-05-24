# Amazona ECommerce Website
![amazona](/template/images/amazona.jpg)

# MERN: MongoDB Express React Node Website.

I needed to practice more for the position I am in the running for. I have to 
practice more MERN website development like this.

Made a MERN website.

I use MongoDB at and Node.js all the time. React is where I need to practice more since I have not used it in a while.

## Demo Website

<!-- - 👉 Heroku : [https://amazona-ecommerce-app.herokuapp.com/](https://amazona-ecommerce-app.herokuapp.com/) -->


## Technologies Used

- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Redux: Store, Reducers, Actions
- Node & Express: Web API, Body Parser, File Upload, JWT
- MongoDB: Mongoose, Aggregation
    - Aggregation operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. MongoDB provides three ways to perform aggregation: the aggregation pipeline, the map-reduce function, and single purpose aggregation methods.


- Development: ESLint, Babel, Git, Github,
- Deployment: Heroku
    - At time of deployment the Heroku deployment is still not running correctly.
    -Seeding and Heroku..fml;

## Run Locally

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

### 5. Seed Users and Products

- Run this on chrome: http://localhost:5000/api/users/seed
- It returns admin email and password
- Run this on chrome: http://localhost:5000/api/products/seed
- It creates 6 sample products

### 6. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin
