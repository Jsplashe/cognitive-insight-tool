"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { AnalysisSummary } from "@/components/dashboard/analysis-summary"

export default function AnalyzePage() {
  const [text, setText] = useState("")
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<null | {
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
  }>(null)

  const handleAnalyze = () => {
    if (!text.trim()) return

    setAnalyzing(true)

    // Simulate API call with animation
    setTimeout(() => {
      setResults({
        score: 72,
        fallacies: [
          {
            type: "Appeal to Authority",
            description: "Relying on expert opinion without addressing the actual argument",
            severity: "medium",
            suggestion: "Support expert opinions with factual evidence and logical reasoning",
          },
          {
            type: "False Dichotomy",
            description: "Presenting only two options when others exist",
            severity: "high",
            suggestion: "Consider and acknowledge the full spectrum of possibilities",
          },
        ],
        biases: [
          {
            type: "Confirmation Bias",
            description: "Seeking information that confirms existing beliefs while ignoring contradictory evidence",
            suggestion: "Actively seek out and consider evidence that contradicts your position",
          },
        ],
      })
      setAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analyze Argument</h1>
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
            <Button
              onClick={handleAnalyze}
              disabled={text.length < 100 || analyzing}
              className="relative overflow-hidden transition-all duration-200 active:scale-95"
            >
              {analyzing ? (
                <>
                  <span className="animate-pulse">Analyzing...</span>
                  <span className="absolute inset-0 bg-primary/10 animate-pulse"></span>
                </>
              ) : (
                "Analyze Text"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {results && <AnalysisSummary {...results} />}
    </div>
  )
}

