-- CreateTable
CREATE TABLE "ProductIngredient" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductIngredient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductIngredient" ADD CONSTRAINT "ProductIngredient_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
