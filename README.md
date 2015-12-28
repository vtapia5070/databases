#data-structures
A implementation of advanced data storage concepts using mySQL, SQL query, join tables, and ORMs (Sequelize).

This is a project I completed as a student at [Hack Reactor Remote Beta](http://www.hackreactor.com/remote-beta).

##Team

  - __Victoria Tapia__
  - __Corey Wolff__

## Requirements

- Node 0.12.7
- Npm 2.14.2
- MySQL 2.10.0
- Mocha 1.21.5
- Chai 1.10.0
- Express 4.13.3
- Sequelize 3.15.1

## Development

### Installing Dependencies

From within the root directory install all dependencies with the following command:
```
npm install
```
Ensure you have mySQL with the following command:
```
which mysql
```
To install mysql:
```
brew install mysql
```

### Usage

To start mySQL server:
```
mysql.server start
```
Log in to mysql server:
```
mysql -u root
```
Run Schema in directory
```
mysql -u root < server/schema.sql
```
Once your MongoDB server is running, start npm server:
```
npm start
```
To run test:
```
npm test
```
