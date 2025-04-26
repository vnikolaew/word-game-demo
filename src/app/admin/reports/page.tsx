import { Metadata } from "next";
import Reports from "./Reports";

export const metadata: Metadata = {
   title: `تقارير الإدارة`,
   description: `عرض تقارير الإدارة التفصيلية`,
};

export const dynamic = "force-dynamic";
export default async function ReportsPage() {
   return <Reports />;
}
