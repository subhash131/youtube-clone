import CreateSvg from "@/assets/CreateSvg";
import NotificationSvg from "@/assets/NotificationSvg";
import YoutubeSvg from "@/assets/YoutubeSvg";
import { toggleMenu } from "@/redux/features/MenuToggleSlice";
import { toggleMoreOption } from "@/redux/features/MoreButtonToggleSlice";
import { Menu, Mic, MoreVertical, Search, UserCircle2 } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="w-full fixed z-50 bg-white">
      <div className="mx-auto flex items-center justify-between px-4 py-2 w-full">
        <div className="inline-flex items-center gap-6 w-96 py-2 px-3">
          <Menu className="cursor-pointer" onClick={handleToggle} />
          <YoutubeSvg />
        </div>
        <div className="w-[800px] flex gap-4">
          <div className="flex w-[80%] min-w-[150px]">
            <input
              className="h-10 w-full rounded-tl-3xl rounded-bl-3xl border border-[#E1E1E0] px-3 py-2 text-sm placeholder:text-[#A78F89] focus:outline-none focus:border-[#075ed4]"
              type="text"
              placeholder="Search..."
            />
            <div className="rounded-tr-3xl rounded-br-3xl bg-gray-100 h-10 w-[50px] px-3 py-2 cursor-pointer">
              <Search size={22} strokeWidth={1} />
            </div>
          </div>
          <div className="rounded-full bg-gray-100 p-2 cursor-pointer">
            <Mic size={22} strokeWidth={1} />
          </div>
        </div>
        <div>
          {
            // TODO:isLoggedIn
            false ? (
              <div className="flex gap-4">
                <div className="p-2 rounded-full hover:bg-[#F4F4F4] cursor-pointer">
                  <CreateSvg />
                </div>
                <div className="p-2 rounded-full hover:bg-[#F4F4F4] cursor-pointer">
                  <NotificationSvg isSelected={false} />
                </div>
                <div className="p-2 rounded-full hover:bg-[#F4F4F4] cursor-pointer w-10 h-10">
                  <img
                    alt="profile pic"
                    src="https://static.vecteezy.com/system/resources/previews/022/666/315/original/lion-face-silhouettes-lion-face-svg-black-and-white-lion-vector.jpg"
                    className="rounded-full w-full h-full"
                  />
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <div
                  className="p-2 cursor-pointer rounded-full hover:border-gray-200 border border-white"
                  onClick={() => dispatch(toggleMoreOption())}
                >
                  <MoreVertical size={24} strokeWidth={1} />
                </div>
                <div className="text-[#075ed4] flex gap-2 rounded-3xl border py-2 px-3 w-28 cursor-pointer">
                  <UserCircle2 size={24} strokeWidth={1} />
                  <p>Sign in</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
