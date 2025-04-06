"use client"

import { ArrowLeft, Brain, Check, AlertCircle, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ArgumentDetailPage({ params }: { params: { id: string } }) {
  // Mock data for the argument details
  const argumentDetails = {
    id: params.id,
    title: "Climate Change Policy Analysis",
    date: "June 15, 2023",
    category: "Environmental",
    score: 82,
    text: `The argument that climate change is primarily caused by human activities is supported by overwhelming scientific evidence. Multiple independent lines of research have confirmed that the increase in greenhouse gases in the atmosphere, particularly carbon dioxide, is directly linked to human activities such as burning fossil fuels and deforestation.

Critics often claim that natural climate cycles explain the observed warming, but this ignores the unprecedented rate of temperature increase over the past century. While natural factors do influence climate, they cannot account for the rapid warming trend we are currently experiencing.

Some policymakers argue that transitioning to renewable energy would devastate the economy, creating a false dichotomy between environmental protection and economic prosperity. However, numerous studies have shown that investments in green technology can create jobs and stimulate economic growth.

The scientific consensus on climate change is based on decades of research by thousands of scientists worldwide. While some uncertainty exists about specific regional impacts, the fundamental understanding that human activities are driving global warming is well-established.

Therefore, implementing comprehensive climate policies is not only environmentally necessary but can also be economically beneficial in the long term.`,
    fallacies: [
      {
        type: "Appeal to Authority",
        description: "Relying on scientific consensus without addressing specific evidence",
        severity: "medium",
        suggestion: "Include specific data points and research findings rather than just citing consensus",
      },
      {
        type: "False Dichotomy",
        description: "Presenting environmental protection and economic prosperity as mutually exclusive",
        severity: "high",
        suggestion: "Explore the nuanced relationship between environmental and economic factors",
      },
    ],
    biases: [
      {
        type: "Confirmation Bias",
        description: "Focusing primarily on evidence that supports human-caused climate change",
        suggestion: "Acknowledge and address legitimate scientific uncertainties and alternative viewpoints",
      },
    ],
    suggestions: [
      "Incorporate more specific data points and research findings",
      "Acknowledge legitimate uncertainties in climate science",
      "Provide more concrete examples of economic benefits from climate policies",
      "Address counterarguments more thoroughly",
      "Use more precise language when discussing scientific consensus",
    ],
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "low":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
            Low
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">
            Medium
          </Badge>
        )
      case "high":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
            High
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/history">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to History
          </Button>
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Argument Details</h1>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline">{argumentDetails.category}</Badge>
          <span className="text-sm text-muted-foreground">{argumentDetails.date}</span>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{argumentDetails.title}</CardTitle>
          <CardDescription>Full argument text</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-line text-sm">{argumentDetails.text}</div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Fallacies Detected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{argumentDetails.fallacies.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Biases Detected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{argumentDetails.biases.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cognitive Rigor Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${getScoreColor(argumentDetails.score)}`}>
              {argumentDetails.score}/100
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Logical Fallacies
            </CardTitle>
            <CardDescription>Issues that weaken your argument</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {argumentDetails.fallacies.map((fallacy, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{fallacy.type}</h3>
                    {getSeverityBadge(fallacy.severity)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{fallacy.description}</p>
                  <div className="flex items-start gap-2 bg-muted/50 p-3 rounded-md">
                    <Check className="h-4 w-4 text-green-600 mt-0.5" />
                    <p className="text-sm">{fallacy.suggestion}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Cognitive Biases
            </CardTitle>
            <CardDescription>Biases that may influence your reasoning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {argumentDetails.biases.map((bias, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{bias.type}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{bias.description}</p>
                  <div className="flex items-start gap-2 bg-muted/50 p-3 rounded-md">
                    <Check className="h-4 w-4 text-green-600 mt-0.5" />
                    <p className="text-sm">{bias.suggestion}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Suggestions for Improvement
          </CardTitle>
          <CardDescription>Follow these recommendations to strengthen your argument</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {argumentDetails.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5" />
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

