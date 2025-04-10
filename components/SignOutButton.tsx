'use client';

import { signOut } from "@/lib/actions/auth.action";
import { Button } from "./ui/button";
const SignOutButton = () => {
  return (
    <Button className="btn-primary"
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;