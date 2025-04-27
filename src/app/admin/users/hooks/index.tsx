import { useState, useEffect } from "react";
import { User } from "@/types";

export function useUsersStats() {
   const [users, setUsers] = useState<User[]>([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [isLoading, setIsLoading] = useState(true);
   const [selectedUser, setSelectedUser] = useState<User | null>(null);

   useEffect(() => {
      fetchUsers();
   }, []);

   const fetchUsers = async () => {
      try {
         setIsLoading(true);
         const response = await fetch("/api/admin/users");
         if (!response.ok) throw new Error("فشل في جلب بيانات المستخدمين");
         const data = await response.json();
         setUsers(data);
      } catch (error) {
         console.error("خطأ في جلب بيانات المستخدمين:", error);
      } finally {
         setIsLoading(false);
      }
   };

   const filteredUsers = users.filter(
      (user) =>
         user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         user.id.toLowerCase().includes(searchTerm.toLowerCase())
   );
   return {
      filteredUsers,
      isLoading,
      selectedUser,
      searchTerm,
      setSearchTerm,
      setSelectedUser,
   };
}
