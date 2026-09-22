import { SearchIcon } from "lucide-react";
import SearchButton from "../serch-button";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <form className="w-full flex items-center justify-center">
      <div className="w-full max-w-[700px] flex gap-4 flex-col  md:flex-row px-4">
        <div className="flex border-2 h-12 border-gray-300 rounded-md items-center px-2 py-1 gap-2 w-full">
          <SearchIcon color="#a19c9c" />
          <Input
            placeholder="Buscar experiências"
            className="w-full h-8 border-0 text-2xl"
          />
        </div>
        <SearchButton />
      </div>
    </form>
  );
};

export default Search;
