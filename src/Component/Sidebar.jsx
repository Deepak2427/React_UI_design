import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";

const Sidebar = ({ bgColor, color }) => {
  return (
    <div className="side_bar_content" style={{
      backgroundColor: bgColor,
      color: color
    }}>
      <div className="top_content">
        <div className="items" style={{ color: color }}>
          <FaHome className="icons" style={{ color: color }} /> Home
        </div>
        <div className="items" style={{ color: color }}>
          <IoIosNotifications className="icons" style={{ color: color }} /> Notification
        </div>
        <div className="items" style={{ color: color }}>
          <FaBagShopping className="icons" style={{ color: color }} /> Shop
        </div>
        <div className="items" style={{ color: color }}>
          <IoIosChatboxes className="icons" style={{ color: color }} /> Conversation
        </div>
        <div className="items" style={{ color: color }}>
          <FaWallet className="icons" style={{ color: color }} /> Wallet
        </div>
        <div className="items" style={{ color: color }}>
          <FaYoutube className="icons" style={{ color: color }} /> Subscription
        </div>
        <div className="items" style={{ color: color }}>
          <CgProfile className="icons" style={{ color: color }} /> My Profile
        </div>
      </div>
      <div className="bottom_content items" style={{ color: color }}>
        <RiLogoutBoxFill className="icons" style={{ color: color }} /> Log Out
      </div>
    </div>
  );
};

export default Sidebar;
