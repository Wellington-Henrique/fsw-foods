import { db } from "@/app/_lib/prima";
import { notFound } from "next/navigation";
import ProductImage from "../_components/product-image";
import ProductDetails from "../_components/products-details";

interface ProductProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });

  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) return notFound();

  return (
    <div>
      <ProductImage product={product} />
      <ProductDetails product={product} complementaryProducts={juices} />
    </div>
  );
};

export default ProductPage;
