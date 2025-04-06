"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Search, SlidersHorizontal, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for past analyses
const mockAnalyses = [
  {
    id: 1,
    title: "Climate Change Policy Analysis",
    date: "2023-06-15",
    score: 82,
    fallacies: ["Appeal to Authority", "Slippery Slope"],
    biases: ["Confirmation Bias"],
    category: "Environmental",
    excerpt: "This analysis examines the logical structure and evidence supporting current climate policy proposals...",
  },
  {
    id: 2,
    title: "Economic Impact Study",
    date: "2023-06-10",
    score: 76,
    fallacies: ["False Dichotomy", "Hasty Generalization", "Post Hoc"],
    biases: ["Recency Bias", "Anchoring Bias"],
    category: "Economics",
    excerpt: "An evaluation of the economic arguments presented in the quarterly financial outlook...",
  },
  {
    id: 3,
    title: "Healthcare Reform Proposal",
    date: "2023-06-05",
    score: 91,
    fallacies: ["Straw Man"],
    biases: ["Status Quo Bias"],
    category: "Healthcare",
    excerpt: "This document analyzes the reasoning behind proposed healthcare system changes...",
  },
  {
    id: 4,
    title: "Education System Critique",
    date: "2023-05-28",
    score: 68,
    fallacies: ["Appeal to Emotion", "False Analogy", "Cherry Picking", "Ad Hominem"],
    biases: ["Availability Bias", "Dunning-Kruger Effect", "Bandwagon Effect"],
    category: "Education",
    excerpt: "A critical examination of arguments for educational reform in public schools...",
  },
  {
    id: 5,
    title: "Technology Ethics Discussion",
    date: "2023-05-20",
    score: 85,
    fallacies: ["Appeal to Novelty", "Naturalistic Fallacy"],
    biases: ["Optimism Bias", "Pro-innovation Bias"],
    category: "Technology",
    excerpt: "This analysis evaluates ethical arguments surrounding emerging AI technologies...",
  },
  {
    id: 6,
    title: "Social Media Impact Analysis",
    date: "2023-05-15",
    score: 79,
    fallacies: ["Correlation vs. Causation", "Anecdotal Evidence", "Appeal to Popularity"],
    biases: ["Negativity Bias", "Selection Bias"],
    category: "Technology",
    excerpt: "An examination of claims regarding social media's impact on mental health...",
  },
  {
    id: 7,
    title: "Immigration Policy Review",
    date: "2023-05-10",
    score: 73,
    fallacies: ["Appeal to Tradition", "Genetic Fallacy", "No True Scotsman"],
    biases: ["In-group Bias", "Out-group Homogeneity"],
    category: "Politics",
    excerpt: "This document analyzes the logical structure of arguments in the immigration debate...",
  },
  {
    id: 8,
    title: "Criminal Justice Reform",
    date: "2023-05-05",
    score: 88,
    fallacies: ["False Equivalence", "Slippery Slope"],
    biases: ["Just-world Hypothesis"],
    category: "Law",
    excerpt: "A critical evaluation of reasoning in criminal justice reform proposals...",
  },
]

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredAnalyses, setFilteredAnalyses] = useState(mockAnalyses)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    if (!term.trim()) {
      setFilteredAnalyses(mockAnalyses)
      return
    }

    const filtered = mockAnalyses.filter(
      (analysis) =>
        analysis.title.toLowerCase().includes(term.toLowerCase()) ||
        analysis.category.toLowerCase().includes(term.toLowerCase()) ||
        analysis.fallacies.some((fallacy) => fallacy.toLowerCase().includes(term.toLowerCase())) ||
        analysis.biases.some((bias) => bias.toLowerCase().includes(term.toLowerCase())) ||
        analysis.score.toString().includes(term),
    )

    setFilteredAnalyses(filtered)
  }

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return "default"
    if (score >= 80) return "secondary"
    if (score >= 70) return "outline"
    return "destructive"
  }

  const handleCardClick = (id: number) => {
    console.log(`Clicked on analysis ${id}`)
    // This would navigate to a detailed view in a real app
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analysis History</h1>
        <p className="text-muted-foreground mt-2">Review and compare your previous argument analyses</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by keyword or score..."
            className="pl-8 w-full sm:w-[350px]"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Date (Newest First)</DropdownMenuItem>
                <DropdownMenuItem>Date (Oldest First)</DropdownMenuItem>
                <DropdownMenuItem>Score (Highest First)</DropdownMenuItem>
                <DropdownMenuItem>Score (Lowest First)</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>Environmental</DropdownMenuItem>
                <DropdownMenuItem>Economics</DropdownMenuItem>
                <DropdownMenuItem>Healthcare</DropdownMenuItem>
                <DropdownMenuItem>Education</DropdownMenuItem>
                <DropdownMenuItem>Technology</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnalyses.map((analysis) => (
          <Card
            key={analysis.id}
            className="cursor-pointer transition-all hover:shadow-md"
            onClick={() => handleCardClick(analysis.id)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="outline">{analysis.category}</Badge>
                <Badge variant={getScoreBadgeVariant(analysis.score)}>{analysis.score}/100</Badge>
              </div>
              <CardTitle className="mt-2 line-clamp-1">{analysis.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(analysis.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{analysis.excerpt}</p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {analysis.fallacies.slice(0, 3).map((fallacy, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {fallacy}
                  </Badge>
                ))}
                {analysis.fallacies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{analysis.fallacies.length - 3} more
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {analysis.biases.slice(0, 2).map((bias, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {bias}
                  </Badge>
                ))}
                {analysis.biases.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{analysis.biases.length - 2} more
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" size="sm" className="ml-auto">
                View Details
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredAnalyses.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No analyses found</h3>
          <p className="text-muted-foreground mt-1">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}

