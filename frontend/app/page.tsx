import { Suspense } from "react";
import UploadForm from "./UploadForm";

async function BackendStatus() {
  const response = await fetch("http://localhost:4000/health", {
    cache: "no-store",
  });

  const status = await response.text();

  return <p className="mt-4">Backend Status: {status}</p>;
}


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium tracking-widest text-teal-400">
            SECURITY WORKSPACE
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            AI Log Analyzer
          </h1>

          <p className="mt-3 text-slate-400">
            Investigate suspicious activity in web access logs.
          </p>

          <Suspense fallback={<p className="mt-4 text-slate-400">Checking backend...</p>}>
            <BackendStatus />
          </Suspense>
        </div>

        <UploadForm />
      </div>
    </main>
  );
}
