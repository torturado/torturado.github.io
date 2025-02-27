"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// This version number should be updated whenever you make changes to the changelog
const CURRENT_VERSION = '1.0.1'

interface Change {
  version: string
  date: string
  changes: string[]
}

const CHANGELOG: Change[] = [
  {
    version: '1.0.0',
    date: '2025-02-27',
    changes: [
      'Added tips/strategies and FAQ pages'
    ]
  },
  {
    version: '1.0.1',
    date: '2025-02-27',
    changes: [
      'Update robots.txt and sitemap.xml',
      'Replace Google Analytics with Umami Analytics'
    ]
  }
]

export function ChangelogModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen this version
    const lastSeenVersion = localStorage.getItem('lastSeenChangelogVersion')
    
    if (!lastSeenVersion || lastSeenVersion !== CURRENT_VERSION) {
      setIsOpen(true)
      // Update the last seen version
      localStorage.setItem('lastSeenChangelogVersion', CURRENT_VERSION)
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What's New</DialogTitle>
          <DialogDescription>
            Check out the latest improvements to the EXP Bank Calculator
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {CHANGELOG.map((change) => (
            <div key={change.version} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Version {change.version}</h3>
                <span className="text-sm text-muted-foreground">{change.date}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {change.changes.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
} 