import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-0 shadow-sm",
        // Cool hover animations
        "transform transition-all duration-500 ease-out",
        "hover:scale-105 hover:-translate-y-2 hover:rotate-1",
        "hover:shadow-2xl hover:shadow-blue-500/25",
        "hover:border-blue-400/50",
        "group cursor-pointer",
        // Add subtle glow effect
        "hover:bg-gradient-to-br hover:from-card hover:to-blue-50/5 dark:hover:to-blue-950/10",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        // Animation for header content
        "transition-transform duration-300 ease-out group-hover:translate-x-1",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-none font-semibold",
        // Title animation
        "transition-all duration-300 ease-out",
        "group-hover:text-blue-600 dark:group-hover:text-blue-400",
        "group-hover:scale-105",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-muted-foreground text-sm",
        // Description fade and slide
        "transition-all duration-500 ease-out delay-75",
        "group-hover:text-foreground/80 group-hover:translate-x-2",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        // Action button animation
        "transition-all duration-300 ease-out",
        "group-hover:scale-110 group-hover:-translate-y-1",
        "group-hover:rotate-12",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6",
        // Content slide up animation
        "transition-transform duration-400 ease-out delay-100",
        "group-hover:-translate-y-1",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 [.border-t]:pt-6",
        // Footer slide and fade
        "transition-all duration-500 ease-out delay-150",
        "group-hover:translate-x-2 group-hover:opacity-90",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}