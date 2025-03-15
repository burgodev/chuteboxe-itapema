import { getInitials } from "../../../utils/utils";

// Should come from API
const currentUser = {
  id: "1",
  name: "John Doe",
};

const HeaderNav = () => {
  return (
    <div className="flex justify-end w-full md:justify-between">
      <nav className="items-center hidden space-x-6 text-sm text-white md:flex">
        <a href="#" className="font-semibold">
          Home
        </a>
        {/* <a href="#" className="hover:text-gray-400">
          TV Shows
        </a>
        <a href="#" className="hover:text-gray-400">
          Movies
        </a>
        <a href="#" className="hover:text-gray-400">
          New & Popular
        </a>
        <a href="#" className="hover:text-gray-400">
          My List
        </a>
        <a href="#" className="hover:text-gray-400">
          Browse by Languages
        </a> */}
      </nav>
      {/* <div className="flex items-center justify-center text-xl text-white rounded-full cursor-pointer w-14 h-14 bg-dark">
        {getInitials(currentUser.name)}
      </div> */}
    </div>
  );
};

export default HeaderNav;
