"use client";

import { Email, getAllEmails } from "@/db/emails";
import {
  Megaphone,
  MessageSquareText,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const categories = [
  {
    name: "primary",
    displayName: "Primary",
    accentColor: "rgb(0,122,255)",
    icon: <UserRound />,
  },
  {
    name: "transactions",
    displayName: "Transactions",
    accentColor: "rgb(52,199,89)",
    icon: <ShoppingCart />,
  },
  {
    name: "updates",
    displayName: "Updates",
    accentColor: "rgb(88,86,214)",
    icon: <MessageSquareText />,
  },
  {
    name: "promotions",
    displayName: "Promotions",
    accentColor: "rgb(255,45,85)",
    icon: <Megaphone />,
  },
];

export default function Home() {
  const allEmails = getAllEmails();
  const [emails, setEmails] = useState<Email[]>(allEmails);

  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-screen-sm mx-auto">
      <h1 className="text-4xl font-bold">Inbox</h1>
      <div className="divide-y-[1px]">
        {emails.map((email) => (
          <div className="flex flex-col gap-1 py-3" key={email.id}>
            <h2 className="font-medium text-lg">{email.sender}</h2>
            <h3>{email.subject}</h3>
            <p className="text-sm text-neutral-500">{email.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
