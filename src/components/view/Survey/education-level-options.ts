export const EDUCATION_LEVEL_OPTIONS = [
   { value: "english", label: `English` },
   {
      value: "urdu",
      label: `Urdu`,
   },
   {
      value: `bengali`,
      label: `Bengali`,
   },
   {
      value: `french`,
      label: `French`,
   },
   {
      value: `swahili`,
      label: `Swahili`,
   },
   {
      value: `tagalog`,
      label: `Tagalog`,
   },
   {
      value: `arabic`,
      label: `Arabic`,
   },
   {
      value: `other`,
      label: `Other, please specify`,
   },
   {
      value: `not_applicable`,
      label: `Not applicable`,
   },
] as const;


export const EDUCATION_LEVEL_OPTIONS_AR = `الإنجليزية,الأردية,البنغالية,الفرنسية,السواحيلية,التاغالوغية,العربية,أخرى، الرجاء التحديد,لاينطبق`.split(`,`).map((o) => o.trim())
