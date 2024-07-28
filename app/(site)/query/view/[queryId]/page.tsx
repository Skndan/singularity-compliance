"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { ArrowLeft, Globe, Home, Link2, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/api/api-client";
import { Query } from "@/types/query";

const DepartmentPage = ({ params }: { params: { queryId: string } }) => {

  const [loading, setLoading] = useState(true);
  const [queryResult, setQueryResult] = useState<Query | null>(null);
  const router = useRouter();

  const sources = [
    {
      content: `src/data/source/galaxy-design-client-guide.pdf: 4.0`,
      hash: "14601415986",
    },
    {
      content: `src/data/source/galaxy-design-client-guide.pdf: 4.1`,
      hash: "89c29829c8cb",
    },
    {
      content: `src/data/source/galaxy-design-client-guide.pdf: 7.2`,
      hash: "TU5b3ecOt15",
    },
  ];

  async function fetchData() { 
    await apiClient.get(`/get_query?query_id=${params?.queryId}&user_id=demo_compliance`).then((res) => res.data)
      .then((data) => {
        setQueryResult(data); 
        setLoading(false)
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

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
            <CardTitle className="font-extrabold">View Query</CardTitle>
            <CardDescription>{`Query ID: ${params.queryId}`}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">

              <div className="p-2 rounded-md bg-sky-100 dark:bg-sky-800">
                <div className="flex flex-col text-sky-800 dark:bg-sky-100">
                  <Label className="text-md font-bold">Question</Label>
                  <Label className="leading-relaxed">{queryResult?.query_text}</Label>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <Label className="text-md font-bold">Response</Label>
                <Label className="text-muted-foreground leading-relaxed">{queryResult?.answer_text}</Label>
              </div>


              <div className="flex flex-col opacity-80">
                {
                  queryResult?.sources.map((e, i) => {
                    return (
                      <div key={i} className="flex flex-row gap-2 align-middle items-center">
                        <Link2 className="h-3 w-3 text-muted-foreground " />
                        <Label className="text-muted-foreground text-xs">{e}</Label>
                      </div>
                    )
                  })
                }
              </div>

              <Button variant="ghost" className="gap-2 font-bold bg-gradient"
                onClick={() => {
                  router.push('/query');
                }}>
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>)
}

export default DepartmentPage;