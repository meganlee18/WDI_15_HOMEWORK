CREATE DATABASE movies_db;

CREATE TABLE movies (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(200),
    plot VARCHAR(400),
    year VARCHAR(50),
    poster VARCHAR(400)
);

SELECT name FROM movies;
SELECT id, name FROM movies;
SELECT * FROM movies;

INSERT INTO movies (name, plot, year, poster) VALUES ('', '');

