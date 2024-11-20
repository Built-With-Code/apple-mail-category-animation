"use client";

import { getAllEmails } from "@/db/emails";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import {
  Megaphone,
  MessageSquareText,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const allEmails = getAllEmails();
  const [emails, setEmails] = useState(allEmails);

  const [activeCategory, setActiveCategory] = useState("primary");

  useEffect(() => {
    setEmails(allEmails.filter((e) => e.category === activeCategory));
  }, [activeCategory]);

  return (
    <div className="flex flex-col justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Inbox</h1>
      <motion.div className="flex gap-4" layout>
        <CategoryBadge
          isActive={activeCategory === "primary"}
          accentColor="rgb(0,122,255)"
          onClick={() => {
            setActiveCategory("primary");
          }}
          id="primary"
        >
          <motion.div layout>
            <UserRound />
          </motion.div>
          <motion.span data-slot="label">Primary</motion.span>
        </CategoryBadge>
        <CategoryBadge
          isActive={activeCategory === "transactions"}
          accentColor="rgb(52,199,89)"
          onClick={() => {
            setActiveCategory("transactions");
          }}
          id="transactions"
        >
          <motion.div layout>
            <ShoppingCart />
          </motion.div>
          <span data-slot="label">Transactions</span>
        </CategoryBadge>
        <CategoryBadge
          isActive={activeCategory === "updates"}
          accentColor="rgb(88,86,214)"
          onClick={() => {
            setActiveCategory("updates");
          }}
          id="updates"
        >
          <motion.div layout>
            <MessageSquareText />
          </motion.div>
          <span data-slot="label">Updates</span>
        </CategoryBadge>
        <CategoryBadge
          isActive={activeCategory === "promotions"}
          accentColor="rgb(255,45,85)"
          onClick={() => {
            setActiveCategory("promotions");
          }}
          id="promotions"
        >
          <motion.div layout>
            <Megaphone />
          </motion.div>
          <span data-slot="label">Promotions</span>
        </CategoryBadge>
      </motion.div>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={activeCategory}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        >
          {emails.map((email) => (
            <div key={email.id}>
              <h2>{email.sender}</h2>
              <h3>{email.subject}</h3>
              <p>{email.description}</p>
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
