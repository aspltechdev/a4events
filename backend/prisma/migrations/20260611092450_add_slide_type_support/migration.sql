/*
  Warnings:

  - Made the column `image` on table `HeroSlide` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "HeroSlide" ADD COLUMN     "eventId" INTEGER,
ADD COLUMN     "productId" INTEGER,
ADD COLUMN     "slideType" TEXT NOT NULL DEFAULT 'custom',
ALTER COLUMN "subtitle" DROP NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "order" SET DEFAULT 1;
