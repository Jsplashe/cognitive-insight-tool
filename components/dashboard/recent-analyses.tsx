import { FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const recentAnalyses = [
  {
    id: 1,
    title: "Climate Change Policy Analysis",
    date: "2 hours ago",
    score: 82,
    fallacies: 3,
  },
  {
    id: 2,
    title: "Economic Impact Study",
    date: "Yesterday",
    score: 76,
    fallacies: 5,
  },
  {
    id: 3,
    title: "Healthcare Reform Proposal",
    date: "3 days ago",
    score: 91,
    fallacies: 1,
  },
  {
    id: 4,
    title: "Education System Critique",
    date: "1 week ago",
    score: 68,
    fallacies: 7,
  },
]

export function RecentAnalyses() {
  return (
    <div className="space-y-4">
      {recentAnalyses.map((analysis) => (
        <div key={analysis.id} className="flex items-center justify-between p-3 rounded-lg border">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-md">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-medium">{analysis.title}</h4>
              <p className="text-xs text-muted-foreground">{analysis.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={analysis.score > 80 ? "default" : analysis.score > 70 ? "secondary" : "outline"}
              className="text-xs"
            >
              {analysis.score}/100
            </Badge>
            <Badge variant="outline" className="text-xs">
              {analysis.fallacies} {analysis.fallacies === 1 ? "fallacy" : "fallacies"}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

