import { useState, useEffect } from "react";
import { UserProfile as UserProfileType } from "@/types";
import { Island_Moments } from "next/font/google";

export function useProfile() {
   const [profile, setProfile] = useState<UserProfileType | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const getUserProfile = async () => {
      try {
         setIsLoading(true);
         setError(null);
         const response = await fetch("/api/profile");
         if (!response.ok) {
            throw new Error("Failed to fetch profile");
         }
         const data = await response.json();
         setProfile(data);
         return data;
      } catch (err) {
         setError(err instanceof Error ? err.message : "An error occurred");
         return null;
      } finally {
         setIsLoading(false);
      }
   };

   // Fetch profile on component mount
   useEffect(() => {
      let mounted = true;

      const fetchProfile = async () => {
         if (mounted && !profile) {
            await getUserProfile();
         }
      };

      fetchProfile();

      return () => {
         mounted = false;
      };
   }, [profile]);

   return { getUserProfile, profile, isLoading, error };
}
