import { DashboardStats } from "@/types";
import { useState, useEffect } from "react";

export function useAdminStats() {
   const [stats, setStats] = useState<DashboardStats | null>(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchStats = async () => {
         try {
            const response = await fetch("/api/admin/stats");
            if (!response.ok) throw new Error("فشل في جلب الإحصائيات");
            const data = await response.json();
            setStats(data);
         } catch (error) {
            console.error("خطأ في جلب الإحصائيات:", error);
         } finally {
            setIsLoading(false);
         }
      };

      fetchStats();
   }, []);

   return { isLoading, stats };
}
