"use Client";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./Loading";
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
const NewIssue = () => {
  return <IssueForm />;
};

export default NewIssue;
