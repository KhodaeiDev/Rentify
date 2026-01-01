import { IoCallOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";

export default function OwnerSummaryCard({ owner }) {
  const name = owner?.name ?? owner?.fullName ?? "علی میرحسینی";
  const agency = owner?.agency ?? owner?.company ?? "املاک مبین";

  return (
    <div className="p-6 border border-neutral-tint-4 rounded-xl">
      <div className="mt-6 flex justify-center items-center gap-x-3 mb-10">
        <img src="/src/assets/icons/user.svg" alt="user-icon" />
        <div>
          <p className="heading-h6 text-neutral-tint-1">{name}</p>
          <p className="text-body-1xs text-neutral-tint-3">{agency}</p>
        </div>
      </div>
      <div className="flex justify-around items-center gap-x-2 mb-2">
        <div className="flex items-center justify-center border border-neutral-tint-4 w-full text-primary gap-x-1 px-12 py-2.5 rounded-lg cursor-pointer hover:bg-primary hover:text-white duration-300 text-btn-s">
          <IoCallOutline />
          <p>تماس</p>
        </div>
        <div className="flex items-center justify-center w-full border border-neutral-tint-4 text-primary gap-x-1 px-12 py-2.5 rounded-lg cursor-pointer hover:bg-primary hover:text-white duration-300 text-btn-s">
          <TbMessages />
          <p>پیام</p>
        </div>
      </div>
      <button className="text-btn-md bg-primary text-white w-full rounded-lg px-4 py-3.5 cursor-pointer">
        درخواست بازدید
      </button>
    </div>
  );
}
