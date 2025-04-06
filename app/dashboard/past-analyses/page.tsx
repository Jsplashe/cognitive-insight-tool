"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const analyses = [
  {
    id: 1,
    title: "Climate Change Policy Analysis",
    date: "2023-06-15",
    score: 82,
    fallacies: 3,
    biases: 2,
    category: "Environmental",
  },
  {
    id: 2,
    title: "Economic Impact Study",
    date: "2023-06-10",
    score: 76,
    fallacies: 5,
    biases: 3,
    category: "Economics",
  },
  {
    id: 3,
    title: "Healthcare Reform Proposal",
    date: "2023-06-05",
    score: 91,
    fallacies: 1,
    biases: 1,
    category: "Healthcare",
  },
  {
    id: 4,
    title: "Education System Critique",
    date: "2023-05-28",
    score: 68,
    fallacies: 7,
    biases: 4,
    category: "Education",
  },
  {
    id: 5,
    title: "Technology Ethics Discussion",
    date: "2023-05-20",
    score: 85,
    fallacies: 2,
    biases: 3,
    category: "Technology",
  },
  {
    id: 6,
    title: "Social Media Impact Analysis",
    date: "2023-05-15",
    score: 79,
    fallacies: 4,
    biases: 2,
    category: "Technology",
  },
  {
    id: 7,
    title: "Immigration Policy Review",
    date: "2023-05-10",
    score: 73,
    fallacies: 6,
    biases: 3,
    category: "Politics",
  },
  {
    id: 8,
    title: "Criminal Justice Reform",
    date: "2023-05-05",
    score: 88,
    fallacies: 2,
    biases: 1,
    category: "Law",
  },
]

export default function PastAnalysesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredAnalyses, setFilteredAnalyses] = useState(analyses)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    if (!term.trim()) {
      setFilteredAnalyses(analyses)
      return
    }

    const filtered = analyses.filter(
      (analysis) =>
        analysis.title.toLowerCase().includes(term.toLowerCase()) ||
        analysis.category.toLowerCase().includes(term.toLowerCase()),
    )

    setFilteredAnalyses(filtered)
  }

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return "default"
    if (score >= 80) return "secondary"
    if (score >= 70) return "outline"
    return "destructive"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Past Analyses</h1>
        <p className="text-muted-foreground mt-2">Review and compare your previous argument analyses</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Analysis History</CardTitle>
              <CardDescription>You have completed {analyses.length} analyses</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search analyses..."
                  className="w-[200px] pl-8"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="h-4 w-4" />
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
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Fallacies</TableHead>
                <TableHead>Biases</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAnalyses.map((analysis) => (
                <TableRow key={analysis.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      {analysis.title}
                    </div>
                  </TableCell>
                  <TableCell>{analysis.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{analysis.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getScoreBadgeVariant(analysis.score)}>{analysis.score}/100</Badge>
                  </TableCell>
                  <TableCell>{analysis.fallacies}</TableCell>
                  <TableCell>{analysis.biases}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

