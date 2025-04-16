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
import { memo, useState } from "react";
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

function DialogContactMemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative cursor-pointer overflow-hidden rounded-lg border-0 bg-gradient-to-r from-blue-500/20 to-blue-600/30 px-5 py-3 text-[clamp(14px,2vw,18px)] font-medium text-blue-700 shadow-md transition-all duration-300 before:absolute before:inset-0 before:z-0 before:bg-white/50 before:opacity-30 before:transition-opacity hover:translate-y-[-2px] hover:from-blue-500/30 hover:to-blue-600/40 hover:shadow-lg hover:before:opacity-0 active:translate-y-[1px] active:shadow-sm lg:px-6 lg:py-4"
        >
          <span className="relative z-10 flex items-center gap-2">
            Contact Me
          </span>
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

export const DialogContact = memo(DialogContactMemo);
