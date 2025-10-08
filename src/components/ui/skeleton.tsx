import * as React from "react"
import { cn } from "@/lib/utils"

function Skeleton({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-busy="true"
      className={cn("animate-pulse bg-muted/30 rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
