import React, { PropsWithChildren } from "react";

async function Layout({ children }: PropsWithChildren) {
   return <section className="w-full mt-12">{children}</section>;
}

export default Layout;
