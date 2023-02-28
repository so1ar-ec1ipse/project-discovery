import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <div>
      <div className="transition ease-out duration-300 w-full justify-center items-center flex gap-1 text-[#6366F1] text-sm font-bold hover:cursor-pointer hover:text-[#FAFAFA] hover:gap-3">
        <span>View All Vulnerabilities</span>
        <ChevronRightIcon width={14} />
      </div>
    </div>
  );
}
