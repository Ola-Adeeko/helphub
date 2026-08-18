"use client";

import { Phone, MessageCircle, CalendarClock } from "lucide-react";
import { Contact } from "@/lib/types";

const config: Record<
  Contact["type"],
  { label: string; icon: typeof Phone; classes: string }
> = {
  call: {
    label: "Call now",
    icon: Phone,
    classes: "bg-[#d45c3c] text-white hover:bg-[#b84b2f]",
  },
  whatsapp: {
    label: "WhatsApp",
    icon: MessageCircle,
    classes: "bg-[#25D366] text-white hover:bg-[#1DA851]",
  },
  booking: {
    label: "Book a session",
    icon: CalendarClock,
    classes: "bg-surface text-ink border border-line hover:border-accent/50",
  },
};

export default function ContactActions({
  contacts,
  size = "md",
}: {
  contacts: Contact[];
  size?: "sm" | "md";
}) {
  const href = (c: Contact) => (c.type === "call" ? `tel:${c.value}` : c.value);

  return (
    <div className="flex flex-wrap gap-2">
      {contacts.map((c) => {
        const cfg = config[c.type];
        const Icon = cfg.icon;
        return (
          <a
            key={c.type}
            href={href(c)}
            target={c.type === "call" ? undefined : "_blank"}
            rel={c.type === "call" ? undefined : "noopener noreferrer"}
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-1.5 rounded-lg font-medium transition-colors ${cfg.classes} ${
              size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm"
            }`}
          >
            <Icon className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
            {cfg.label}
          </a>
        );
      })}
    </div>
  );
}
