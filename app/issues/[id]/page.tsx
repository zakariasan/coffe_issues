import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Grid } from "@radix-ui/themes";
import IssueDetails from "./IssueDetails";
import EditIssueButton from "./EditIssueButton";


interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <IssueDetails issue={issue} />
      <EditIssueButton id={issue.id} />
    </Grid>
  );
};

export default IssueDetailPage;
