import HistorySvg from "@/assets/HistorySvg";
import HomeSvg from "@/assets/HomeSvg";
import ShortsSvg from "@/assets/ShortsSvg";
import SubscriptionSvg from "@/assets/Subscriptions";
import YouSvg from "@/assets/YouSvg";
import { RootState } from "@/redux/store";
import { Clock, LibraryIcon, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebaropen = useSelector(
    (state: RootState) => state.MenuReducer.isMenuOpen
  );
  return (
    <>
      {isSidebaropen ? (
        <aside className="flex h-screen w-44 flex-col overflow-y-auto px-5 py-8 fixed mt-12 z-50 bg-white">
          <div className="flex flex-1 flex-col justify-between">
            <nav className="space-y-6 -mx-3">
              <div className="space-y-3">
                <Link
                  href="/"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <HomeSvg isSelected={false} />
                  <span className="mx-2 text-sm font-medium">Home</span>
                </Link>
                <Link
                  href="/"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <ShortsSvg isSelected={false} />
                  <span className="mx-2 text-sm font-medium">Shorts</span>
                </Link>
                <Link
                  href="/"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <SubscriptionSvg isSelected={false} />
                  <span className="mx-2 text-sm font-medium">Subscribe</span>
                </Link>
              </div>
              <div>
                <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                  Content
                </label>
                <Link
                  href="/"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <LibraryIcon strokeWidth={1} color="black" />
                  <span className="mx-2 text-sm font-medium">Library</span>
                </Link>
                <Link
                  href="#"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <HistorySvg isSelected={false} />
                  <span className="mx-2 text-sm font-medium">History</span>
                </Link>
                <Link
                  href="#"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <Youtube strokeWidth={1} color="black" />
                  <span className="mx-2 text-sm font-medium">Your Videos</span>
                </Link>
                <Link
                  href="#"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  <Clock strokeWidth={1} color="black" />
                  <span className="mx-2 text-sm font-medium">Watch Later</span>
                </Link>
              </div>
            </nav>
          </div>
        </aside>
      ) : (
        <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto bg-white py-8 fixed mt-12">
          <nav className="flex flex-1 flex-col items-center space-y-6">
            <Link
              href="/"
              className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 cursor-pointer"
            >
              <HomeSvg isSelected={false} />
            </Link>
            <Link
              href="#"
              className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 "
            >
              <ShortsSvg isSelected={false} />
            </Link>
            <Link
              href="#"
              className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 "
            >
              <SubscriptionSvg isSelected={false} />
            </Link>
            <Link
              href="#"
              className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 "
            >
              <YouSvg isSelected={false} />
            </Link>
            <Link
              href="#"
              className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 "
            >
              <HistorySvg isSelected={false} />
            </Link>
          </nav>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
