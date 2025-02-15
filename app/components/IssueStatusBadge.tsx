import React from "react";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import { Record } from "@prisma/client/runtime/library";

const statusType: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In progress", color: "violet" },
  CLOSED: { label: "Closed", color: "red" },
};

const IssueStatusBadge = ({status}: {status: Status}) => {
  return (
  <Badge color={statusType[status].color}>{statusType[status].label}</Badge>
  );
};

export default IssueStatusBadge;
