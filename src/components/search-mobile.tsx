import DateSelection from "./date-selection";
import HourSelection from "./hour-selection";
import LocationSelection from "./location-selection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-4">
          <LocationSelection />
          <DateSelection />
          <HourSelection />
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
