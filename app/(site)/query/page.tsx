"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import * as z from "zod";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Home, Loader, User } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  query: z.string().min(1),
});

type DepartmentFormValues = z.infer<typeof formSchema>;

const DepartmentPage = () => {

  const form = useForm<DepartmentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
    mode: "onChange",
  });

  const [loading, setLoading] = useState(false);

  // const { user } = useAuth();

  const onSubmit = async (data: DepartmentFormValues) => {
    try {

    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const queries = [
    {
      content: `What if I want a refund?`,
      hash: "14601415986",
    },
    {
      content: `How much time does it take you to build an e-commerce website?`,
      hash: "89c29829c8cb",
    },
    {
      content: `How much does a landing page cost to develop`,
      hash: "TU5b3ecOt15",
    },
  ];

  return (
    <div className="flex-col container">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Link href={`/dashboard`}>
            <div className="flex flex-row bg-muted p-2 border rounded-sm items-center align-middle gap-2 cursor-pointer">
              <Home className="h-4 w-4" />
              <Label>Home</Label>
            </div>
          </Link>
          <div className="flex flex-row gap-4">

            <div className="flex flex-row bg-muted p-2 border rounded-sm items-center align-middle gap-2">
              <User className="h-4 w-4" />
              <Label>fef344fd0</Label>
            </div>

            <div className="flex flex-row bg-muted p-2 border rounded-sm items-center align-middle gap-2">
              <Globe className="h-4 w-4" />
              <Label>{`https://api.rag.pixegami.io`}</Label>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-extrabold">Submit New Query</CardTitle>
            <CardDescription>Ask a question about Galaxy Designs --a web-design agency that builds websites for small and medium businesses.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full">
                <div className="md:grid md:grid-cols-1 gap-4 pt-4">
                  <FormField
                    control={form.control}
                    name="query"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea disabled={loading} placeholder="How much does a landing page cost to develop?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-end">
                  <Button disabled={loading} className="ml-auto" type="submit">
                    {loading &&
                      <Loader className="animate-spin h-5 w-5 mr-3" />}
                    Submit
                  </Button>
                </div>

              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-extrabold">Recent Queries</CardTitle>
            <CardDescription>{`Here are queries you've recently submitted`}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              {
                queries.map((e) => {
                  return (
                    <div key={e.hash} className="flex flex-row justify-between my-2">
                      <Label>{e.content}</Label>
                      <Link href={`/query/view/${e.hash}`}><Label className="cursor-pointer text-sky-600">{e.hash}</Label></Link> 
                    </div>
                  )
                })
              }
            </div>

          </CardContent>
        </Card>
      </div>
    </div>)
}

export default DepartmentPage;