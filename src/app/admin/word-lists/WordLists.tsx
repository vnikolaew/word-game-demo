import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
   TableHeader,
   TableRow,
   TableHead,
   TableBody,
   TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { WordList } from "@prisma/client";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Plus, Table, Edit, Trash2, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function WordLists() {
   const [wordLists, setWordLists] = useState<WordList[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [selectedWordList, setSelectedWordList] = useState<WordList | null>(
      null
   );
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [words, setWords] = useState<{ word: string; isNonWord: boolean }[]>(
      []
   );

   useEffect(() => {
      fetchWordLists();
   }, []);

   const fetchWordLists = async () => {
      try {
         setIsLoading(true);
         const response = await fetch("/api/admin/word-lists");
         if (!response.ok) throw new Error("فشل في جلب قوائم الكلمات");
         const data = await response.json();
         setWordLists(data);
      } catch (error) {
         console.error("خطأ في جلب قوائم الكلمات:", error);
         toast.error("فشل في جلب قوائم الكلمات");
      } finally {
         setIsLoading(false);
      }
   };

   const handleCreateWordList = async () => {
      if (words.length === 0) {
         toast.error("الرجاء إضافة كلمة واحدة على الأقل");
         return;
      }

      if (words.some((word) => word.word.trim() === "")) {
         toast.error("الرجاء التأكد من ملء جميع الكلمات");
         return;
      }

      try {
         const response = await fetch("/api/admin/word-lists", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ words }),
         });

         if (!response.ok) {
            const error = await response.text();
            throw new Error(error || "فشل في إنشاء قائمة الكلمات");
         }

         toast.success("تم إنشاء قائمة الكلمات بنجاح");
         setIsDialogOpen(false);
         setWords([]);
         fetchWordLists();
      } catch (error) {
         console.error("خطأ في إنشاء قائمة الكلمات:", error);
         toast.error(
            error instanceof Error
               ? error.message
               : "فشل في إنشاء قائمة الكلمات"
         );
      }
   };

   const handleUpdateWordList = async (id: number) => {
      if (words.length === 0) {
         toast.error("الرجاء إضافة كلمة واحدة على الأقل");
         return;
      }

      try {
         const response = await fetch(`/api/admin/word-lists/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ words }),
         });

         if (!response.ok) {
            const error = await response.text();
            throw new Error(error || "فشل في تحديث قائمة الكلمات");
         }

         toast.success("تم تحديث قائمة الكلمات بنجاح");
         setIsDialogOpen(false);
         setSelectedWordList(null);
         setWords([]);
         fetchWordLists();
      } catch (error) {
         console.error("خطأ في تحديث قائمة الكلمات:", error);
         toast.error(
            error instanceof Error
               ? error.message
               : "فشل في تحديث قائمة الكلمات"
         );
      }
   };

   const handleDeleteWordList = async (id: number) => {
      if (!confirm("هل أنت متأكد من حذف قائمة الكلمات هذه؟")) return;

      try {
         const response = await fetch(`/api/admin/word-lists/${id}`, {
            method: "DELETE",
         });

         if (!response.ok) {
            const error = await response.text();
            throw new Error(error || "فشل في حذف قائمة الكلمات");
         }

         toast.success("تم حذف قائمة الكلمات بنجاح");
         fetchWordLists();
      } catch (error) {
         console.error("خطأ في حذف قائمة الكلمات:", error);
         toast.error(
            error instanceof Error ? error.message : "فشل في حذف قائمة الكلمات"
         );
      }
   };

   const handleEditClick = (wordList: WordList) => {
      setSelectedWordList(wordList);
      setWords(
         wordList.words.map((w) => ({ word: w.word, isNonWord: w.isNonWord }))
      );
      setIsDialogOpen(true);
   };

   const handleAddClick = () => {
      setSelectedWordList(null);
      setWords([]);
      setIsDialogOpen(true);
   };

   const addWord = () => {
      setWords([...words, { word: "", isNonWord: false }]);
   };

   const removeWord = (index: number) => {
      setWords(words.filter((_, i) => i !== index));
   };

   const updateWord = (
      index: number,
      field: "word" | "isNonWord",
      value: string | boolean
   ) => {
      const newWords = [...words];
      newWords[index] = { ...newWords[index], [field]: value };
      setWords(newWords);
   };

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
