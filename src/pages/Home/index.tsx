import Tab from "../../components/Tab/Tab";
import MyTable from "../../components/Table";

const data = [
  {
    name: "a",
    age: 20,
    address: "dfawefd",
  },
  {
    name: "b",
    age: 22,
    address: "asd",
  },
];

export default function HomePage() {
  return (
    <div className="w-screen h-screen box-border p-4 bg-black text-white">
      <div className="w-full h-full box-border flex flex-col justify-start align-center py-6 px-0 gap-6 border-solid border border-[#27272A] rounded-[4px]">
        <div className="flex flex-row justify-between align-center py-0 px-6 gap-1 w-full h-9">
          <div className="flex flex-row align-start p-0 gap-8 h-7">
            <Tab />
          </div>
        </div>
        <MyTable data={data} />
      </div>
    </div>
  );
}
