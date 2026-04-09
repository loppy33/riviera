"use client";

import React, { useTransition } from "react";
import { updateInquiryStatus } from "@/actions/inquiry";

type StatusUpdaterProps = {
  id: string;
  currentStatus: "NEW" | "CONTACTED" | "CLOSED";
};

export default function StatusUpdater({ id, currentStatus }: StatusUpdaterProps) {
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as "NEW" | "CONTACTED" | "CLOSED";
    
    // startTransition позволяет вызвать серверное действие, не блокируя UI
    startTransition(() => {
      updateInquiryStatus(id, newStatus);
    });
  };

  return (
    <div className="status-actions">
      <select 
        value={currentStatus} 
        onChange={handleChange}
        disabled={isPending}
        style={{ opacity: isPending ? 0.5 : 1 }}
      >
        <option value="NEW">New Lead</option>
        <option value="CONTACTED">Contacted</option>
        <option value="CLOSED">Closed / Resolved</option>
      </select>
    </div>
  );
}