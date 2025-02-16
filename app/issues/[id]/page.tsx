import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Grid, Box, Flex } from "@radix-ui/themes";
import IssueDetails from "./IssueDetails";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";


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
    <Grid columns={{ initial: "1", md: "5" }} gap="5">
      <Box className="md:col-span-4">
      <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
      <EditIssueButton id={issue.id} />
          <DeleteIssueButton />
      </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
