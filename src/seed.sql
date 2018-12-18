use bamazon;

#seed data for products table
insert into products (item_id, product_name, department_name, price, stock_quantity) values (10000, 'tennis ball', 'sports', 1.50, 4);
insert into products (product_name, department_name, price, stock_quantity) values ('basketball', 'sports', 11.24, 5);
insert into products (product_name, department_name, price, stock_quantity) values ('hockey stick', 'sports', 18.99, 2);
insert into products (product_name, department_name, price, stock_quantity) values ('soccer ball', 'sports', 9.75, 6);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (11000, 'cinnamon', 'foods', 4.20, 3);
insert into products (product_name, department_name, price, stock_quantity) values ('sugar', 'foods', 6.00, 1);
insert into products (product_name, department_name, price, stock_quantity) values ('steak', 'foods', 14.99, 10);
insert into products (product_name, department_name, price, stock_quantity) values ('milk', 'foods', 6.00, 20);
insert into products (product_name, department_name, price, stock_quantity) values ('eggs', 'foods', 8.99, 16);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (12000, 'drill', 'tools', 44.25, 5);
insert into products (product_name, department_name, price, stock_quantity) values ('saw', 'tools', 15.20, 3);
insert into products (product_name, department_name, price, stock_quantity) values ('blue paint', 'tools', 17.88, 4);
insert into products (product_name, department_name, price, stock_quantity) values ('red paint', 'tools', 17.88, 2);
insert into products (product_name, department_name, price, stock_quantity) values ('gold paint', 'tools', 28.89, 1);

select * from products;

#update products set ? where id = ?