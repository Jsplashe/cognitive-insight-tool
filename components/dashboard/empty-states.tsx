import { FileText, Brain, Plus, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function HistoryEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-6 mb-4">
        <FileText className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No arguments analyzed yet</h3>
      <p className="text-muted-foreground max-w-md mb-6">
        Start analyzing your arguments to track your reasoning progress and identify areas for improvement.
      </p>
      <Link href="/dashboard/analyze">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Start a New Analysis
        </Button>
      </Link>
    </div>
  )
}

export function InsightsEmptyState() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="p-6">
              <div className="h-5 w-1/3 bg-muted rounded-md animate-pulse mb-4" />
              <div className="h-4 w-1/2 bg-muted rounded-md animate-pulse mb-2" />
              <div className="h-20 w-full bg-muted rounded-md animate-pulse" />
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <Brain className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">Insights coming soon</h3>
          <p className="text-muted-foreground max-w-md mb-6">
            Once you analyze a few arguments, your insights will appear here.
          </p>
          <Link href="/dashboard/analyze">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Start a New Analysis
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
      <h3 className="text-lg font-medium">Loading...</h3>
      <p className="text-muted-foreground mt-1">Please wait while we process your request</p>
    </div>
  )
}

