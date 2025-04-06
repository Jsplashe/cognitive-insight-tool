import { InsightsEmptyState } from "@/components/dashboard/empty-states"

export default function InsightsEmptyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Insights</h1>
        <p className="text-muted-foreground mt-2">
          Analyze your reasoning patterns and track your improvement over time
        </p>
      </div>

      <InsightsEmptyState />
    </div>
  )
}

