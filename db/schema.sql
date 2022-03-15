DROP DATABASE IF EXISTS tech_blog;

CREATE DATABASE tech_blog;

CREATE TABLE comment (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    body MEDIUMTEXT NOT NULL,
    author_name VARCHAR(30) references user(name),
    date TIMESTAMP NOT NULL
    post_id INT UNSIGNED references post(id),
);

CREATE TABLE user (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    UNIQUE (name)
);

CREATE TABLE post (
     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    body MEDIUMTEXT NOT NULL,
    author_name VARCHAR(30) references user(name),
    date TIMESTAMP NOT NULL
);