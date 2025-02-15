import { TextField, TextArea, Button } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root placeholder="Title" />
      <TextArea placeholder="Describe the issue…" />
      <Button>Submit New Issue </Button>
    </div>
  );
};

export default NewIssue;
