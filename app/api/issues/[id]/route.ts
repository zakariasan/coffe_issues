import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { IssueSchema } from "@/app/api/issues/route";

interface Props {
  params: { id: string };
}

export async function PATCH(req: NextRequest, { params }: Props) {
  const body = await req.json();
  const valide = IssueSchema.safeParse(body);

  if (!valide.success)
    return NextResponse.json(valide.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue)
    return NextResponse.json(
      { error: "Invalide Data to Update" },
      { status: 404 },
    );

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(updatedIssue);
}

export async function DELETE(req: NextRequest, { params }: Props) {
  const parId = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(parId.id) },
  });

  if (!issue)
    return NextResponse.json(
      { error: "Invalide Data to Delete" },
      { status: 404 },
    );

  const deletedIssue = await prisma.issue.delete({
    where: { id: issue.id },
  });
  return NextResponse.json({ msg: `deleted item ${deletedIssue}` });
}
