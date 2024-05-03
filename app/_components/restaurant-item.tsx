import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { formatPercent } from "../_helpers/percent";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px] space-y-3">
      <div className="relative h-[133px] w-full">
        <Image
          className="rounded-lg object-cover"
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
        />

        <div className="absolute left-2 top-2 flex items-center gap-0.5 rounded-full bg-primary px-2 py-0.5 text-white">
          <StarIcon className="fill-yellow-400 text-yellow-400" size={12} />
          <span className="text-xs font-semibold">
            {formatPercent(Number(5), 1)}
          </span>
        </div>

        <Button
          size="icon"
          className="absolute right-2 top-2 size-7 rounded-full bg-gray-700"
        >
          <HeartIcon className="fill-white" size={16} />
        </Button>
      </div>

      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>

        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <BikeIcon className="text-primary" size={12} />

            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) > 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <TimerIcon className="text-primary" size={12} />

            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
