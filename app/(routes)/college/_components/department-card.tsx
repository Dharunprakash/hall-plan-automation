import React from "react"
import { Department } from "@prisma/client"

import { cn } from "@/lib/utils"
import DialogModal from "@/components/modal/dialog-modal"
import EditModal from "@/components/modal/edit-modal"

import DepartmentForm from "./forms/department"

const DepartmentCard = ({
  id,
  name,
  code,
  className,
}: Department & { className?: string }) => {
  return (
    <div
      className={cn(
        "relative my-2 flex items-center gap-3 rounded-lg border border-slate-100 !bg-slate-100 p-3",
        className
      )}
    >
      <EditModal>
        <DialogModal
          title="Edit Department"
          description="Edit Department details"
        >
          <DepartmentForm />
        </DialogModal>
      </EditModal>
      <div className="flex items-center rounded-full bg-slate-300 p-1 px-2 text-center">
        {code}
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default DepartmentCard
