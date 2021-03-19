create database pfa;

use pfa;

create TABLE users (
  user_id       INT(11) AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(20) NOT NULL,
  password      VARCHAR(60) NOT NULL,
  email         VARCHAR(250) NOT NULL UNIQUE,
  register_date DATETIME NOT NULL,
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
  date        DATE NOT NULL,
  item_type   VARCHAR(11) NOT NULL,
  label       VARCHAR(100) NOT NULL,
  amount      DECIMAL(6,2) NOT NULL,
  category_id INT(11),
  currency    VARCHAR(3),
  -- FOREIGN KEY (user_id) REFERENCES users(user_id),
  -- FOREIGN KEY (category_id) REFERENCES categories(category_id)
);


insert into users (name, password, email, register_date, base_currency) VALUES
('joe', 'coolpassw0rd!', 'joe.cool@eat.com', '2021-03-14', 'EUR'),
('julia', 'juliapassword+', 'julia@dfh.io', '2021-03-14', 'EUR'),
('vania', 'vaniapassword&', 'vania@dfh.io', '2021-03-14', 'USD');

insert into spendings (user_id, date, item_type, label, amount, currency) VALUES (1, '2021-03-13', 'spending', 'carrefour', '3.45', 'EUR');
insert into spendings (user_id, date, item_type, label, amount, currency) VALUES (1, '2021-03-11', 'spending', 'monoprix', '14.20', 'EUR');
insert into spendings (user_id, date, item_type, label, amount, currency) VALUES (2, '2021-03-09', 'spending', 'coiffeur', '30', 'EUR');
insert into spendings (user_id, date, item_type, label, amount, currency) VALUES (2, '2021-03-14', 'spending', 'leroy merlin', '127', 'EUR');
insert into spendings (user_id, date, item_type, label, amount, currency) VALUES (3, '2021-03-14', 'spending', 'carte son', '231.56', 'EUR');
insert into spendings (user_id, date, item_type, label, amount, currency) VALUES (3, '2021-03-15', 'spending', 'monoprix', '42.9', 'EUR');
insert into spendings (user_id, date, item_type, label, amount, currency) VALUES (3, '2021-03-15', 'spending', 'pharmacie', '7', 'EUR');
insert into spendings (user_id, date, item_type, label, amount, currency) VALUES (3, '2021-03-15', 'spending', 'franprix', '6.5', 'EUR');

insert into categories (name, color) VALUES ('alimentation', "#327fa8");

update spendings set category_id = 1 where user_id = 1;