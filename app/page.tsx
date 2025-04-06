import Link from "next/link"
import { ArrowRight, Brain, BarChart3, FileText, Zap, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CIT</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#use-cases" className="text-sm font-medium hover:text-primary">
              Use Cases
            </Link>
            <Link href="#tech" className="text-sm font-medium hover:text-primary">
              Tech Stack
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Enhance Your Reasoning.
                  <br />
                  Sharpen Your Arguments.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Cognitive Insight Tool uses AI to analyze arguments, detect logical fallacies, and provide
                  personalized reasoning insights.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/dashboard">
                  <Button size="lg" className="mt-4">
                    Try CIT Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-12 w-full max-w-4xl rounded-lg border bg-card p-4 shadow-lg">
                <img
                  src="/placeholder.svg?height=600&width=1200"
                  alt="CIT Dashboard Preview"
                  className="rounded-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">How It Works</h2>
              <p className="text-gray-500 md:text-lg max-w-[800px]">
                Three simple steps to enhance your reasoning and arguments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Input Argument</h3>
                <p className="text-gray-500">Paste your text, article, or argument into our intuitive interface</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. AI Analysis</h3>
                <p className="text-gray-500">
                  Our AI engine analyzes your content for logical fallacies and cognitive biases
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Personalized Insights</h3>
                <p className="text-gray-500">Receive detailed feedback and actionable recommendations to improve</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Core Features</h2>
              <p className="text-gray-500 md:text-lg max-w-[800px]">
                Powerful tools to enhance your critical thinking and argumentation
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col p-6 rounded-xl border bg-card shadow-sm">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">AI Argument Analysis</h3>
                <p className="text-gray-500">
                  Advanced AI algorithms analyze your arguments for structure, evidence, and reasoning
                </p>
              </div>
              <div className="flex flex-col p-6 rounded-xl border bg-card shadow-sm">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Cognitive Rigor Score</h3>
                <p className="text-gray-500">
                  Get a quantifiable score that measures the logical strength of your arguments
                </p>
              </div>
              <div className="flex flex-col p-6 rounded-xl border bg-card shadow-sm">
                <FileText className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Historical Insight Dashboard</h3>
                <p className="text-gray-500">Track your progress over time and see how your reasoning improves</p>
              </div>
              <div className="flex flex-col p-6 rounded-xl border bg-card shadow-sm">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-Time Fallacy Detection</h3>
                <p className="text-gray-500">
                  Instantly identify logical fallacies and cognitive biases in your writing
                </p>
              </div>
              <div className="flex flex-col p-6 rounded-xl border bg-card shadow-sm">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Personalized Reasoning Tips</h3>
                <p className="text-gray-500">Receive tailored recommendations to strengthen your arguments</p>
              </div>
              <div className="flex flex-col p-6 rounded-xl border bg-card shadow-sm">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Collaborative Analysis</h3>
                <p className="text-gray-500">Share analyses with peers and collaborate on improving arguments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Use Cases</h2>
              <p className="text-gray-500 md:text-lg max-w-[800px]">
                CIT helps professionals across various fields improve their reasoning
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="flex flex-col items-center p-6 rounded-lg bg-card shadow-sm">
                <img src="/placeholder.svg?height=80&width=80" alt="Students" className="h-16 w-16 mb-4 rounded-full" />
                <h3 className="text-lg font-bold">Students</h3>
                <p className="text-gray-500 text-sm text-center">Improve essays and research papers</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-lg bg-card shadow-sm">
                <img src="/placeholder.svg?height=80&width=80" alt="Lawyers" className="h-16 w-16 mb-4 rounded-full" />
                <h3 className="text-lg font-bold">Lawyers</h3>
                <p className="text-gray-500 text-sm text-center">Strengthen legal arguments</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-lg bg-card shadow-sm">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Journalists"
                  className="h-16 w-16 mb-4 rounded-full"
                />
                <h3 className="text-lg font-bold">Journalists</h3>
                <p className="text-gray-500 text-sm text-center">Ensure balanced reporting</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-lg bg-card shadow-sm">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Researchers"
                  className="h-16 w-16 mb-4 rounded-full"
                />
                <h3 className="text-lg font-bold">Researchers</h3>
                <p className="text-gray-500 text-sm text-center">Validate research methodologies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Tech Stack</h2>
              <p className="text-gray-500 md:text-lg max-w-[800px]">
                Built with cutting-edge technologies for performance and reliability
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex flex-col items-center p-4">
                <img src="/placeholder.svg?height=60&width=60" alt="Vercel" className="h-12 w-12 mb-2" />
                <span className="text-sm font-medium">Vercel</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <img src="/placeholder.svg?height=60&width=60" alt="Supabase" className="h-12 w-12 mb-2" />
                <span className="text-sm font-medium">Supabase</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <img src="/placeholder.svg?height=60&width=60" alt="OpenAI" className="h-12 w-12 mb-2" />
                <span className="text-sm font-medium">OpenAI</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <img src="/placeholder.svg?height=60&width=60" alt="Next.js" className="h-12 w-12 mb-2" />
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <img src="/placeholder.svg?height=60&width=60" alt="React" className="h-12 w-12 mb-2" />
                <span className="text-sm font-medium">React</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Enhance Your Reasoning?</h2>
              <p className="md:text-lg max-w-[800px]">
                Join thousands of professionals who are improving their critical thinking skills with CIT
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/dashboard">
                  <Button size="lg" variant="secondary">
                    Sign Up Free
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Log In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">CIT</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="#" className="hover:text-primary">
                Terms
              </Link>
              <Link href="#" className="hover:text-primary">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary">
                Contact
              </Link>
            </div>
            <div className="text-sm text-gray-500">© 2025 Cognitive Insight Tool. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

