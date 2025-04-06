"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertConfigPanel } from "@/components/dashboard/alert-config-panel"

export default function SettingsPage() {
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john.doe@example.com")
  const [enableSuggestions, setEnableSuggestions] = useState(true)
  const [showBiasAlerts, setShowBiasAlerts] = useState(true)
  const [useSimpleLanguage, setUseSimpleLanguage] = useState(false)
  const [feedbackTone, setFeedbackTone] = useState("detailed")
  const [theme, setTheme] = useState("light")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="preferences" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="alerts">Alert Configuration</TabsTrigger>
        </TabsList>

        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Preferences</CardTitle>
              <CardDescription>Customize how the Cognitive Insight Tool analyzes your arguments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-suggestions">Enable Suggestions</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive personalized suggestions to improve your arguments
                    </p>
                  </div>
                  <Switch id="enable-suggestions" checked={enableSuggestions} onCheckedChange={setEnableSuggestions} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-bias-alerts">Show Bias Alerts</Label>
                    <p className="text-sm text-muted-foreground">Highlight cognitive biases in your reasoning</p>
                  </div>
                  <Switch id="show-bias-alerts" checked={showBiasAlerts} onCheckedChange={setShowBiasAlerts} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="use-simple-language">Use Simple Language</Label>
                    <p className="text-sm text-muted-foreground">
                      Present feedback using simpler, more accessible language
                    </p>
                  </div>
                  <Switch id="use-simple-language" checked={useSimpleLanguage} onCheckedChange={setUseSimpleLanguage} />
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Preferred Tone of Feedback</Label>
                <RadioGroup value={feedbackTone} onValueChange={setFeedbackTone}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="brief" id="brief" />
                    <Label htmlFor="brief">Brief</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="detailed" id="detailed" />
                    <Label htmlFor="detailed">Detailed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="conversational" id="conversational" />
                    <Label htmlFor="conversational">Conversational</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label htmlFor="theme">UI Theme</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        <span>Light</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        <span>Dark</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="system">
                      <div className="flex items-center gap-2">
                        <span>System</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <Button size="sm" variant="outline">
                    Change Avatar
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 py-2">
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="md:text-right">
                    Name
                  </Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="md:col-span-3" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="md:text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="md:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="md:text-right">
                    Username
                  </Label>
                  <Input id="username" value="johndoe" disabled className="md:col-span-3" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Profile</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <AlertConfigPanel />
        </TabsContent>
      </Tabs>
    </div>
  )
}

