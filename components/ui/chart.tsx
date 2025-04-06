import * as React from "react"

const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className="rounded-md border bg-card text-card-foreground shadow-sm" {...props} />
})
Chart.displayName = "Chart"

const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className="relative" {...props} />
  },
)
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="pointer-events-none absolute z-50 origin-top-left rounded-md border bg-popover p-2 text-popover-foreground shadow-md animate-in fade-in zoom-in-95"
        {...props}
      />
    )
  },
)
ChartTooltip.displayName = "ChartTooltip"

interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  value?: string | number
}

const ChartTooltipContent = ({ label, value, className, ...props }: ChartTooltipContentProps) => {
  return (
    <div className={className} {...props}>
      {label && <div className="font-medium">{label}</div>}
      {value && <div>{value}</div>}
    </div>
  )
}
ChartTooltipContent.displayName = "ChartTooltipContent"

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent }

