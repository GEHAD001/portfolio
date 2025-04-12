"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export default function CopyButton({
  children,
  value,
  className,
}: CopyButtonProps) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    // Check for clipboard permission
    navigator.permissions
      .query({ name: "clipboard-write" as PermissionName })
      .then((result) => {
        setHasPermission(result.state === "granted");
      })
      .catch(() => {
        // If permission API is not supported, assume we can copy
        setHasPermission(true);
      });
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy");
      console.error("Failed to copy:", error);
    }
  };

  if (hasPermission === null) {
    return null; // Or a loading state
  }

  return (
    <button
      className={className}
      onClick={handleCopy}
      disabled={!hasPermission}
      title={
        hasPermission ? "Copy to clipboard" : "Clipboard permission denied"
      }
    >
      {children}
    </button>
  );
}
