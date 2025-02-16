import React from "react";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";

import ReactMarkdown from "react-markdown";
import { Card, Flex, Heading, Text, Box} from "@radix-ui/themes";
import {Issue} from '@prisma/client'

const IssueDetails = ({issue}: {issue: Issue}) => {
  return (
    <Box>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="props max-w-full" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Box>
  );
};

export default IssueDetails;
