const emails = [
  {
    id: 1,
    category: "primary",
    sender: "Jane Doe",
    subject: "Tickets for tonight",
    description:
      "Hey! Attaching your tickets here in case we end up going at different times.",
  },
  {
    id: 2,
    category: "promotions",
    sender: "Poshmark",
    description: "You have great taste!",
  },
  {
    id: 3,
    category: "promotions",
    sender: "Uber",
    description: "Make your commute even easier.",
  },
  {
    id: 4,
    category: "promotions",
    sender: "Disney+",
    description: "Bingeable series for every mood.",
  },
  {
    id: 5,
    category: "updates",
    sender: "United Airlines",
    subject: "Quick reminders about your flight",
    description: "Here is a checklist before your flight.",
  },
  {
    id: 5,
    category: "transactions",
    sender: "Nike",
    subject: "Order confirmation",
    description: "Your shoe order is confirmed.",
  },
];

export const getAllEmails = () => {
  return emails;
};
