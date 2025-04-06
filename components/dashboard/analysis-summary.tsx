"use client"

import { AlertCircle, Brain, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface AnalysisSummaryProps {
  score: number
  fallacies: Array<{
    type: string
    description: string
    severity: "low" | "medium" | "high"
    suggestion: string
  }>
  biases: Array<{
    type: string
    description: string
    suggestion: string
  }>
}

export function AnalysisSummary({ score, fallacies, biases }: AnalysisSummaryProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI Analysis Summary
          </CardTitle>
          <CardDescription>Overview of your argument analysis results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Fallacies Detected</h3>
              <p className="text-3xl font-bold">{fallacies.length}</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Biases Detected</h3>
              <p className="text-3xl font-bold">{biases.length}</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Cognitive Rigor Score</h3>
              <p className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}</p>
              <Progress value={score} className="w-full mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>

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
              {fallacies.map((fallacy, index) => (
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
              {biases.map((bias, index) => (
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
    </div>
  )
}

