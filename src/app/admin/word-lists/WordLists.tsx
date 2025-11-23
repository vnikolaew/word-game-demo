"use client";
import { Button } from "@/components/ui/button";
import {
   DialogHeader,
   DialogFooter,
   Dialog,
   DialogContent,
   DialogTitle,
} from "@/components/ui/dialog";
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
import { Label } from "@radix-ui/react-label";
import { Plus, Edit, Trash2, X, ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import React, { PropsWithChildren } from "react";
import { useWordListsStats } from "./hooks";
import { useQueryState, parseAsString, parseAsStringEnum } from "nuqs";

const SortButton = ({ field }: { field: string }) => {
   const [sort, setSort] = useQueryState(`sort`, parseAsString)
   const [order, setOrder] = useQueryState(`order`, parseAsStringEnum([`asc`, `desc`]).withDefault(`asc`))

   return (
       <span onClick={async _ => {
          await setSort(field)
          await setOrder(!order?.length ? `asc` : order === `asc` ? `desc` : `asc`)
       }} className={`!cursor-pointer !w-6 !h-fit`}>
          {field === sort ? order === `asc` ? (
              <ArrowDown size={14}/>
          ) : (
              <ArrowUp size={14}/>
          ) : <ArrowUpDown size={14} className={``}/>}
       </span>
   )
}

const SortableTableHead = ({ field, children, className, ...rest }: PropsWithChildren & {
   field: string
} & React.ComponentProps<"th">) => (
    <TableHead className={cn(`text-right`, className)} {...rest}>
       <div className={`!inline-flex items-center !text-right !ml-auto !w-full`}>
          <SortButton field={field}/>
          {children}
       </div>
    </TableHead>
)

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
                <Plus className="h-4 w-4 mr-2"/>
                إضافة قائمة كلمات
             </Button>
          </div>

          {isLoading ? (
              <div className="text-center py-4">جاري التحميل...</div>
          ) : (
              <div className="rounded-md border">
                 <Table>
                    <Headings/>
                    <TableBody>
                       {wordLists
                           .sort((a, b) => a.original_id - b.original_id)
                           .map((list) => (
                               <Row
                                   key={list.id}
                                   handleEditClick={handleEditClick}
                                   handleDeleteWordList={handleDeleteWordList}
                                   list={list}
                               />
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
                             title={`Add a new word`}
                             size="sm"
                         >
                            <Plus className="h-4 w-4 mr-2"/>
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
                                    title={`Remove word`}
                                    size="sm"
                                    onClick={() => removeWord(index)}
                                >
                                   <X className="h-4 w-4"/>
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
                      يلغي
                   </Button>
                   <Button
                       onClick={() =>
                           selectedWordList
                               ? handleUpdateWordList(selectedWordList.id)
                               : handleCreateWordList()
                       }
                   >
                      {selectedWordList ? "تحديث" : "يخلق"}
                   </Button>
                </DialogFooter>
             </DialogContent>
          </Dialog>
       </div>
   );
}

const Headings = () => (
    <TableHeader>
       <TableRow>
          <SortableTableHead field={`id`} className="text-right">المعرف</SortableTableHead>
          <TableHead className="text-right">الكلمات</TableHead>
          <SortableTableHead field={`times`} className="text-right">عدد مرات الاستخدام</SortableTableHead>
          <TableHead className="text-right">آخر استخدام</TableHead>
          <TableHead className="text-right">تاريخ الإنشاء</TableHead>
          <TableHead className="text-right">الإجراءات</TableHead>
       </TableRow>
    </TableHeader>
);

const Row = ({
                list,
                handleEditClick,
                handleDeleteWordList,
             }: {
   list: any;
   handleEditClick: any;
   handleDeleteWordList: any;
}) => (
    <TableRow key={list.id}>
       <TableCell>#{list.original_id}</TableCell>
       <TableCell>{list.words.length} كلمة</TableCell>
       <TableCell>{list.timesUsed}</TableCell>
       <TableCell>
          {list.lastUsedAt
              ? new Date(list.lastUsedAt).toLocaleDateString()
              : "لم يتم الاستخدام"}
       </TableCell>
       <TableCell>{new Date(list.createdAt).toLocaleDateString()}</TableCell>
       <TableCell className="space-x-2">
          <Button
              className="!cursor-pointer"
              variant="ghost"
              size="sm"
              title={`Edit word list`}
              onClick={() => handleEditClick(list)}
          >
             <Edit className="h-4 w-4 !text-blue-600"/>
          </Button>
          <Button
              variant="ghost"
              className="!cursor-pointer"
              size="sm"
              title={`Delete word list`}
              onClick={() => handleDeleteWordList(list.id)}
          >
             <Trash2 className="h-4 w-4 !text-red-600"/>
          </Button>
       </TableCell>
    </TableRow>
);

export default WordLists;
