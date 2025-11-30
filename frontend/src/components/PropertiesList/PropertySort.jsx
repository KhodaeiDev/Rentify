import { useState } from "react";
import PropertySortHandel from "./PropertySortHandle";

export default function PropertySort() {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <div className="pt-10 mx-28">
      <p className="heading-h3 mb-10">رهن و اجاره آپارتمان در تهران</p>
      <PropertySortHandel value={sortBy} onValueChange={setSortBy} />
    </div>
  );
}
