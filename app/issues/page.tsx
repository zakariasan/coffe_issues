import React from "react";
import { Button } from "@radix-ui/themes";
import Link  from "next/link";
const issues = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new_issue">New Issue </Link>
      </Button>
    </div>
  );
};

export default issues;
