"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function DepartmentForm() {
  const deptSchema = z.object({
    name: z.string().min(2, {
      message: "department name is required",
    }),
    code: z.string().min(2, {
      message: "department code is required",
    }),
  })
  const form = useForm<z.infer<typeof deptSchema>>({
    resolver: zodResolver(deptSchema),

    defaultValues: {
      name: "",
      code: "",
    },
  })

  const onSubmit = (data: z.infer<typeof deptSchema>) => {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle No</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Deptname" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle No</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Deptname" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
