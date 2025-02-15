"use client";
import { TextField, TextArea, Button } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root placeholder="Title" />
      <SimpleMDE placeholder="Describe the issue…" />
      <Button>Submit New Issue </Button>
    </div>
  );
};

export default NewIssue;
