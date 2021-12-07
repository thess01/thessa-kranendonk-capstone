# Installation

To run Brews & Bites follow the following simple steps:  
Please install node and MySQL beforehand

1. Download the Brews & Bites repo by using the cloning option found under the tab "Code:

2. Next create a new database in MySQLWorkbench named `brews_and_bites`.

3. Install server side dependencies:  
    Enter `cd server` in the terminal, hit enter, then run `npm install`
  
4. Run migrations
   $ npx knex migrate:latest

5. Run seeds
   $ npx knex seed:run
   
6. Set environment variables:  

   Rename `.env_sample` to `.env` and change placeholder values with your own.
   ```shell
   PORT=<PORT_NUMER>
   JWT_SECRET=<SECRET KEY>
   DB_HOST=<HOST ADDRESS>
   DB_USER=<YOUR DB USERNAME>
   DB_PSWD=<YOUR DB PASSWORD>
  

7. Start the server:
   $ npm start


#### Set up the frontend
8. Install client side dependencies:  

  Enter `cd client` in the terminal, hit enter, then run `npm install`


9. Start the React app:
    $ npm start
