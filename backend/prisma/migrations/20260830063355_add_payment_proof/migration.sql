-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "paymentProof" TEXT,
ADD COLUMN     "paymentProofUploadedAt" TIMESTAMP(3);
