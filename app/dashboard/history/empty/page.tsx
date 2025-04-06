import { HistoryEmptyState } from "@/components/dashboard/empty-states"

export default function HistoryEmptyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analysis History</h1>
        <p className="text-muted-foreground mt-2">Review and compare your previous argument analyses</p>
      </div>

      <HistoryEmptyState />
    </div>
  )
}

