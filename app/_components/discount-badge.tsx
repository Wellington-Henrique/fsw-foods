import { ArrowDownIcon } from "lucide-react";
import { formatPercent } from "../_helpers/percent";
import { Product } from "@prisma/client";

interface DiscountBadge {
  product: Pick<Product, "discountPercentage">;
}
const DiscountBadge = ({ product }: DiscountBadge) => {
  return (
    <div className="flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
      <ArrowDownIcon size={12} />
      <span className="text-xs font-semibold">
        {formatPercent(Number(product.discountPercentage))}
      </span>
    </div>
  );
};

export default DiscountBadge;
