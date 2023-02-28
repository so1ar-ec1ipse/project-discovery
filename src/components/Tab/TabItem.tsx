type TabItemProps = {
  isSelected: boolean;
  text: string;
  count: number;
};

export default function TabItem({ isSelected, text, count }: TabItemProps) {
  return (
    <div className="flex flex-col align-center p-0 gap-2 h-7">
      <div className="flex flex-row justify-center align-center p-0 gap-2 h-5 font-semibold text-sm text-[#FAFAFA]">
        {text}
      </div>
    </div>
  );
}
