CREATE TABLE "to-do" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar(255),
	"tools" text
);

INSERT INTO "to-do" ("task", "tools")
VALUES 
('Unclog toilet', 'plunger'),
('Sweep kitchen', 'broom');