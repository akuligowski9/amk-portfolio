export type Project = {
  title: string;
  desc: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Audit Logger Service",
    desc: "Centralized audit logging (serverless) with event envelopes and retention.",
    stack: ["Node", "Lambda", "DynamoDB"],
  },
  {
    title: "Research Digest",
    desc: "RSS aggregation + ranking for technical reading.",
    stack: ["Next.js", "Postgres"],
  },
  {
    title: "JustBeFunny",
    desc: "Improv game + creator hub.",
    stack: ["React Native", "Node"],
  },
];
