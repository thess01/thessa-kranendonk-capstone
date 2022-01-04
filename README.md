To view this page on heroku: http://brews-and-bites.herokuapp.com/

# Installation

To run Brews & Bites follow the following simple steps:  
Please install node and MySQL beforehand

1. Download the Brews & Bites repo by using the cloning option found under the tab "Code:

2. Next create a new database in MySQLWorkbench named `brews_and_bites`.

3. Install server side dependencies:  
    In the terminal run `npm install`
  
4. Run migrations
   $ npm run migrate

5. Run seeds
   $ npx run seed
   
6. Set environment:  

   Rename `.env_sample` to `.env` and change placeholder values with your own.
  
   PORT=<PORT_NUMER>
   JWT_SECRET=<SECRET KEY>
  

7. Start the server:
   Enter $ `node server.js` in the terminal


#### Set up the frontend
8. Install client side dependencies:  

  Enter `cd client` in the terminal, hit enter, then run `npm install`


9. Start the React app:
    $ npm start
