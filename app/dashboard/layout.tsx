import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className="flex-1 md:ml-[16rem]">
        <div className="h-full p-4 md:p-8">{children}</div>
      </div>
    </SidebarProvider>
  )
}

