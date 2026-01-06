import { Link } from "react-router-dom";

const PLACEHOLDER_IMAGE = "/src/assets/icons/top-week/villa-house-1.png";

function fmt(n) {
  if (n === null || n === undefined || Number.isNaN(Number(n))) return null;
  return new Intl.NumberFormat("fa-IR").format(Number(n));
}

function getItemId(item) {
  return item?.id ?? item?._id ?? item?.code ?? null;
}

function getTypeLabel(item) {
  return item?.unitType ?? item?.type ?? "ملک";
}

function getBadgeClass(label) {
  if (label?.includes("آپارتمان")) return "bg-success";
  if (label?.includes("ویلا")) return "bg-primary-shade-2";
  return "bg-amber-600";
}

export default function PropertyCard({ items }) {
  const hasItems = Array.isArray(items) && items.length > 0;

  if (Array.isArray(items) && !hasItems) return null;

  const dataToRender = hasItems ? items : [
    {
      id: "demo-1",
      images: [PLACEHOLDER_IMAGE],
      unitType: "خانه ویلایی",
      city: "تهران",
      area: "الهیه",
      title: "۴۵۰ متری ۳ خوابه استخردار",
      deposit: 4000000000,
      rent: 50000000,
    },
    {
      id: "demo-2",
      images: [PLACEHOLDER_IMAGE],
      unitType: "آپارتمان",
      city: "تهران",
      area: "الهیه",
      title: "۴۵۰ متری ۳ خوابه استخردار",
      deposit: 4000000000,
      rent: 50000000,
    },
    {
      id: "demo-3",
      images: [PLACEHOLDER_IMAGE],
      unitType: "ویلا",
      city: "تهران",
      area: "الهیه",
      title: "۴۵۰ متری ۳ خوابه استخردار",
      deposit: 4000000000,
      rent: 50000000,
    },
    {
      id: "demo-4",
      images: [PLACEHOLDER_IMAGE],
      unitType: "خانه ویلایی",
      city: "تهران",
      area: "الهیه",
      title: "۴۵۰ متری ۳ خوابه استخردار",
      deposit: 4000000000,
      rent: 50000000,
    },
  ];

  return (
    <div className="mx-14 md:mx-28 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
        {dataToRender.map((item, idx) => {
          const id = getItemId(item);
          const label = getTypeLabel(item);
          const badgeClass = getBadgeClass(label);

          const img =
            (Array.isArray(item?.images) && item.images[0]) ||
            PLACEHOLDER_IMAGE;

          const cityArea = `${item?.city ?? "—"}-${item?.area ?? "—"}`;
          const title = item?.title ?? "—";

          const deposit = fmt(item?.deposit);
          const rent = fmt(item?.rent);

          const CardInner = (
            <div className="flex flex-col bg-white overflow-hidden rounded-xl">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={img}
                  alt="property"
                  className="w-full h-52 object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute top-3 right-3 w-6 h-6 bg-neutral-tint-3 rounded-full flex justify-center items-center">
                  <img
                    src="/src/assets/icons/heart-1.svg"
                    alt="like"
                    className="w-3 h-3 cursor-pointer"
                  />
                </div>
              </div>

              <div className="p-4 cursor-pointer">
                <div className="flex mb-3">
                  <div
                    className={`w-20 h-7 ${badgeClass} rounded-2xl flex justify-center items-center`}
                  >
                    <p className="text-body-xxs px-2 py-1 text-white truncate">
                      {label}
                    </p>
                  </div>

                  <div className="flex justify-center items-center mr-2">
                    <img
                      src="/src/assets/icons/location-point.svg"
                      className="w-3 h-3 pl-1"
                      alt="loc"
                    />
                    <p className="text-caption-md text-neutral-tint-3">
                      {cityArea}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-body-xxs text-neutral-tint-1 mb-3">
                    {title}
                  </p>
                </div>

                <div className="flex justify-between items-center text-body-3xs bg-neutral-tint-6 rounded-lg gap-x-0.5">
                  <div className="flex my-1 mr-1">
                    <p className="py-1 pl-1">رهن</p>
                    <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                      <p>{deposit ?? "—"}</p>
                      <img src="/src/assets/icons/toman.svg" alt="toman" />
                    </div>
                  </div>

                  <div className="flex my-1 ml-1">
                    <p className="py-1 pl-1">اجاره</p>
                    <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                      <p>{rent ?? "—"}</p>
                      <img src="/src/assets/icons/toman.svg" alt="toman" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );

          if (!id || String(id).startsWith("demo-")) {
            return <div key={id ?? idx}>{CardInner}</div>;
          }

          return (
            <Link key={id} to={`/property/${id}`} className="block">
              {CardInner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
