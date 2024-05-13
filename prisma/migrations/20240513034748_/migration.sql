/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "userPost" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "caption" VARCHAR NOT NULL,
    "location" VARCHAR NOT NULL,
    "phoneNumber" VARCHAR NOT NULL,
    "status" VARCHAR NOT NULL,

    CONSTRAINT "userPost_pkey" PRIMARY KEY ("id")
);
