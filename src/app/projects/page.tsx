import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  { title: "Audit Logger Service", desc: "Centralized audit logging (serverless) with event envelopes and retention.", stack: ["Node", "Lambda", "DynamoDB"] },
  { title: "Research Digest", desc: "RSS aggregation + ranking for technical reading.", stack: ["Next.js", "Postgres"] },
  { title: "JustBeFunny", desc: "Improv game + creator hub.", stack: ["React Native", "Node"] },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <Card key={p.title} className="border-slate-200 dark:border-slate-700">
            <CardHeader><CardTitle>{p.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">{s}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
