"use client";

import { Email, getAllEmails } from "@/db/emails";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import {
  Megaphone,
  MessageSquareText,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";

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
  const [emails, setEmails] = useState<Email[]>([]);

  const [activeCategory, setActiveCategory] = useState("primary");

  useEffect(() => {
    setEmails(allEmails.filter((e) => e.category === activeCategory));
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-screen-sm mx-auto">
      <h1 className="text-4xl font-bold">Inbox</h1>
      <motion.div className="flex gap-4" layout>
        {categories.map((category) => (
          <CategoryBadge
            isActive={activeCategory === category.name}
            accentColor={category.accentColor}
            onClick={() => {
              setActiveCategory(category.name);
            }}
            id={category.name}
            key={category.name}
          >
            <motion.div layout>{category.icon}</motion.div>
            <motion.span data-slot="label">{category.displayName}</motion.span>
          </CategoryBadge>
        ))}
      </motion.div>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          className="divide-y-[1px]"
          key={activeCategory}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        >
          {emails.map((email) => (
            <div className="flex flex-col gap-1 py-3" key={email.id}>
              <h2 className="font-medium text-lg">{email.sender}</h2>
              <h3>{email.subject}</h3>
              <p className="text-sm text-neutral-500">{email.description}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const CategoryBadge = ({
  isActive = false,
  accentColor,
  children,
  id,
  ...props
}: { isActive?: boolean; accentColor: string } & HTMLMotionProps<"div">) => {
  return (
    <motion.div
      className={`flex justify-center gap-2 py-4 px-6 font-semibold transition-colors [&>[data-slot=label]]:transition-all [&>[data-slot=label]]:text-white ${
        isActive ? "flex-1" : "[&>[data-slot=label]]:hidden"
      }`}
      style={{
        borderRadius: 24,
        backgroundColor: isActive ? accentColor : "#e5e5e5",
        color: isActive ? "white" : "inherit",
      }}
      {...props}
      layoutId={id}
    >
      {children}
    </motion.div>
  );
};
