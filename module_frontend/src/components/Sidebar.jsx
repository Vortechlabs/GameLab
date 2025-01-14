
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export function AdminSidebar() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example"style={{ backgroundColor: 'black', color: 'white' }} >
      <div className="text-gray-600 flex items-center gap-2" >
        <img href="#" src="/src/assets/logo.png" alt="GameLab logo" className="h-10"/>
        <h1 className="font-bold text-2xl">GameLab</h1>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
