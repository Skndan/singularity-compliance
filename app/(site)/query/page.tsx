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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Home, Loader, User } from "lucide-react";
import Link from "next/link";
import apiClient from "@/lib/api/api-client";
import { Query } from "@/types/query";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyStateTable } from "@/components/common/empty-state-table";
import { ResultBox } from "./view/_component/result-box";
import { ScrollArea } from "@/components/ui/scroll-area";

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

  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [queryList, setQueryList] = useState<Query[]>([]);
  const [query, setQuery] = useState<Query | null>(null);

  const [resultBox, setResultBox] = useState(false);

  const router = useRouter();

  // const { user } = useAuth();
  async function fetchData() {
    await apiClient.get(`/list_query?user_id=demo_compliance`).then((res) => res.data)
      .then((data) => {
        setQueryList(data);
        setLoading(false)
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  const onSubmit = async (data: DepartmentFormValues) => {
    try {
      setFormLoading(true);
      var datum = {
        "query_text": data.query,
        "user_id": "demo_compliance"
      }
      await apiClient
        .post(`/submit_query`, datum)
        .then((res) => res.data)
        .then((data) => {
          setFormLoading(false);
          setQuery(data);
          form.reset();
          if (query) {
            queryList.push(query);
            setQueryList(queryList);
          }
          setResultBox(true);
          // router.push(`/query/view/${data.query_id}`);
        });

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
    <div className="flex-col lg:container">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-4">
            <Link href={`/dashboard`}>
              <div className="flex flex-row bg-muted p-2 border rounded-sm items-center align-middle gap-2 cursor-pointer">
                <Home className="h-4 w-4" />
                <Label>Home</Label>
              </div>
            </Link>
            {
              resultBox && <Button size={"sm"} onClick={() => {
                setResultBox(false)
              }}>
                New Query
              </Button>
            }
          </div>
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
        <div className="grid gap-4 md:grid-cols-2 md:flex-col-reverse lg:grid-cols-10">
          <Card className="lg:col-span-3 md:col-span-1 md:order-last">
            <CardHeader>
              <CardTitle className="font-extrabold">Recent Queries</CardTitle>
              <CardDescription>{`Here are queries you've recently submitted`}</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96 w-full">
                <div className="flex flex-col h-full overflow-y-auto">
                  {
                    loading && <div className="flex flex-col gap-4">
                      <div className="flex flex-row space-x-4 justify-between">
                        <Skeleton className="h-4 w-[250px]" />
                      </div>
                      <div className="flex flex-row space-x-4 justify-between">
                        <Skeleton className="h-4 w-[150px]" />
                      </div>
                    </div>
                  }
                  {
                    !loading && queryList.length == 0 ? <EmptyStateTable title={"No search queries found"} description={"No search queries found"} action={null} onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }} /> : <></>
                  }
                  {
                    queryList.map((e, i) => {
                      return (
                        <div key={i} className="flex flex-row justify-between my-2">
                          <Link href={`/query/view/${e.query_id}`}><Label className="hover:underline cursor-pointer">{e.query_text}</Label></Link>
                        </div>
                      )
                    })
                  }
                </div>
              </ScrollArea>

            </CardContent>
          </Card>
          {
            !resultBox && <Card className="lg:col-span-7 md:col-span-1">
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
                              <Textarea disabled={formLoading} placeholder="How much does a landing page cost to develop?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-end">
                      <Button disabled={formLoading} className="ml-auto" type="submit">
                        {formLoading &&
                          <Loader className="animate-spin h-5 w-5 mr-3" />}
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          }
          {
            resultBox && <ResultBox data={query} />
          }
        </div>
      </div>
    </div>)
}

export default DepartmentPage;