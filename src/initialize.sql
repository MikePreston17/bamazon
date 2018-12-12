drop database if exists bamazon;
create database bamazon;
use bamazon;

drop table if exists products;
create table products
(
	item_id int not null auto_increment,
    product_name varchar(255) default '',
    department_name varchar(150) default '',
    price float default 0.00,
    stock_quantity int not null,
    primary key (item_id)
)
