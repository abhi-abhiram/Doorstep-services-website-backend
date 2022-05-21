CREATE DATABASE doorstepservicesdb;

\c doorstepservicesdb; 

CREATE TABLE users(
    userId BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    dateOfBirth DATE NOT NULL,
    createdAt DATE NOT NULL,
    phoneNo TEXT NOT NULL,
    avatar TEXT,
    resetPasswordToken TEXT,
    resetPasswordExpire DATE
);

CREATE TABLE professionals(
    professionalId BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    dateOfBirth DATE NOT NULL,
    createdAt DATE NOT NULL,
    phoneNo TEXT NOT NULL,
    avatar TEXT,
    resetPasswordToken TEXT,
    resetPasswordExpire DATE
);

CREATE TABLE admins(
    adminId BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    dateOfBirth DATE NOT NULL,
    createdAt DATE NOT NULL,
    phoneNo TEXT NOT NULL,
    avatar TEXT,
    resetPasswordToken TEXT,
    resetPasswordExpire DATE
);

CREATE TABLE locations(
    locationId BIGSERIAL NOT NULL PRIMARY KEY,
    location TEXT NOT NULL
);

CREATE TABLE services(
    serviceId BIGSERIAL NOT NULL PRIMARY KEY,
    serviceName TEXT NOT NULL,
    price MONEY NOT NULL,
    location BIGINT NOT NULL REFERENCES locations (locationId),
    professional BIGINT NOT NULL REFERENCES professionals (professionalId),
    avatar TEXT NOT NULL
);

CREATE TABLE addresses(
    addressId BIGSERIAL NOT NULL PRIMARY KEY,
    userId BIGINT NOT NULL REFERENCES users (userId),
    address TEXT NOT NULL,
    city VARCHAR(30) NOT NULL,
    state VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    pinCode VARCHAR(20) NOT NULL
);

CREATE TABLE orders(
    orderId BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    serviceId BIGINT NOT NULL REFERENCES services (serviceId),
    userId BIGINT NOT NULL REFERENCES users (userId),
    professionalId BIGINT NOT NULL REFERENCES professionals (professionalId),
    price MONEY NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(30) NOT NULL,
    state VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    pinCode VARCHAR(20) NOT NULL,
    delivered BOOLEAN NOT NULL DEFAULT 'false',
    orderStatus VARCHAR(60) NOT NULL DEFAULT 'Processing',
    deliveredAt DATE,
    transactionId TEXT NOT NULL,
    paymentStatus VARCHAR(50) NOT NULL
);


