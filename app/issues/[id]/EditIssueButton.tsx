import React from "react";

import Link from "next/link";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button } from "@radix-ui/themes";
const EditIssueButton = ({id}: {id : number}) => {
  return (
    <Box>
      <Button>
        <Pencil2Icon />
        <Link href={`/issues/${id}/edit`}>Edit Issue</Link>
      </Button>
    </Box>
  );
};

export default EditIssueButton;
