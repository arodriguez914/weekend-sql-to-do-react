CREATE TABLE "todos" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar(255),
);

INSERT INTO "todos" ("task")
VALUES 
('Unclog toilet'),
('Sweep kitchen');