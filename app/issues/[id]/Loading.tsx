import React from "react";
import { Box, Card, Flex, Heading } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem"/>
        <Skeleton  width="8rem"/>
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
