ALTER TABLE `tasks` MODIFY COLUMN `priority` text NOT NULL;--> statement-breakpoint
ALTER TABLE `tasks` MODIFY COLUMN `status` text NOT NULL;--> statement-breakpoint
ALTER TABLE `tasks` MODIFY COLUMN `marked_working_by` int;--> statement-breakpoint
ALTER TABLE `tasks` MODIFY COLUMN `marked_complete_by` int;