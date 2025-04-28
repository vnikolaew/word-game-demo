"use client";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
   TableHeader,
   TableRow,
   TableHead,
   TableBody,
   TableCell,
   Table,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Plus, Edit, Trash2, X } from "lucide-react";
import React from "react";
import { useWordListsStats } from "./hooks";

function WordLists() {
   const {
      addWord,
      removeWord,
      updateWord,
      isLoading,
      wordLists,
      selectedWordList,
      setSelectedWordList,
      isDialogOpen,
      setIsDialogOpen,
      words,
      setWords,
      handleAddClick,
      handleCreateWordList,
      handleDeleteWordList,
      handleEditClick,
      handleUpdateWordList,
   } = useWordListsStats();

   return (
      <div className="space-y-6">
         <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">قوائم الكلمات</h1>
            <Button onClick={handleAddClick}>
               <Plus className="h-4 w-4 mr-2" />
               إضافة قائمة كلمات
            </Button>
         </div>

         {isLoading ? (
            <div className="text-center py-4">جاري التحميل...</div>
         ) : (
            <div className="rounded-md border">
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead className="text-right">المعرف</TableHead>
                        <TableHead className="text-right">الكلمات</TableHead>
                        <TableHead className="text-right">
                           عدد مرات الاستخدام
                        </TableHead>
                        <TableHead className="text-right">
                           آخر استخدام
                        </TableHead>
                        <TableHead className="text-right">
                           تاريخ الإنشاء
                        </TableHead>
                        <TableHead className="text-right">الإجراءات</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {wordLists.map((list) => (
                        <TableRow key={list.id}>
                           <TableCell>#{list.id}</TableCell>
                           <TableCell>{list.words.length} كلمة</TableCell>
                           <TableCell>{list.timesUsed}</TableCell>
                           <TableCell>
                              {list.lastUsedAt
                                 ? new Date(
                                      list.lastUsedAt
                                   ).toLocaleDateString()
                                 : "لم يتم الاستخدام"}
                           </TableCell>
                           <TableCell>
                              {new Date(list.createdAt).toLocaleDateString()}
                           </TableCell>
                           <TableCell className="space-x-2">
                              <Button
                                 className="!cursor-pointer"
                                 variant="ghost"
                                 size="sm"
                                 onClick={() => handleEditClick(list)}
                              >
                                 <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                 variant="ghost"
                                 className="!cursor-pointer"
                                 size="sm"
                                 onClick={() => handleDeleteWordList(list.id)}
                              >
                                 <Trash2 className="h-4 w-4" />
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
         )}

         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-2xl">
               <DialogHeader>
                  <DialogTitle>
                     {selectedWordList
                        ? "تعديل قائمة الكلمات"
                        : "إضافة قائمة كلمات"}
                  </DialogTitle>
               </DialogHeader>
               <div className="space-y-4 py-4">
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        <Label>الكلمات</Label>
                        <Button
                           className="!cursor-pointer"
                           onClick={addWord}
                           size="sm"
                        >
                           <Plus className="h-4 w-4 mr-2" />
                           إضافة كلمة
                        </Button>
                     </div>
                     <div className="space-y-2 max-h-[400px] w-full overflow-y-auto">
                        {words.map((word, index) => (
                           <div
                              key={index}
                              className="flex gap-2 items-center w-full"
                           >
                              <Input
                                 value={word.word}
                                 onChange={(e) =>
                                    updateWord(index, "word", e.target.value)
                                 }
                                 placeholder="أدخل الكلمة"
                                 className="flex-1 w-full"
                              />
                              <Button
                                 variant="outline"
                                 size="sm"
                                 onClick={() =>
                                    updateWord(
                                       index,
                                       "isNonWord",
                                       !word.isNonWord
                                    )
                                 }
                                 className={cn(
                                    word.isNonWord ? "bg-gray-200" : "",
                                    `cursor-pointer`
                                 )}
                              >
                                 {word.isNonWord ? "Non-word" : "Word"}
                              </Button>
                              <Button
                                 className={cn(`cursor-pointer`)}
                                 variant="ghost"
                                 size="sm"
                                 onClick={() => removeWord(index)}
                              >
                                 <X className="h-4 w-4" />
                              </Button>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <DialogFooter>
                  <Button
                     variant="outline"
                     onClick={() => {
                        setIsDialogOpen(false);
                        setSelectedWordList(null);
                        setWords([]);
                     }}
                  >
                     Cancel
                  </Button>
                  <Button
                     onClick={() =>
                        selectedWordList
                           ? handleUpdateWordList(selectedWordList.id)
                           : handleCreateWordList()
                     }
                  >
                     {selectedWordList ? "Update" : "Create"}
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
}

export default WordLists;
