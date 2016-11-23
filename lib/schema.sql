DROP TABLE IF EXISTS grojjitems;
DROP TABLE IF EXISTS grojjusers;
DROP TABLE IF EXISTS grojjaddresses;

BEGIN;

CREATE TABLE grojjitems(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  condition VARCHAR NOT NULL,
  likes INT NOT NULL DEFAULT 0,
  url TEXT,
  sellerid TEXT NOT NULL
);

CREATE TABLE grojjusers(
  sellerid SERIAL PRIMARY KEY,
  sellerUname VARCHAR NOT NULL
);

CREATE TABLE grojjaddresses(
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
