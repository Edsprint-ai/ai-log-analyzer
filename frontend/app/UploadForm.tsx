"use client";

import { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);


  const handleAnalyze = async () => {
    if (!file) return;

    // FormData packages the selected file for uploading.
    const formData = new FormData();
    formData.append("file", file);
    // fetch() sends the file to the Express endpoint.
    try {
      const response = await fetch(
        "http://localhost:4000/uploads",
        {
          method: "POST",
          body: formData,
        }
      );

      // response.json() reads the confirmation returned by Express.
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Upload failed");
      }

      alert(`Uploaded successfully: ${result.filename}`);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Upload failed"
      );
    }
  };

return (
  <section className="rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-xl">
    <h2 className="text-2xl font-semibold text-white">
      Upload Access Log
    </h2>

    <p className="mt-2 text-sm text-slate-400">
      Select a .log or .txt file to begin your security analysis.
    </p>

    <div className="mt-6 flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-slate-600 bg-slate-800/50 p-8">
      <span className="text-3xl">📁</span>

      <label className="cursor-pointer rounded-lg border border-teal-500/50 bg-teal-500/10 px-5 py-3 font-medium text-teal-300 transition hover:bg-teal-500/20">
        Choose Log File
        <input
          type="file"
          accept=".log,.txt"
          className="sr-only"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
      </label>

      <p className="text-sm text-slate-400">
        {file ? `Selected: ${file.name}` : "No file selected"}
      </p>

      <p className="text-xs text-slate-500">
        Maximum file size: 1 MB
      </p>
    </div>

    <button
      type="button"
      disabled={!file}
      onClick={handleAnalyze}
      className="mt-6 w-full rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-40"
    >
      Analyze Log
    </button>
  </section>
);

}
