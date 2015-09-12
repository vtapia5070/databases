CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER(3), 
  username VARCHAR(25),
  room VARCHAR(25),
  message VARCHAR(500)
  /* Describe your table here.*/
  
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

