DROP TABLE IF EXISTS grojjstorefronts;

BEGIN;

-- CREATE TABLE grojjstorefronts (
--   id SERIAL PRIMARY KEY,
--   address TEXT NOT NULL,
--   borough TEXT NOT NULL,
--   zipcode TEXT NOT NULL,
--   sellername VARCHAR NOT NULL,
--   sellerid TEXT NOT NULL
-- );

CREATE TABLE grojjitems(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  condition VARCHAR NOT NULL,
  likes INT NOT NULL DEFAULT 0,
  url TEXT,
  sellerid TEXT NOT NULL
);

-- sellername, sellerid

COMMIT;
