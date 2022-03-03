CREATE DATABASE "giphy_search_favorites";

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "img_url" VARCHAR NOT NULL,
    "img_id" VARCHAR NOT NULL,
    "category_id" INT REFERENCES "category"
);

INSERT INTO "favorites" ("name", "img_url", "img_id", "category_id")
VALUES ('MrClearOdontologia', 'https://media0.giphy.com/media/tV4JxRWQ5WNLhpaYvo/200w.gif?cid=87dbd423549ae7b1ebcc959acba48947774554bfc0b5a94b&rid=200w.gif&ct=g', 'tV4JxRWQ5WNLhpaYvo', 2);
