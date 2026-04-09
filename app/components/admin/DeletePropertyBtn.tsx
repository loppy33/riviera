"use client";

import React, { useTransition } from "react";
import { deleteProperty } from "@/actions/property";

export default function DeletePropertyBtn({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this property? This action cannot be undone.")) {
      startTransition(() => {
        deleteProperty(id);
      });
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      disabled={isPending}
      className="btn btn--outline" 
      style={{ padding: '0.5rem', color: 'red', borderColor: 'rgba(255,0,0,0.2)', cursor: isPending ? 'not-allowed' : 'pointer', opacity: isPending ? 0.5 : 1 }}
      title="Delete Property"
    >
      <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>delete</span>
    </button>
  );
}