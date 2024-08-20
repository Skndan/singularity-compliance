"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

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


  useEffect(() => {
    // fetchData();
  }, [])



  function handleClick(event: any) {
    
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Heading title={`Connections`} description="Manage your connections" />
          {/* <Button onClick={() => {
                         setOpen(true);
                    }}>
                        <Plus className="mr-2 h-4 w-4" /> Add
                    </Button> */}
        </div>
        <Separator />
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="hover:bg-muted cursor-pointer" onClick={handleClick}>
            <CardHeader>
              <CardTitle className="text-xl">ss</CardTitle>
            </CardHeader>
            <CardContent className="w-[350px]">

            </CardContent>
            <CardFooter className="flex justify-between">

            </CardFooter>
          </Card> 
        </div>

      </div>
    </div>)
}

export default DepartmentPage;