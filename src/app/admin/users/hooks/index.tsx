"use client"
import { useState, useEffect, useMemo } from "react";
import { User } from "@/types";
import { parseAsString, parseAsStringEnum, useQueryState } from "nuqs";

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

   const [sort,] = useQueryState(`sort`, parseAsString)
   const [order] = useQueryState(`order`, parseAsStringEnum([`asc`, `desc`]).withDefault(`asc`))

   const filteredUsers = useMemo(() => {
      return users
          .sort((a, b) => {
             if (!sort?.length || !order?.length) return 0;

             if (sort === `id`) {
                return order === `asc` ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
             } else if (sort === `email`) {
                return order === `asc` ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email);
             } else if (sort === `name`) {
                return order === `asc` ? a.name!.localeCompare(b.name!) : b.name!.localeCompare(a.name!);
             } else if (sort === `date`) {
                return order === `asc` ? a.createdAt.localeCompare(b.createdAt) : b.createdAt.localeCompare(a.createdAt);
             } else if (sort === `test`) {
                return order === `asc` ? a.quizAttempts.length - b.quizAttempts.length : b.quizAttempts.length - a.quizAttempts.length;
             }

             return 0;
          })
          .filter(
              (user) => !searchTerm?.length ? true :
                  (user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      user.name?.toLowerCase().includes(searchTerm.toLowerCase()))
          );
   }, [users, searchTerm, sort, order]);

   return {
      filteredUsers,
      isLoading,
      selectedUser,
      searchTerm,
      setSearchTerm,
      setSelectedUser,
   };
}
