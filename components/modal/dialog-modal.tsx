import React from "react"

import { DialogModalProps } from "@/types/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const DialogModal = ({
  title = "Dialog Title",
  description = "Dialog Description",
  trigger = <button>Open Dialog</button>,
  children,
}: DialogModalProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
            {children}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogModal
