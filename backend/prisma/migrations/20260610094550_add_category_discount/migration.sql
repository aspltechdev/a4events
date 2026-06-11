-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" TEXT,
ADD COLUMN     "discountPercent" INTEGER NOT NULL DEFAULT 0;
