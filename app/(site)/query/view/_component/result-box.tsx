"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Link2 } from "lucide-react";
import { useRouter } from "next/navigation"; 
import { Query } from "@/types/query";
interface EmployeeClientProps {
  data: Query | null;
}

export const ResultBox: React.FC<EmployeeClientProps> = ({
  data
}) => {
  const router = useRouter();
 
  return ( 
        <Card className="lg:col-span-7 md:col-span-1">
          <CardHeader>
            <CardTitle className="font-extrabold">View Query</CardTitle>
            <CardDescription>{`Query ID: ${data?.query_id}`}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-2 rounded-md bg-sky-100 dark:bg-sky-800">
                <div className="flex flex-col text-sky-800 dark:bg-sky-100">
                  <Label className="text-md font-bold">Question</Label>
                  <Label className="leading-relaxed">{data?.query_text}</Label>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <Label className="text-md font-bold">Response</Label>
                <Label className="text-muted-foreground leading-relaxed">{data?.answer_text}</Label>
              </div>


              <div className="flex flex-col opacity-80">
                {
                  data?.sources.map((e, i) => {
                    return (
                      <div key={i} className="flex flex-row gap-2 align-middle items-center">
                        <Link2 className="h-3 w-3 text-muted-foreground " />
                        <Label className="text-muted-foreground text-xs">{e}</Label>
                      </div>
                    )
                  })
                }
              </div>

              {/* <Button variant="ghost" className="gap-2 font-bold bg-gradient"
                onClick={() => {
                  router.push('/query');
                }}>
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button> */}
            </div>
          </CardContent>
        </Card> 
  );
};
