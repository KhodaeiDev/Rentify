import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PropertyGallery } from "../components/propertyDetail";
import OwnerSummaryCard from "../components/PropertyDetail/Main/OwnerSummaryCard";
import PropertyMainInfo from "../components/PropertyDetail/Main/PropertyMainInfo";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../services/property.api";

export default function PropertyDetail() {
  const { id } = useParams();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["property", id],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
    retry: 1,
    staleTime: 60_000,
  });

  const property = data?.data ?? data;

  return (
    <div>
      <div className="relative h-20 top-10 bg-white rounded-2xl mx-28 my-auto mb-12">
        <div className="absolute top-[10%] w-full">
          <Navbar textColor="text-black" />
        </div>
      </div>

      {isLoading && <div className="p-4">Loading...</div>}

      {isError && (
        <div className="p-4">
          <p className="mb-3">مشکلی در دریافت اطلاعات ملک پیش آمد.</p>
          <button
            className="px-4 py-2 rounded-lg bg-black text-white"
            onClick={() => refetch()}
          >
            تلاش مجدد
          </button>
        </div>
      )}

      {!isLoading && !isError && (
        <>
          <PropertyGallery images={property?.images ?? property?.gallery} />

          <section className="w-full mx-auto bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <PropertyMainInfo property={property} />
              </div>
              <div className="md:col-span-1">
                <OwnerSummaryCard owner={property?.owner ?? property?.user} />
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
