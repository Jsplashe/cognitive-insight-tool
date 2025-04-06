"use client"

import { Brain, Target, TrendingUp, AlertCircle, ArrowUpRight, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock data for insights
const commonFallacies = [
  { name: "Appeal to Authority", count: 8, percentage: 24 },
  { name: "False Dichotomy", count: 6, percentage: 18 },
  { name: "Slippery Slope", count: 5, percentage: 15 },
  { name: "Ad Hominem", count: 4, percentage: 12 },
  { name: "Straw Man", count: 3, percentage: 9 },
]

const commonBiases = [
  { name: "Confirmation Bias", count: 12, percentage: 32 },
  { name: "Recency Bias", count: 8, percentage: 21 },
  { name: "Availability Bias", count: 6, percentage: 16 },
  { name: "Anchoring Bias", count: 5, percentage: 13 },
  { name: "Dunning-Kruger Effect", count: 4, percentage: 11 },
]

const scoreHistory = [
  { id: 1, score: 65 },
  { id: 2, score: 68 },
  { id: 3, score: 72 },
  { id: 4, score: 70 },
  { id: 5, score: 75 },
  { id: 6, score: 73 },
  { id: 7, score: 78 },
  { id: 8, score: 82 },
  { id: 9, score: 80 },
  { id: 10, score: 84 },
]

const averageScore = scoreHistory.reduce((sum, item) => sum + item.score, 0) / scoreHistory.length
const scoreImprovement = scoreHistory[scoreHistory.length - 1].score - scoreHistory[0].score

export default function InsightsPage() {
  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Insights</h1>
          <p className="text-muted-foreground mt-2">
            Analyze your reasoning patterns and track your improvement over time
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Cognitive Score</CardTitle>
              <CardDescription>Based on your last 10 analyses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{Math.round(averageScore)}</div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5" />+{scoreImprovement} pts
                </Badge>
              </div>
              <Progress value={averageScore} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {averageScore >= 90
                  ? "Excellent reasoning skills"
                  : averageScore >= 80
                    ? "Strong reasoning with minor issues"
                    : averageScore >= 70
                      ? "Good reasoning with some issues"
                      : "Needs significant improvement"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Suggested Focus Area</CardTitle>
              <CardDescription>Based on your most common issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Avoid Confirmation Bias</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      You tend to seek information that confirms your existing beliefs
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 p-3 rounded-md">
                  <h4 className="text-sm font-medium mb-1">Improvement Strategy</h4>
                  <p className="text-sm text-muted-foreground">
                    Actively seek out and consider evidence that contradicts your position before forming conclusions
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Learning Resources
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Recent Improvement</CardTitle>
              <CardDescription>Your progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">+19 points</div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Improving
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>First Analysis</span>
                  <span className="font-medium">{scoreHistory[0].score}</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                    style={{ width: `${scoreHistory[0].score}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Latest Analysis</span>
                  <span className="font-medium">{scoreHistory[scoreHistory.length - 1].score}</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                    style={{ width: `${scoreHistory[scoreHistory.length - 1].score}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-xs text-muted-foreground">Note: Connect Recharts here post-export</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="fallacies">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="fallacies">Common Fallacies</TabsTrigger>
            <TabsTrigger value="biases">Common Biases</TabsTrigger>
          </TabsList>
          <TabsContent value="fallacies" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Most Common Logical Fallacies
                </CardTitle>
                <CardDescription>Frequency of logical fallacies detected in your arguments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {commonFallacies.map((fallacy, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{fallacy.name}</span>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-[200px] text-xs">
                                {fallacy.name} is a logical error where the argument's conclusion doesn't follow from
                                its premises.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <span className="text-sm text-muted-foreground">{fallacy.count} occurrences</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${fallacy.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-xs text-muted-foreground">Note: Connect Recharts here post-export</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Detailed Fallacy Report
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="biases" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Most Common Cognitive Biases
                </CardTitle>
                <CardDescription>Frequency of cognitive biases detected in your reasoning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {commonBiases.map((bias, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{bias.name}</span>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-[200px] text-xs">
                                {bias.name} is a systematic error in thinking that affects judgments and decisions.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <span className="text-sm text-muted-foreground">{bias.count} occurrences</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${bias.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-xs text-muted-foreground">Note: Connect Recharts here post-export</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Detailed Bias Report
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </TooltipProvider>
  )
}

