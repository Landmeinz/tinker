CREATE TABLE "weeklyforms" (
	"id" SERIAL 	PRIMARY KEY,
	"user_id" int NOT NULL REFERENCES "user",
	"name"      	varchar(255),
	"complete_goal" bool,
	"present_items" bool,
	"items" 		varchar(3250),
	"ideas" 		varchar(3250),
	"research" 		varchar(3250),
	"tasks_completed" varchar(3250),
	"blockers" 		varchar(3250),
    "learned"   	varchar(3250),
    "next_goals" 	varchar(3250),
    "difficultly" 	int,
    "date"      	TIMESTAMP WITH TIME ZONE
);

INSERT INTO weeklyforms (id, user_id, name, complete_goal, present_items, items, ideas, research, tasks_completed, blockers, learned, next_goals, difficultly, date)
VALUES
    ()