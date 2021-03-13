create database pfa;

create TABLE Users (
  userID   INT(11) AUTO_INCREMENT PRIMARY KEY,
  name     VARCHAR(20) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  email    VARCHAR(250) NOT NULL UNIQUE
);

create TABLE Spendings (
  spendingID INT(11) AUTO_INCREMENT,

)