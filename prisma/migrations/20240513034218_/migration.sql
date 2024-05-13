/*
  Warnings:

  - Made the column `name` on table `Buyer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `Buyer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `caption` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Seller` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `Seller` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Students` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `Students` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Buyer" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL;

-- AlterTable
ALTER TABLE "Categories" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "caption" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "Seller" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL;

-- AlterTable
ALTER TABLE "Students" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL;
