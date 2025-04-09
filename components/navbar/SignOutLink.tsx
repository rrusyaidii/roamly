"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import React from "react";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "You have been signed out.", duration: 3000 });
  };

  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout} className="w-full text-left">
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
