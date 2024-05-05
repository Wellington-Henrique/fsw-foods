"use client";

import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Restaurant } from "@prisma/client";
import { searchForRestaurants } from "../_actions/search";
import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurant-item";

const Restaurants = () => {
  const searchParams = useSearchParams();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const search = searchParams.get("search");

  useEffect(() => {
    (async () => {
      if (!search) return;

      const foundRestaurants = await searchForRestaurants(search);
      setRestaurants(foundRestaurants);
    })();
  }, [search]);

  if (!search) {
    return notFound();
  }

  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">Restaurantes Encontrados</h2>

        <div className="flex flex-col gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantItem
              className="min-w-full max-w-full"
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
