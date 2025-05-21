"use client"

import * as React from "react"
import {
  Newspaper,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  ScrollText,
  Cable,
  Link,
  Plug,
  Star,
  BadgeDollarSign,
  HeartHandshake,
  BellRing,
  MessageSquareDot,
  Cat
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Amazozn.com",
      logo: GalleryVerticalEnd,
      plan: "www.amazon.com",
    },
    {
      name: "Flipkart.in.",
      logo: AudioWaveform,
      plan: "www.flipkart.in",
    },
    {
      name: "Myntra.in",
      logo: Command,
      plan: "www.myntra.in",
    },
  ],
  navMain: [
    {
      title: "Article",
      url: "#",
      icon: ScrollText,
      isActive: true,
      items: [
        {
          title: "Create Article",
          url: "#",
        },
        {
          title: "Generate Article",
          url: "#",
        },
        {
          title: "Keyword Project",
          url: "#",
        },
        {
          title: "AI Keyword to Article",
          url: "#",
        },
         {
          title: "Steal Competitor Keyword",
          url: "#",
        },
        {
          title: "Import Keyword from GSC",
          url: "#",
        },
        {
          title: "Mannual Keyword to Article",
          url: "#",
        },
         {
          title: "Bulk Keyword to Article",
          url: "#",
        },
        {
          title: "Longtail Keyword to Article",
          url: "#",
        },
        {
          title: "Article Setting",
          url: "#",
        }
      ],
    },
  ],
  projects: [
    {
      name: "Auto Blogs",
      url: "#",
      icon: Newspaper,
    },
    {
      name: "Internal Links",
      url: "#",
      icon: Cable,
    },
    {
      name: "Free Backlinks",
      url: "#",
      icon: Link,
    },
    {
      name: "Integreation",
      url: "#",
      icon: Plug,
    },
    {
      name: "Subscription",
      url: "#",
      icon: Star,
    },
    {
      name: "Affiliate Program",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      name: "Help Centre",
      url: "#",
      icon: HeartHandshake,
    },
    {
      name: "Updates",
      url: "#",
      icon: BellRing,
    },
    {
      name: "Live Chat Support",
      url: "#",
      icon: MessageSquareDot,
    },
    {
      name: "Profile",
      url: "#",
      icon: Cat,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
        
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain}/>
        <NavProjects projects={data.projects}  />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
