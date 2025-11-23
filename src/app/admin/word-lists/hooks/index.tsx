import { WordList } from "@prisma/client";
import { parseAsString, parseAsStringEnum, useQueryState } from "nuqs";
import { useState, useEffect, useMemo } from "react";
import { toast } from "sonner";

export function useWordListsStats() {
   const [sort] = useQueryState(`sort`, parseAsString)
   const [order] = useQueryState(`order`, parseAsStringEnum([`asc`, `desc`]).withDefault(`asc`))

   const [wordLists, setWordLists] = useState<WordList[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [selectedWordList, setSelectedWordList] = useState<WordList | null>(
       null
   );
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [words, setWords] = useState<{ word: string; isNonWord: boolean }[]>(
       []
   );

   const normalizedWordLists = useMemo(() => {
      return wordLists
          ?.sort((a, b) => {
             if (sort === `id`) return order === `asc` ? a.original_id - b.original_id : b.original_id - a.original_id
             if (sort === `times`) return order === `asc` ? a.timesUsed - b.timesUsed : b.timesUsed - a.timesUsed
             return 0
          })
   }, [wordLists, sort, order])

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
   return {
      addWord,
      removeWord,
      updateWord,
      isLoading,
      wordLists: normalizedWordLists,
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
   };
}
