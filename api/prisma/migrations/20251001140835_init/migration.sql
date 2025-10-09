/*
  Warnings:

  - Added the required column `status` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DBTaskStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'IN_REVIEW', 'READY_FOR_QA', 'DONE');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "status" "DBTaskStatus" NOT NULL;
