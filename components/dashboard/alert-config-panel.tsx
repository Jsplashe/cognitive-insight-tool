"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function AlertConfigPanel() {
  const [notificationMethod, setNotificationMethod] = useState("dashboard")
  const [selectedFallacies, setSelectedFallacies] = useState<string[]>(["confirmation_bias", "strawman", "ad_hominem"])

  const fallacies = [
    { id: "confirmation_bias", label: "Confirmation Bias" },
    { id: "strawman", label: "Strawman" },
    { id: "ad_hominem", label: "Ad Hominem" },
    { id: "false_cause", label: "False Cause" },
    { id: "appeal_to_authority", label: "Appeal to Authority" },
    { id: "bandwagon", label: "Bandwagon Fallacy" },
    { id: "black_and_white", label: "Black and White Fallacy" },
    { id: "slippery_slope", label: "Slippery Slope" },
  ]

  const toggleFallacy = (id: string) => {
    if (selectedFallacies.includes(id)) {
      setSelectedFallacies(selectedFallacies.filter((item) => item !== id))
    } else {
      setSelectedFallacies([...selectedFallacies, id])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Alert Configuration
        </CardTitle>
        <CardDescription>Configure which fallacies and biases trigger alerts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">Alert me when these are detected:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fallacies.map((fallacy) => (
              <div key={fallacy.id} className="flex items-center space-x-2">
                <Checkbox
                  id={fallacy.id}
                  checked={selectedFallacies.includes(fallacy.id)}
                  onCheckedChange={() => toggleFallacy(fallacy.id)}
                />
                <Label htmlFor={fallacy.id} className="text-sm">
                  {fallacy.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label htmlFor="notification-method">Notification Method</Label>
          <Select value={notificationMethod} onValueChange={setNotificationMethod}>
            <SelectTrigger id="notification-method" className="w-full md:w-[250px]">
              <SelectValue placeholder="Select notification method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="dashboard">Dashboard</SelectItem>
              <SelectItem value="popup">Popup</SelectItem>
              <SelectItem value="all">All Methods</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground mt-2">
            {notificationMethod === "email" &&
              "You will receive email notifications when selected fallacies are detected."}
            {notificationMethod === "dashboard" && "Alerts will appear in your dashboard notification center."}
            {notificationMethod === "popup" && "You will see popup notifications when selected fallacies are detected."}
            {notificationMethod === "all" && "You will receive notifications through all available channels."}
          </p>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>Alert Frequency</Label>
          <div className="flex items-center space-x-2">
            <Checkbox id="immediate" checked />
            <Label htmlFor="immediate" className="text-sm">
              Immediate
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="daily-digest" />
            <Label htmlFor="daily-digest" className="text-sm">
              Daily Digest
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="weekly-summary" />
            <Label htmlFor="weekly-summary" className="text-sm">
              Weekly Summary
            </Label>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Alert Settings</Button>
      </CardFooter>
    </Card>
  )
}

