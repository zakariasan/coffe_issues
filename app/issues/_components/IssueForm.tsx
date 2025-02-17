"use client";
import { TextField, Button, Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { Issue } from "@prisma/client";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface IssueForm {
  title: string;
  description: string;
}

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  const [error, setError] = useState("");
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root size="3" color="red">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            if (issue) {
              await axios.patch(`/api/issues/${issue.id}`);
            } else {
              await axios.post("/api/issues", data);
            }
            router.push("/issues");
            router.refresh();
          } catch (error) {
            setError("Title and description are required!");
          }
        })}
      >
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        />
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Describe the issue…" {...field} />
          )}
        />
        <Button>{issue ? "Update Issue" : "Submit New Issue"}</Button>
      </form>
    </div>
  );
};

export default IssueForm;
