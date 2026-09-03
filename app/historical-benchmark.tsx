"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getHistoricalBenchmark,
  type Benchmark,
} from "./actions/historical-benchmark";

const defaultBenchmark: Benchmark = {
  year: "1903",
  name: "powered flight",
};

export default function HistoricalBenchmark() {
  const [benchmark, setBenchmark] = useState<Benchmark | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadBenchmark = useCallback(async (currentName: string) => {
    setIsLoading(true);

    try {
      const result = await getHistoricalBenchmark(currentName);
      setBenchmark(result);
    } catch {
      setBenchmark(defaultBenchmark);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => void loadBenchmark(""), 0);
    return () => window.clearTimeout(timeoutId);
  }, [loadBenchmark]);

  return (
    <button
      className="benchmark-trigger"
      type="button"
      onClick={() => benchmark && void loadBenchmark(benchmark.name)}
      aria-label={
        benchmark
          ? `Load another historical benchmark: ${benchmark.name}, ${benchmark.year}`
          : "Loading historical benchmark"
      }
      aria-busy={isLoading}
      disabled={!benchmark}
    >
      <span>I live in a house older than </span>
      <span className="benchmark-value">
        {benchmark?.name ?? "\u00A0"}
        <span className="benchmark-year" aria-hidden="true">
          {benchmark?.year ?? ""}
        </span>
      </span>
      <span className="benchmark-trigger__hint" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </span>
    </button>
  );
}
