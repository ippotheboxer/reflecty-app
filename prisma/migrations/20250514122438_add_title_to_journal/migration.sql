/*
  Warnings:

  - Added the required column `title` to the `Journal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Journal" ADD COLUMN     "title" TEXT NOT NULL;
