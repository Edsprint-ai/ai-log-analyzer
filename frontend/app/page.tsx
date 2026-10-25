import { Suspense } from "react";

async function BackendStatus() {
  const response = await fetch("http://localhost:4000/health", {
    cache: "no-store",
  });

  const status = await response.text();

  return <p className="mt-4">Backend Status: {status}</p>;
}

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">AI Log Analyzer</h1>

      <Suspense fallback={<p className="mt-4">Checking backend...</p>}>
        <BackendStatus />
      </Suspense>
    </main>
  );
}