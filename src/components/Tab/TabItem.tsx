type TabItemProps = {
  isSelected: boolean;
  text: string;
  count: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<any>>;
};

export default function TabItem({
  isSelected,
  text,
  count,
  setSelectedTab,
}: TabItemProps) {
  return (
    <div
      className={`transition ease-in-out duration-300 flex flex-col align-center p-0 gap-2 h-7 cursor-pointer ${
        isSelected ? "text-[#FAFAFA]" : "text-[#A1A1AA]"
      } hover:text-[#FAFAFA]`}
      onClick={() => {
        setSelectedTab(text);
      }}
    >
      <div className="flex container">
        <div className="flex text_label flex-row justify-center align-center p-0 gap-2 h-5 font-semibold text-sm">
          {text}
        </div>
        <div className="w-[24px] text_count h-[20px] border-[1px] border-[#3F3F46] bg-[#27272A] rounded-[4px] ml-[8px] text-[12px] text-center">
          {count}
        </div>
      </div>
      <div
        className={`transition ease-in-out duration-300 flex w-full min-h-[2px] bg-[#6366F1] rounded-[1px] ${
          isSelected ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
}
