"use client";

import { Skeleton } from "@mui/material";
import { Card } from "@/components/ui/card";

export default function Loading() {
    return (
        <>
            <div>
                <div className="flex items-center justify-end pt-5 pr-3">
                    <Skeleton className="h-12 w-12 rounded-sm" />
                </div>
            </div>
            <div className="my-10">
                <Card className="p-5">
                    <div className="flex items-center justify-center">
                        <Skeleton className=" h-[300px] w-[290px] rounded-full" />
                    </div>
                    <div className="flex items-center justify-center mb-10">
                        <Skeleton className="h-8 w-[250px]" />
                    </div>
                    <div>
                        <Card className="p-10">
                            <Skeleton className="h-5 w-[100%]" />
                            <Skeleton className="h-5 w-[100%]" />
                            <Skeleton className="h-5 w-[100%]" /><br />
                            <Skeleton className="h-5 w-[100%]" />
                            <Skeleton className="h-5 w-[80%]" />

                        </Card>
                    </div>
                </Card>
            </div>
            <div className="my-10">
                <Card className="p-10">
                    <div className="flex justify-center items-center">
                        <Skeleton className="h-8 w-[100px]" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Skeleton className="h-8 w-[200px]" />
                    </div>
                    <div>
                        <Skeleton className=" h-[500px] w-[100%]" />
                    </div>
                </Card>
            </div>
        </>
    )
}