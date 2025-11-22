"use client";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
   TableHeader,
   TableRow,
   TableHead,
   TableBody,
   Table,
   TableCell,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Search, Eye } from "lucide-react";
import React from "react";
import { useUsersStats } from "./hooks";

function UsersTableSkeleton() {
   return (
       <div className="rounded-md border">
          <Table>
             <TableHeader>
                <TableRow>
                   <TableHead>الاسم</TableHead>
                   <TableHead>البريد الإلكتروني</TableHead>
                   <TableHead>معرف المستخدم</TableHead>
                   <TableHead>تاريخ الانضمام</TableHead>
                   <TableHead>الاختبارات المنجزة</TableHead>
                   <TableHead>الإجراءات</TableHead>
                </TableRow>
             </TableHeader>
             <TableBody>
                {[...Array(5)].map((_, i) => (
                    <TableRow key={i}>
                       <TableCell>
                          <Skeleton className="h-4 w-[100px]"/>
                       </TableCell>
                       <TableCell>
                          <Skeleton className="h-4 w-[150px]"/>
                       </TableCell>
                       <TableCell>
                          <Skeleton className="h-4 w-[100px]"/>
                       </TableCell>
                       <TableCell>
                          <Skeleton className="h-4 w-[80px]"/>
                       </TableCell>
                       <TableCell>
                          <Skeleton className="h-4 w-[60px]"/>
                       </TableCell>
                       <TableCell>
                          <Skeleton className="h-8 w-8"/>
                       </TableCell>
                    </TableRow>
                ))}
             </TableBody>
          </Table>
       </div>
   );
}

function Users() {
   const {
      filteredUsers,
      isLoading,
      searchTerm,
      selectedUser,
      setSearchTerm,
      setSelectedUser,
   } = useUsersStats();

   return (
       <div className="space-y-6">
          <div className="flex justify-between items-center">
             <h1 className="text-3xl font-bold">المستخدمون</h1>
             <div className="flex items-center gap-4">
                <div className="relative">
                   <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"/>
                   <Input
                       placeholder="البحث بالبريد الإلكتروني أو المعرف..."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       className="pl-10 w-[300px]"
                   />
                </div>
             </div>
          </div>

          {isLoading ? (
              <UsersTableSkeleton/>
          ) : (
              <div className="rounded-md border">
                 <Table>
                    <Headings/>
                    <TableBody>
                       {filteredUsers.map((user) => (
                           <Row
                               key={user.id}
                               user={user}
                               setSelectedUser={setSelectedUser}
                           />
                       ))}
                    </TableBody>
                 </Table>
              </div>
          )}

          <Dialog
              open={!!selectedUser}
              onOpenChange={() => setSelectedUser(null)}
          >
             <DialogContent className="max-w-2xl mt-12">
                <DialogHeader>
                   <DialogTitle>تفاصيل المستخدم</DialogTitle>
                </DialogHeader>
                {selectedUser && (
                    <div className="space-y-6">
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                             <h3 className="font-semibold">الاسم</h3>
                             <p>{selectedUser.name || "غير متوفر"}</p>
                          </div>
                          <div>
                             <h3 className="font-semibold ">البريد الإلكتروني</h3>
                             <p>{selectedUser.email}</p>
                          </div>
                          <div>
                             <h3 className="font-semibold">معرف المستخدم</h3>
                             <p className="font-mono">{selectedUser.id}</p>
                          </div>
                          <div>
                             <h3 className="font-semibold">تاريخ الانضمام</h3>
                             <p>
                                {new Date(
                                    selectedUser.createdAt
                                ).toLocaleDateString()}
                             </p>
                          </div>
                       </div>

                       <div>
                          <h3 className="font-medium mb-2">سجل الاختبارات</h3>
                          <div className="rounded-md border">
                             <Table>
                                <TableHeader>
                                   <TableRow>
                                      <TableHead>معرف الاختبار</TableHead>
                                      <TableHead>الدرجة</TableHead>
                                      <TableHead>التاريخ</TableHead>
                                   </TableRow>
                                </TableHeader>
                                <TableBody>
                                   {selectedUser.quizAttempts.map((quiz) => (
                                       <TableRow key={quiz.id}>
                                          <TableCell className="font-semibold">
                                             #{quiz.id}
                                          </TableCell>
                                          <TableCell>
                                             {quiz.score.toFixed(1)}%
                                          </TableCell>
                                          <TableCell>
                                             <time>
                                                {new Date(
                                                    quiz.createdAt
                                                ).toLocaleDateString()}
                                             </time>
                                          </TableCell>
                                       </TableRow>
                                   ))}
                                </TableBody>
                             </Table>
                          </div>
                       </div>
                    </div>
                )}
             </DialogContent>
          </Dialog>
       </div>
   );
}

const Headings = () => (
    <TableHeader>
       <TableRow>
          <TableHead className={`!text-right`}>الاسم</TableHead>
          <TableHead className={`text-right`}>البريد الإلكتروني</TableHead>
          <TableHead className={`text-right`}>معرف المستخدم</TableHead>
          <TableHead className={`text-right`}>تاريخ الانضمام</TableHead>
          <TableHead className={`text-right`}>الاختبارات المنجزة</TableHead>
          <TableHead className={`text-right`}>الإجراءات</TableHead>
       </TableRow>
    </TableHeader>
);

const Row = ({
                user,
                setSelectedUser,
             }: {
   user: any;
   setSelectedUser: any;
}) => (
    <TableRow key={user.id}>
       <TableCell>{user.name || "غير متوفر"}</TableCell>
       <TableCell>{user.email}</TableCell>
       <TableCell className="font-mono">{user.id}</TableCell>
       <TableCell>{new Date(user.createdAt!).toLocaleDateString()}</TableCell>
       <TableCell>{user.quizAttempts.length}</TableCell>
       <TableCell>
          <Button
              className="!cursor-pointer"
              variant="ghost"
              size="sm"
              onClick={() => setSelectedUser(user)}
          >
             <Eye className="h-4 w-4"/>
          </Button>
       </TableCell>
    </TableRow>
);

export default Users;
