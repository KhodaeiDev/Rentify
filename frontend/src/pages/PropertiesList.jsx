import Navbar from "../components/Navbar";
import {
  PropertyCard,
  PropertyFilter,
  PropertySimilarSearchs,
  PropertySimilarSearchsCards,
  PropertySort,
} from "../components/PropertiesList";
import Footer from "./../components/Footer";

import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../services/property.api";

export default function PropertiesList() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["properties", { page: 1, limit: 10 }],
    queryFn: () => getProperties({ page: 1, limit: 10 }),
    staleTime: 60_000,
    retry: 1,
  });

  const items = data?.data?.items ?? data?.items ?? [];
  const total = data?.data?.total ?? data?.total ?? 0;

  return (
    <div>
      <div className="relative h-20 top-10 bg-white rounded-2xl mx-28 my-auto mb-12">
        <div className="absolute top-[10%] w-full">
          <Navbar textColor="text-black" />
        </div>
      </div>

      <PropertyFilter />
      <PropertySort />

      {isLoading && <div className="p-4">Loading...</div>}

      {isError && (
        <div className="p-4">
          <p className="mb-3">مشکلی در دریافت لیست ملک‌ها پیش آمد.</p>
          <button
            className="px-4 py-2 rounded-lg bg-black text-white"
            onClick={() => refetch()}
          >
            تلاش مجدد
          </button>
        </div>
      )}

      {!isLoading && !isError && total === 0 && (
        <div className="p-4">
          <p>فعلاً ملکی برای نمایش وجود ندارد.</p>
        </div>
      )}

      <PropertyCard items={items} />

      <PropertySimilarSearchs />
      <PropertySimilarSearchsCards />
      <Footer />
    </div>
  );
}
