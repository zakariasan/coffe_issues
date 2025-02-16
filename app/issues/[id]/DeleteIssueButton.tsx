import React from "react";

import Link from "next/link";
import { TrashIcon } from "@radix-ui/react-icons";
import { Box, AlertDialog, Button, Flex } from "@radix-ui/themes";

const DeleteIssueButton = () => {
  return (
    <Box>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">
            <TrashIcon />
            <Link href="/">Delete Issue</Link>
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue? This action cannot be
            undone.
          </AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red">Delete Issue</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Box>
  );
};

export default DeleteIssueButton;
