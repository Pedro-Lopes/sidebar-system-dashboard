
import { Home, Users, CheckSquare, Settings } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", icon: Home, path: "/home" },
  { title: "CRM", icon: Users },
  { title: "Gestão de Tarefas", icon: CheckSquare },
  { title: "Configuração", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      className={isCollapsed ? "w-14" : "w-60"}
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold px-4 py-2">
            Sistema
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild={!!item.path}>
                    {item.path ? (
                      <Link to={item.path}>
                        <item.icon className="mr-3 h-5 w-5" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </Link>
                    ) : (
                      <>
                        <item.icon className="mr-3 h-5 w-5" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
