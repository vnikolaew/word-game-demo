import { Metadata } from "next";
import Users from "./Users";

export const metadata: Metadata = {
   title: ` إحصائيات الإدارة للمستخدمين`,
   description: `عرض إحصائيات الإدارة التفصيلية للمستخدمين`,
};

export const dynamic = "force-dynamic";

export default async function UsersPage() {
   return <Users />;
}
