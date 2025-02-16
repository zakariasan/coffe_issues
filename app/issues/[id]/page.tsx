import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
interface Prop {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Prop) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{new Date(issue.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
