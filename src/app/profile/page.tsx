import { Metadata } from "next";
import UserProfile from "@/components/view/UserProfile";

export const metadata: Metadata = {
  title: "Profile | Arabic Word Recognition",
  description: "View and manage your profile",
};

export default function ProfilePage() {
  return <UserProfile />;
}
