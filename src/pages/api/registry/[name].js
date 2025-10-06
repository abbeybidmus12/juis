// src/pages/api/registry/[name].js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { name } = req.query;
  
  // Get all components from the filesystem
  const componentsDir = path.join(process.cwd(), 'src', 'ui', 'components');
  let allComponents = {};
  
  try {
    if (fs.existsSync(componentsDir)) {
      const files = fs.readdirSync(componentsDir);
      
      files.forEach(file => {
        if (file.endsWith('.tsx')) {
          const componentName = file.replace('.tsx', '').toLowerCase();
          const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
          
          allComponents[componentName] = {
            name: componentName,
            type: 'registry:ui',
            files: [
              {
                path: `components/ui/${componentName}.tsx`,
                content: content
              }
            ],
            dependencies: [
              { name: "@subframe/core", version: "latest" }
            ]
          };
        }
      });
    }
  } catch (error) {
    console.error('Error loading components:', error);
  }
  
  // Add some predefined components with special handling
  const components = {
    'button': {
      name: 'button',
      type: 'registry:ui',
      files: [
        {
          path: 'components/ui/button.tsx',
          content: `"use client"
 
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
 
import { cn } from "@/lib/utils"
 
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
 
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"
 
export { Button, buttonVariants }`
        },
        {
          path: 'lib/utils.ts',
          content: `import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`
        }
      ],
      dependencies: [
        { name: "class-variance-authority", version: "^0.7.0" },
        { name: "clsx", version: "^2.0.0" },
        { name: "tailwind-merge", version: "^2.0.0" },
        { name: "@radix-ui/react-slot", version: "^1.0.2" }
      ]
    },
    'card': {
      name: 'card',
      type: 'registry:ui',
      files: [
        {
          path: 'components/ui/card.tsx',
          content: `import * as React from "react"
 
import { cn } from "@/lib/utils"
 
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"
 
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"
 
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"
 
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
 
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"
 
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"
 
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
`
        }
      ],
      dependencies: []
    }
  };

  // Merge predefined components with auto-loaded components
  const allAvailableComponents = { ...allComponents, ...components };

  // Check if the requested component exists
  if (!allAvailableComponents[name]) {
    return res.status(404).json({ error: `Component '${name}' not found` });
  }

  // Return the component data
  res.status(200).json(allAvailableComponents[name]);
}