'use client';

import { useState } from "react";
import Link from "next/link";
import {
  CalendarIcon,
  LayoutDashboardIcon,
  SmilePlusIcon,
  NotebookIcon,
  PenIcon,
  SlidersHorizontalIcon,
  LogOutIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signOutUser } from "@/lib/actions/user.actions";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Mood Tracker",
    url: "/dashboard/mood",
    icon: SmilePlusIcon,
  },
  {
    title: "Journal Log",
    url: "/dashboard/journal",
    icon: NotebookIcon,
  },
  {
    title: "Habits",
    url: "/dashboard/habits",
    icon: CalendarIcon,
  },
  {
    title: "Write Entry",
    url: "/dashboard/write-entry",
    icon: PenIcon,
    isButton: true,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: SlidersHorizontalIcon,
  },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar className={cn("transition-all duration-300", collapsed ? "w-20" : "w-64")}>
      <SidebarContent className="h-full flex flex-col justify-between">
        <div>
          {/* Toggle Collapse Button */}
          <div className={cn("p-4 flex justify-end", collapsed && "justify-center")}>
            <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </Button>
          </div>

          <SidebarGroup>
            <SidebarGroupLabel className={cn(collapsed && "hidden")}>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.isButton ? (
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {!collapsed && <span>{item.title}</span>}
                        </Link>
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {!collapsed && <span>{item.title}</span>}
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Log out form at the bottom */}
        <form action={signOutUser} className="p-4 pt-0">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton type="submit">
                <LogOutIcon className="mr-2 h-4 w-4" />
                {!collapsed && <span>Log out</span>}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </form>
      </SidebarContent>
    </Sidebar>
  );
}
