import Filter from "../Filter";
import Tab from "../Tab";

export default function Header() {
  return (
    <div className="flex flex-row justify-between align-center py-0 px-6 gap-1 w-full h-9">
      <div className="flex w-full justify-between">
        <div className="flex flex-row align-start p-0 gap-9 h-7">
          <Tab />
        </div>
        <Filter />
      </div>
    </div>
  );
}
