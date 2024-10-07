"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import {
  Megaphone,
  MessageSquareText,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("primary");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
      className={`flex gap-2 p-4 transition-colors [&>[data-slot=label]]:transition-all [&>[data-slot=label]]:text-white ${
        isActive ? "" : "[&>[data-slot=label]]:hidden"
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
