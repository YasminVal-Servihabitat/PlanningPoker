-- CreateTable
CREATE TABLE "Sala" (
    "id" TEXT NOT NULL,
    "hostName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);
