-- CreateTable
CREATE TABLE "Seller" (
    "id" TEXT NOT NULL,
    "name" VARCHAR,
    "address" VARCHAR,
    "phoneNumber" VARCHAR NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);
