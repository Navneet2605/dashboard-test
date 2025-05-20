"use client"; // Required for useState

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

const articles_datas = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword_traffic: "league of legends [240000]",
    words: 4575,
    created_on: "20 hours ago",
    action: "View",
    publish: true,
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword_traffic: "league of legends [240000]",
    words: 3480,
    created_on: "21 hours ago",
    action: "View",
    publish: true,
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword_traffic: "league of legends [240000]",
    words: 2676,
    created_on: "a day ago",
    action: "View",
    publish: true,
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword_traffic: "virtual executive assistant [2800]",
    words: 2408,
    created_on: "1 Oct, 24",
    action: "View",
    publish: true,
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword_traffic: "unlimited graphic design services [1800]",
    words: 793,
    created_on: "--",
    action: "View",
    publish: true,
  },
  {
    id: 6,
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword_traffic: "amazon payment methods [2400]",
    words: 2647,
    created_on: "--",
    action: "View",
    publish: true,
  },
  {
    id: 7,
    title: "Backlinks 101: What are backlinks and why they’re important [Free template]",
    keyword_traffic: "backlinks [8100]",
    words: 2281,
    created_on: "--",
    action: "View",
    publish: true,
  },
  {
    id: 8,
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword_traffic: "ai seo software [880]",
    words: 1543,
    created_on: "--",
    action: "View",
    publish: true,
  },
  {
    id: 9,
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword_traffic: "unlimited graphic design services [390]",
    words: 1974,
    created_on: "--",
    action: "View",
    publish: true,
  },
  {
    id: 10,
    title: "Mastering Jungle Role in League of Legends",
    keyword_traffic: "jungle role league of legends [150000]",
    words: 3120,
    created_on: "2 days ago",
    action: "View",
    publish: true,
  },
  {
    id: 11,
    title: "Virtual Assistants vs AI Tools: What's Better in 2024?",
    keyword_traffic: "ai vs virtual assistant [1700]",
    words: 1950,
    created_on: "5 days ago",
    action: "View",
    publish: true,
  },
  {
    id: 12,
    title: "How to Build High-Quality Backlinks in 2024",
    keyword_traffic: "build backlinks 2024 [4200]",
    words: 2210,
    created_on: "1 week ago",
    action: "View",
    publish: true,
  },
  {
    id: 13,
    title: "Top 5 Project Management Tools for Remote Teams",
    keyword_traffic: "project management tools [5400]",
    words: 3080,
    created_on: "3 days ago",
    action: "View",
    publish: true,
  },
  {
    id: 14,
    title: "10 Best Budgeting Apps in 2024",
    keyword_traffic: "budgeting apps [3300]",
    words: 2750,
    created_on: "4 days ago",
    action: "View",
    publish: true,
  },
  {
    id: 15,
    title: "How to Choose the Right Hosting Provider",
    keyword_traffic: "web hosting comparison [7100]",
    words: 3105,
    created_on: "2 weeks ago",
    action: "View",
    publish: true,
  },
  {
    id: 16,
    title: "Benefits of Automating Your Business Operations",
    keyword_traffic: "business automation [2900]",
    words: 2450,
    created_on: "6 days ago",
    action: "View",
    publish: true,
  },
  {
    id: 17,
    title: "Freelance vs Full-Time Jobs: What's Right for You?",
    keyword_traffic: "freelancing vs full-time [1300]",
    words: 2120,
    created_on: "7 days ago",
    action: "View",
    publish: true,
  },
  {
    id: 18,
    title: "Why Email Marketing Still Works in 2024",
    keyword_traffic: "email marketing [8200]",
    words: 2890,
    created_on: "8 days ago",
    action: "View",
    publish: true,
  },
  {
    id: 19,
    title: "Top Graphic Design Tools for Beginners",
    keyword_traffic: "graphic design tools [4600]",
    words: 2630,
    created_on: "9 days ago",
    action: "View",
    publish: true,
  },
  {
    id: 20,
    title: "Best Payment Gateways for Small Businesses",
    keyword_traffic: "payment gateway [3400]",
    words: 2375,
    created_on: "10 days ago",
    action: "View",
    publish: true,
  },
];
export function TableDemo() {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const handleRowToggle = (itemId: number) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = new Set(prevSelectedItems);
      if (newSelectedItems.has(itemId)) {
        newSelectedItems.delete(itemId);
      } else {
        newSelectedItems.add(itemId);
      }
      return newSelectedItems;
    });
  };

  const handleSelectAllToggle = () => {
    if (selectedItems.size === articles_datas.length) {
      setSelectedItems(new Set()); // Deselect all
    } else {
      // Select all
      setSelectedItems(new Set(articles_datas.map((item) => item.id)));
    }
  };

  const isAllItemsSelected =
    articles_datas.length > 0 &&
    selectedItems.size === articles_datas.length;

  return (
    <Table>
      <TableCaption>A list of your articles.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <input
              type="checkbox"
              checked={isAllItemsSelected}
              onChange={handleSelectAllToggle}
              aria-label="Select all rows"
            />
          </TableHead>
          <TableHead className="w-[100px]">Article Title</TableHead>
          <TableHead>Keyword [Traffic]</TableHead>
          <TableHead>Words</TableHead>
          <TableHead className="text-right">Created On</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Publish</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {articles_datas.map((data) => (
          <TableRow key={data.id} data-state={selectedItems.has(data.id) ? "selected" : ""}>
            <TableCell>
              <input
                type="checkbox"
                checked={selectedItems.has(data.id)}
                onChange={() => handleRowToggle(data.id)}
                aria-labelledby={`select-row-${data.id}`}
              />
            </TableCell>
            <TableCell className="font-medium" id={`select-row-${data.id}`}>{data.title}</TableCell>
            <TableCell>{data.keyword_traffic}</TableCell>
            <TableCell>{data.words}</TableCell>
            <TableCell className="text-right">{data.created_on}</TableCell>
            <TableCell><Button variant="outline" className="text-green-600 border-green-400">{data.action}</Button></TableCell>
            <TableCell>{data.publish ? "Yes" : "No"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
