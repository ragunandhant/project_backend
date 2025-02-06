ALTER TABLE "entries" RENAME COLUMN "name" TO "name2";--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "name1" text NOT NULL;--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "cartno" text NOT NULL;