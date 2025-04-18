"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

// Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Icons
import { Trash2, LogOut } from "lucide-react";

// Types
import { UserProfile as UserProfileType } from "@/types";

export default function UserProfile() {
  const router = useRouter();
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

  const deleteUserProfile = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/profile", {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete account");
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete account");
      return false;
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

  // Delete account
  const handleDeleteAccount = async () => {
    try {
      const success = await deleteUserProfile();
      if (success) {
        await signOut({ callbackUrl: "/" });
      }
    } catch (err) {
      console.error("Failed to delete account:", err);
    }
  };

  // Handle logout
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
        <Spinner size="sm" />
        <p className="text-sm text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={getUserProfile}>Try Again</Button>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>

      {/* Personal Information */}
      <Card className="mb-8 p-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{profile.name || "Not provided"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{profile.email}</p>
          </div>
        </div>
      </Card>

      {/* Demographic Information */}
      {profile.demographicSurvey && (
        <Card className="mb-8 p-6">
          <h2 className="text-xl font-semibold mb-4">Background Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information */}
            <div className="col-span-2">
              <h3 className="text-lg font-medium mb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Age</p>
                  <p className="font-medium">{profile.demographicSurvey.age}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Gender</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.gender}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Nationality</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.nationality}
                    {profile.demographicSurvey.otherNationality &&
                      ` (${profile.demographicSurvey.otherNationality})`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Residence</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.residence}
                    {profile.demographicSurvey.otherResidence &&
                      ` (${profile.demographicSurvey.otherResidence})`}
                  </p>
                </div>
              </div>
            </div>

            {/* Language Background */}
            <div className="col-span-2">
              <h3 className="text-lg font-medium mb-2">Language Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Native Language</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.nativeLanguage}
                    {profile.demographicSurvey.otherNativeLanguage &&
                      ` (${profile.demographicSurvey.otherNativeLanguage})`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Language Acquisition</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.languageAcquisition}
                    {profile.demographicSurvey.otherAcquisitionLanguage &&
                      ` (${profile.demographicSurvey.otherAcquisitionLanguage})`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Family Language</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.familyLanguage}
                    {profile.demographicSurvey.otherFamilyLanguage &&
                      ` (${profile.demographicSurvey.otherFamilyLanguage})`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Arabic Dialect</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.arabicDialect}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Known Languages</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.languages}
                  </p>
                </div>
              </div>
            </div>

            {/* Education History */}
            <div className="col-span-2">
              <h3 className="text-lg font-medium mb-2">Education History</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Highest Education</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.highestEducation}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Kindergarten Language</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.kindergartenLanguage}
                    {profile.demographicSurvey.otherKindergartenLanguage &&
                      ` (${profile.demographicSurvey.otherKindergartenLanguage})`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Primary School Language
                  </p>
                  <p className="font-medium">
                    {profile.demographicSurvey.primaryLanguage}
                    {profile.demographicSurvey.otherPrimaryLanguage &&
                      ` (${profile.demographicSurvey.otherPrimaryLanguage})`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Middle School Language
                  </p>
                  <p className="font-medium">
                    {profile.demographicSurvey.middleLanguage}
                    {profile.demographicSurvey.otherMiddleLanguage &&
                      ` (${profile.demographicSurvey.otherMiddleLanguage})`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">High School Language</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.highSchoolLanguage}
                    {profile.demographicSurvey.otherHighSchoolLanguage &&
                      ` (${profile.demographicSurvey.otherHighSchoolLanguage})`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">University Language</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.universityLanguage}
                    {profile.demographicSurvey.otherUniversityLanguage &&
                      ` (${profile.demographicSurvey.otherUniversityLanguage})`}
                  </p>
                </div>
              </div>
            </div>

            {/* Language Usage */}
            <div className="col-span-2">
              <h3 className="text-lg font-medium mb-2">Daily Language Usage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Reading Hours</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.readingHours}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Listening Hours</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.listeningHours}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Writing Hours</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.writingHours}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Speaking Hours</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.speakingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="col-span-2">
              <h3 className="text-lg font-medium mb-2">
                Additional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Attention Disorder</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.attentionDisorder}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Reading Disorder</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.readingDisorder}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Vision</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.vision}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Handedness</p>
                  <p className="font-medium">
                    {profile.demographicSurvey.handedness}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Quiz History */}
      <Card className="mb-8 p-6">
        <h2 className="text-xl font-semibold mb-4">Quiz History</h2>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500">Total Quizzes Completed:</p>
              <p className="font-medium">{profile?.quizAttempts.length || 0}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500">Attempts Remaining:</p>
              <p className="font-medium">
                {200 - (profile?.quizAttempts.length || 0)}
              </p>
            </div>
          </div>

          {profile?.quizAttempts.length > 0 ? (
            <div className="space-y-4">
              {profile.quizAttempts.map((attempt) => (
                <div key={attempt.id} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Score</p>
                      <p className="font-medium">{attempt.score}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Correct Words</p>
                      <p className="font-medium">
                        {attempt.correctWords + attempt.correctNonWords}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Completion Time</p>
                      <p className="font-medium">
                        {Math.round(attempt.totalQuizDuration / 1000)}s
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium">
                        {new Date(attempt.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No quizzes completed yet</p>
          )}
        </div>
      </Card>

      {/* Account Management */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Account Management</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="flex items-center gap-2">
                <Trash2 className="h-4 w-4" />
                Delete Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove all your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDeleteAccount}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
    </div>
  );
}
