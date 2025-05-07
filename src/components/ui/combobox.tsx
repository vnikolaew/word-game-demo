"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from "@/components/ui/command";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
   {
      value: "next.js",
      label: "Next.js",
   },
   {
      value: "sveltekit",
      label: "SvelteKit",
   },
   {
      value: "nuxt.js",
      label: "Nuxt.js",
   },
   {
      value: "remix",
      label: "Remix",
   },
   {
      value: "astro",
      label: "Astro",
   },
];

interface Props {
   options: typeof frameworks;
   placeholder: string;
   empty: string;
   onChange: (value: string) => void;
   className?: string;
}

export function Combobox({
   options,
   className,
   onChange,
   empty,
   placeholder,
}: Props) {
   const [open, setOpen] = React.useState(false);
   const [value, setValue] = React.useState("");

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button
               variant="outline"
               role="combobox"
               aria-expanded={open}
               className="w-full justify-between"
            >
               {value
                  ? options.find((o) => o.value === value)?.label
                  : placeholder}
               <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className={cn("w-full p-0", className)}>
            <Command>
               <CommandInput placeholder={placeholder} />
               <CommandList>
                  <CommandEmpty>{empty}</CommandEmpty>
                  <CommandGroup>
                     {options.map((o) => (
                        <CommandItem
                           key={o.value}
                           value={o.value}
                           onSelect={(currentValue) => {
                              let x =
                                 currentValue === value ? "" : currentValue;

                              setValue(x);
                              onChange(x);
                              setOpen(false);
                           }}
                        >
                           <Check
                              className={cn(
                                 "mr-2 h-4 w-4",
                                 value === o.value ? "opacity-100" : "opacity-0"
                              )}
                           />
                           {o.label}
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   );
}
