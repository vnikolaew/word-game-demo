import { Metadata } from "next";
import Dialect from "./Dialect";

export const metadata: Metadata = {
   title: `إحصائيات الإدارة حسب اللهجة`,
   description: `عرض إحصائيات الإدارة التفصيلية حسب اللهجة`,
};

export const dynamic = "force-dynamic";

async function Page() {
   return <Dialect />;
}

export default Page;
