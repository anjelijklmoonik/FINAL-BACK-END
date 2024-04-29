-- CreateTable
CREATE TABLE "Buyer" (
    "id" TEXT NOT NULL,
    "name" VARCHAR,
    "address" VARCHAR,
    "phoneNumber" VARCHAR NOT NULL,

    CONSTRAINT "Buyer_pkey" PRIMARY KEY ("id")
);
