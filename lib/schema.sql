DROP TABLE IF EXISTS grojjItems;
DROP TABLE IF EXISTS grojjUsers;
DROP TABLE IF EXISTS grojjAddresses;

BEGIN;

CREATE TABLE grojjItems(
  item_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  condition VARCHAR NOT NULL,
  description VARCHAR,
  likes INT NOT NULL DEFAULT 0,
  url TEXT,
  sellerid TEXT NOT NULL
);

CREATE TABLE grojjUsers(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL

CREATE TABLE grojjAddresses(
  id SERIAL PRIMARY KEY,
  street VARCHAR NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL DEFAULT 'NY',
  zip VARCHAR NOT NULL,
  Latitude VARCHAR NOT NULL,
  longitude VARCHAR NOT NULL,
  sellerUname VARCHAR NOT NULL,
  sellerid TEXT NOT NULL
);

COMMIT;
