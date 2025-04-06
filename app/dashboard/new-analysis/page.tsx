"use client"

import { useState } from "react"
import { AlertCircle, Brain, Check, FileText, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewAnalysisPage() {
  const [text, setText] = useState("")
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<null | {
    score: number
    fallacies: Array<{
      type: string
      description: string
      severity: "low" | "medium" | "high"
    }>
    biases: Array<{
      type: string
      description: string
    }>
    recommendations: Array<string>
  }>(null)

  const handleAnalyze = () => {
    if (!text.trim()) return

    setAnalyzing(true)

    // Simulate API call
    setTimeout(() => {
      setResults({
        score: 72,
        fallacies: [
          {
            type: "Appeal to Authority",
            description: "Relying on expert opinion without addressing the actual argument",
            severity: "medium",
          },
          {
            type: "False Dichotomy",
            description: "Presenting only two options when others exist",
            severity: "high",
          },
          {
            type: "Slippery Slope",
            description: "Suggesting that one small step will lead to extreme consequences",
            severity: "low",
          },
        ],
        biases: [
          {
            type: "Confirmation Bias",
            description: "Seeking information that confirms existing beliefs",
          },
          {
            type: "Recency Bias",
            description: "Giving more weight to recent events than older ones",
          },
        ],
        recommendations: [
          "Consider alternative viewpoints to strengthen your argument",
          "Provide more empirical evidence to support your claims",
          "Address potential counterarguments proactively",
          "Use more precise language to avoid ambiguity",
        ],
      })
      setAnalyzing(false)
    }, 2000)
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

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">New Analysis</h1>
        <p className="text-muted-foreground mt-2">
          Paste your argument or text to analyze for logical fallacies and cognitive biases
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Text</CardTitle>
          <CardDescription>Enter the text you want to analyze (minimum 100 characters)</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Paste your argument or text here..."
            className="min-h-[200px]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="mt-4 flex justify-end">
            <Button onClick={handleAnalyze} disabled={text.length < 100 || analyzing}>
              {analyzing ? "Analyzing..." : "Analyze Text"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {results && (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Cognitive Rigor Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-4xl font-bold ${getScoreColor(results.score)}`}>{results.score}</div>
                <Progress value={results.score} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  {results.score >= 90
                    ? "Excellent reasoning"
                    : results.score >= 70
                      ? "Good reasoning with some issues"
                      : "Needs significant improvement"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Fallacies Detected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{results.fallacies.length}</div>
                <div className="flex gap-2 mt-2">
                  {results.fallacies.slice(0, 3).map((fallacy, index) => (
                    <Badge key={index} variant="outline">
                      {fallacy.type}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Cognitive Biases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{results.biases.length}</div>
                <div className="flex gap-2 mt-2">
                  {results.biases.slice(0, 3).map((bias, index) => (
                    <Badge key={index} variant="outline">
                      {bias.type}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="fallacies">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fallacies">Fallacies</TabsTrigger>
              <TabsTrigger value="biases">Biases</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            <TabsContent value="fallacies" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Logical Fallacies Detected
                  </CardTitle>
                  <CardDescription>These logical fallacies weaken your argument</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.fallacies.map((fallacy, index) => (
                      <Alert key={index} className={getSeverityColor(fallacy.severity)}>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>{fallacy.type}</AlertTitle>
                        <AlertDescription>{fallacy.description}</AlertDescription>
                      </Alert>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="biases" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Cognitive Biases Identified
                  </CardTitle>
                  <CardDescription>These biases may be influencing your reasoning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.biases.map((bias, index) => (
                      <Alert key={index}>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>{bias.type}</AlertTitle>
                        <AlertDescription>{bias.description}</AlertDescription>
                      </Alert>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recommendations" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Recommendations for Improvement
                  </CardTitle>
                  <CardDescription>Follow these suggestions to strengthen your argument</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {results.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <p>{recommendation}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

