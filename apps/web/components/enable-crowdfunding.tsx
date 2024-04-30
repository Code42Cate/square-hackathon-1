"use client";
import { Button } from "@ui/components/ui/button";
import { Toaster, toast } from "sonner";

export default function EnableCrowdfunding() {
  return (
    <Button
      onClick={() => {
        toast("Crowdfunding is already enabled, good job!");
      }}
    >
      Enable Crowdfunding
    </Button>
  );
}
