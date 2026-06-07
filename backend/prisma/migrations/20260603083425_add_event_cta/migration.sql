/*
  Warnings:

  - You are about to drop the column `buttonLink` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `buttonText` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "buttonLink",
DROP COLUMN "buttonText",
ADD COLUMN     "bookingLink" TEXT,
ADD COLUMN     "sponsorLogo" TEXT,
ADD COLUMN     "sponsorName" TEXT;
