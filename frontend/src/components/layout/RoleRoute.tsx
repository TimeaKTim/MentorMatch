import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore, type UserRole } from "@/stores/authStore";

interface RoleRouteProps {
  allowedRoles: UserRole[];
}

export function RoleRoute({ allowedRoles }: RoleRouteProps) {
  const user = useAuthStore((s) => s.user);

  if (!user?.role || !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
