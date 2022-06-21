import React from "react";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  DotsHorizontalIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          width={50}
          height={50}
        />
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:item-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* Button */}
      <button
        type="button"
        className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden lg:inline"
      >
        Tweet
      </button>
      {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://media.premiumtimesng.com/wp-content/files/2021/10/Peter-Obi.jpg"
          alt="user-image"
          className="h-10 w-10 rounded-full"
        />
        <div className="leading-5 x hidden xl:inline">
          <h4 className="font-bold">Peter Obi</h4>
          <p className="text-gray-500">@peterobiforlabour</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}

export default Sidebar;
