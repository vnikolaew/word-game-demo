import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() => sessionStorage);
export const isAdminAtom = atomWithStorage("isAdmin", false, storage);
