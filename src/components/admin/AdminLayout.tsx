import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";

export const AdminLayout = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <SidebarProvider>
      <header className="h-12 flex items-center border-b bg-background">
        <SidebarTrigger className="ml-2" />
        <div className="ml-4">
          <h1 className="text-lg font-semibold">Country Admin Dashboard</h1>
        </div>
      </header>

      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        <main className="flex-1 bg-muted/30">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};