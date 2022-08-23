create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactnumber varchar(30),
    email varchar(100),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
);


insert into user (name, contactnumber, email, password, status, role) values ('Admin', '123456789', 'admin@gmail.com', 'admin', 'true', 'admin');