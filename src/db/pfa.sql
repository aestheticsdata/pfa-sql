create database pfa;

use pfa;

create TABLE users (
  user_id       INT(11) AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(20) NOT NULL UNIQUE,
  password      VARCHAR(60) NOT NULL,
  email         VARCHAR(250) NOT NULL UNIQUE,
  register_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  language      VARCHAR(3) DEFAULT 'en',
  base_currency VARCHAR(3) NOT NULL
);

create TABLE categories (
  category_id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(20) NOT NULL UNIQUE,
  color       VARCHAR(20) NOT NULL
);

create TABLE spendings (
  spending_id INT(11) AUTO_INCREMENT PRIMARY KEY,
  user_id     INT(11) NOT NULL,
  date        DATETIME NOT NULL,
  item_type   VARCHAR(11) NOT NULL,
  label       VARCHAR(100) NOT NULL,
  amount      DECIMAL(6,2) NOT NULL,
  category_id INT(11),
  currency    VARCHAR(3),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);