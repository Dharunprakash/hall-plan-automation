import React from "react"
import { Edit, Edit2 } from "lucide-react"

import { DialogModalProps } from "@/types/ui"
import { cn } from "@/lib/utils"

import DialogModal from "./dialog-modal"

const EditModal = ({
  children,
  description = "Edit the content",
  title = "Edit",
  className,
}: DialogModalProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-white opacity-0 transition-opacity duration-200 [mask-image:radial-gradient(ellipse_at_bottom_left,transparent_50%,black)] hover:opacity-100 dark:bg-black",
        className
      )}
    >
      <div className="absolute right-0 top-0 p-1">
        <button className="rounded-lg p-1 px-2 text-black">
          <DialogModal
            trigger={<Edit2 width={15} height={15} />}
            title={title}
            description={description}
          >
            {children}
          </DialogModal>
        </button>
      </div>
    </div>
  )
}

export default EditModal
