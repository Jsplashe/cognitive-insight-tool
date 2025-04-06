"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Brain, History, Home, LogOut, Plus, Settings, User } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function DashboardSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const menuItems = [
    {
      icon: Home,
      label: "Home",
      path: "/dashboard",
      tooltip: "Dashboard Home",
    },
    {
      icon: Plus,
      label: "New Analysis",
      path: "/dashboard/analyze",
      tooltip: "Create a new analysis",
    },
    {
      icon: History,
      label: "History",
      path: "/dashboard/history",
      tooltip: "View analysis history",
    },
    {
      icon: BarChart3,
      label: "Insights",
      path: "/dashboard/insights",
      tooltip: "View reasoning insights",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/dashboard/settings",
      tooltip: "Account settings",
    },
  ]

  return (
    <TooltipProvider>
      <Sidebar>
        <SidebarHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2 px-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CIT</span>
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton asChild isActive={isActive(item.path)} tooltip={item.tooltip}>
                          <Link href={item.path}>
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">{item.tooltip}</TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <User className="h-4 w-4" />
                      <span>John Doe</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">View profile</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild>
                    <Link href="/">
                      <LogOut className="h-4 w-4" />
                      <span>Log Out</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">Sign out of your account</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </TooltipProvider>
  )
}

