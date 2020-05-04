use moviesindoxxi;
select * from movies;
select * from categories;
select * from movcat;
select m.nama as 'Nama Movie', c.nama as 'Nama Category' from movcat mc join movies m on mc.idmovie = m.id join categories c on c.id = mc.idcategory;



use sakila;
select * from actor order by actor_id desc limit 0,200; -- get data (sort from last)
insert into actor (first_name, last_name, last_update) values ('Andi', 'Susilo', '2006-02-15 04:34:33'); -- add data
update actor set first_name = 'JOKO', last_name = 'WIDODO' where actor_id = 201; -- edit data
delete from actor where actor_id = 201; -- delete data
select * from film;
select film_id, title, description, release_year, length, rental_duration from film where length > 120 and rental_duration = 3 and rental_duration < 4; -- AND, OR, NOT

-- language and film join
SELECT film_id, title, description, f.language_id, l.name FROM film f JOIN language l ON f.language_id = l.language_id;

-- category and film join
SELECT f.title AS 'Nama Film', c.name AS 'Nama Kategori', c.category_id as 'Id Kategori'
FROM film_category fc 
JOIN film f ON f.film_id = fc.film_id 
JOIN category c ON c.category_id = fc.category_id;

-- customer_id, first_name, last_name, address_id, address, district, city_name, country_name
SELECT 
	a.address_id, 
    a.district, 
    ci.city, 
    co.country as country
FROM address a
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

select 
	cs.customer_id, 
    cs.first_name, 
    cs.last_name, 
    a.address_id, 
    a.address, 
    a.district, 
    ci.city as 'cityName', 
    c.country as 'countryName' 
FROM address a
join city ci on ci.city_id= a.city_id
join country c on c.country_id=ci.country_id
join customer cs on cs.address_id = a.address_id;

SELECT 
	customer_id,
    first_name,
    last_name,
    address,
    district,
    city,
    country
FROM address a
JOIN city c ON a.city_id = c.city_id
join country co ON co.country_id = c.country_id
LEFT JOIN customer cu ON cu.address_id = a.address_id;

SELECT inventory_id, f.title, address
FROM inventory i
JOIN film f ON i.film_id = f.film_id
JOIN store s ON s.store_id = i.store_id
JOIN address a ON a.address_id = s.store_id;

SELECT 
	inventory_id,
    f.title,
    address,
    COUNT(f.title) AS stock
FROM inventory i
LEFT JOIN store s ON s.store_id = i.store_id
LEFT JOIN address a ON a.address_id = s.address_id
LEFT JOIN film f ON i.film_id = f.film_id
WHERE f.film_id = 1
GROUP BY address;