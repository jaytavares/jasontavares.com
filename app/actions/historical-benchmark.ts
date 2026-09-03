"use server";

export type Benchmark = {
  year: string;
  name: string;
};

const historicalBenchmarks: Benchmark[] = [
  { year: "1890s", name: "the first practical escalator" },
  { year: "1895", name: "the Rhode Island State House" },
  { year: "1896", name: "the modern Olympic Games" },
  { year: "1897", name: "the Boston Marathon" },
  { year: "1900", name: "the Providence Public Library building" },
  { year: "early 1900s", name: "the modern vacuum cleaner" },
  { year: "1902", name: "the teddy bear" },
  { year: "1902", name: "air conditioning" },
  { year: "1903", name: "powered flight" },
  { year: "1903", name: "Crayola crayons" },
  { year: "1903", name: "the first World Series" },
  { year: "1904", name: "the New York City subway" },
  { year: "1908", name: "the Ford Model T" },
  { year: "1912", name: "Oreo Cookies" },
  { year: "1913", name: "crossword puzzles" },
  { year: "1920", name: "commercial radio broadcasting" },
  { year: "1928", name: "sliced bread" },
];

export async function getHistoricalBenchmark(
  currentName: string,
): Promise<Benchmark> {
  const availableBenchmarks = historicalBenchmarks.filter(
    (benchmark) => benchmark.name !== currentName,
  );

  return availableBenchmarks[
    Math.floor(Math.random() * availableBenchmarks.length)
  ];
}
