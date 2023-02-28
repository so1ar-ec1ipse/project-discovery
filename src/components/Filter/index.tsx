import {
  ChevronUpDownIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Filter = () => {
  const [status, setStatus] = useState(0);

  return (
    <div
      className="flex w-[78px] h-[36px] rounded-[4px] bg-[#18181B] border-[1px] border-[#27272A] p-2 justify-between items-center hover:cursor-pointer"
      onClick={() => setStatus((status + 1) % 3)}
    >
      <span className="text-[#A1A1AA] text-sm">Filter</span>
      <div className="flex justify-center w-4">
        {!status ? (
          <ChevronUpDownIcon width={16} color="#A1A1AA" />
        ) : status === 1 ? (
          <ChevronDownIcon width={10} color="#A1A1AA" />
        ) : (
          <ChevronUpIcon width={10} color="#A1A1AA" />
        )}
      </div>
    </div>
  );
};

export default Filter;
