-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "dataAcknowledgement" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deliveryCharge" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "deliveryChargeRequired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deliveryOption" TEXT NOT NULL DEFAULT 'normal';
