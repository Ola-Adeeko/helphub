import { Suspense } from "react";
import DirectoryClient from "./DirectoryClient";

export const metadata = {
  title: "Find help — HelpHub Nigeria Directory",
};

export default function DirectoryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <DirectoryClient />
    </Suspense>
  );
}
