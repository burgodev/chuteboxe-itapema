import React, { memo } from "react";
import { Tab } from "./types";

interface MovieTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const MovieTabs: React.FC<MovieTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="mb-4">
      <button
        role="tab"
        aria-selected={activeTab === "details"}
        className={`text-lg px-4 py-2 mr-2 ${
          activeTab === "details"
            ? "text-white border-b-2 border-white"
            : "text-[#808080] border-b-2 border-transparent"
        }`}
        onClick={() => onTabChange("details")}
      >
        About
      </button>
      <button
        role="tab"
        aria-selected={activeTab === "principals"}
        className={`text-lg px-4 py-2 ${
          activeTab === "principals"
            ? "text-white border-b-2 border-white"
            : "text-[#808080] border-b-2 border-transparent"
        }`}
        onClick={() => onTabChange("principals")}
      >
        Cast
      </button>
    </div>
  );
};

export default memo(MovieTabs);
