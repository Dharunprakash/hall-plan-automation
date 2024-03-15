import React from "react"
import Image from "next/image"
import { Department } from "@prisma/client"

import { Button } from "@/components/ui/button"
import DialogModal from "@/components/modal/dialog-modal"
import EditModal from "@/components/modal/edit-modal"

import DepartmentCard from "./_components/department-card"
import {
  CollegeDetailsForm,
  DepartmentForm,
  EditImageForm,
} from "./_components/forms"

const departments: Department[] = [
  {
    id: "1",
    name: "Computer Science and Engineering",
    code: "CSE",
  },
  {
    id: "2",
    name: "Electronics and Communication Engineering",
    code: "ECE",
  },
  {
    id: "3",
    name: "Electrical and Electronics Engineering",
    code: "EEE",
  },
  {
    id: "4",
    name: "Mechanical Engineering",
    code: "MECH",
  },
  {
    id: "5",
    name: "Civil Engineering",
    code: "CIVIL",
  },
  {
    id: "6",
    name: "Information Technology",
    code: "IT",
  },
  {
    id: "7",
    name: "Automobile Engineering",
    code: "AUTO",
  },
  {
    id: "8",
    name: "Aeronautical Engineering",
    code: "AERO",
  },
  {
    id: "9",
    name: "Agricultural Engineering",
    code: "AGRI",
  },
  {
    id: "10",
    name: "Biomedical Engineering",
    code: "BME",
  },
]

const page = () => {
  return (
    <div className="h-full w-full">
      <div className="relative w-full sm:h-40 md:h-60">
        <EditModal>
          <DialogModal
            title="Edit Cover Image"
            description="Edit the cover image"
          >
            <EditImageForm />
          </DialogModal>
        </EditModal>
        <Image
          src="https://picsum.photos/id/11/1600/600"
          alt="college"
          width={1600}
          height={600}
          objectFit="fill"
          className="max-h-full"
        />
      </div>
      <div className="relative z-50 mx-auto -mt-20 h-40 w-40 rounded-sm">
        <EditModal className="rounded-sm">
          <DialogModal
            title="Edit College Logo"
            description="Edit the college logo"
          >
            <EditImageForm />
          </DialogModal>
        </EditModal>
        <Image
          src="https://picsum.photos/id/88/160/160"
          alt="college"
          width={160}
          height={160}
          objectFit="cover"
          className="max-h-full rounded-sm"
        />
      </div>
      <div className="w-full">
        <div className="relative mx-auto max-w-2xl">
          <EditModal className="bg-transparent opacity-100">
            <DialogModal
              title="Edit College Details"
              description="Edit college details"
            >
              <CollegeDetailsForm />
            </DialogModal>
          </EditModal>
          <h1 className="mt-2 text-center text-2xl">
            PSNA College of Engineering and Technology
          </h1>
          <p className="text-center">
            An Autonomous Institution affiliated to Anna University
          </p>
          <p className="text-center">Dindigul, Tamilnadu - 624301</p>
        </div>
      </div>
      <div className="w-full p-5 ">
        {/* display all departments */}
        <div className="flex items-center justify-between px-5">
          <h2 className="text-xl font-semibold">Departments</h2>
          <DialogModal
            trigger={
              <Button className="rounded-lg p-1 px-3 text-white transition">
                Add Department
              </Button>
            }
            title="Add Department"
            description="Add a new department to the college."
          >
            <DepartmentForm />
          </DialogModal>
        </div>
        <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((department) => (
            <DepartmentCard {...department} className="" key={department.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
