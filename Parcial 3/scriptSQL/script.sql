CREATE DATABASE peliculasDB;
USE DATABASE peliculasDB;

CREATE TABLE peliculas(
id_pelicula int(10) not null auto_increment,
titulo varchar(50) not null,
raiting int(2) not null,
duracion varchar(50) not null,
resena varchar(100) not null,
director varchar(50) not null,
clasificacion varchar(20) not null,
generos varchar(100) not null,
audio varchar(50) not null,
primary key(id_pelicula)
);

INSERT INTO peliculas (titulo, raiting, duracion, reseña, director, clasificacion, generos, audio) VALUES("Harry Potter y la piedra filosofal", 10, "153 minutos", "Harry Potter es el niño que vivio y debe enfrentar nuevas aventuras", "David Yates","PG-13","Fantasia","Español Latino");
INSERT INTO peliculas (titulo, raiting, duracion, reseña, director, clasificacion, generos, audio) VALUES("Iron Man", 10, "142 minutos", "Tony Stark es un inventor de armamento brillante...", "Jon Favreau","PG-13","Pelicula de superheroes","Español Latino");
INSERT INTO peliculas (titulo, raiting, duracion, reseña, director, clasificacion, generos, audio) VALUES("Train to Busan", 10, "160 minutos", "Un virus convierte a la gente en Zombies", "Yeon Sang-ho","NC-17","Accion","Coreano");

select *from peliculas;