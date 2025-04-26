import { isAdminAtom } from "@/lib/atoms";
import { useAtom } from "jotai/react";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useRef, useState } from "react";

function useHeader() {
   const { data: session } = useSession();
   const [isOpen, setIsOpen] = useState(false);
   const dropdownRef = useRef<HTMLDivElement>(null);
   const [isAdmin, setIsAdmin] = useAtom<boolean>(isAdminAtom as any);

   const getAdmin = useCallback(async () => {
      const res = await fetch("/api/admin/users/isAdmin");
      const data = await res.json();
      setIsAdmin(data.isAdmin);
   }, [setIsAdmin]);

   useEffect(() => {
      getAdmin();
   }, [getAdmin, session]);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setIsOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
         document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   return { isAdmin, session, dropdownRef, getAdmin, isOpen, setIsOpen };
}

export default useHeader;
