import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contacts } from "@/database/data";
import { Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const handleCopy = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  } catch (error) {
    toast.error("Failed to copy");
    console.error("Failed to copy:", error);
  }
};

export function DialogContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-lg border-blue-200/20 bg-gradient-to-r from-blue-500/10 to-blue-600/10 px-8 py-6 text-2xl text-blue-600 transition-all duration-300 hover:border-blue-300/20 hover:from-blue-500/20 hover:to-blue-600/20"
        >
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Methods</DialogTitle>
          <DialogDescription>
            Here are my contact details. Feel free to reach out through any of
            these methods.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {contacts.map(({ label, value, id }) => (
            <div
              key={id}
              className="relative grid grid-cols-4 items-center gap-4"
            >
              <Label htmlFor={id} className="text-right">
                {label}
              </Label>
              <Input
                id={id}
                defaultValue={value}
                className="col-span-3"
                readOnly
              />
              <div
                className="flex-col-center absolute right-2 min-h-full cursor-pointer opacity-50"
                onClick={() => handleCopy(value)}
              >
                <Copy />
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
