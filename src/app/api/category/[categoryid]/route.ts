
import { NextResponse } from "next/server";
import db from "@/db/connection";
import { entries } from "@/db/schema";
import { eq } from "drizzle-orm";


export async function GET(
    request: Request,
    { params }: { params: { categoryid: string } }
  ){

    try {
        const allEntries = await db.select().from(entries).where(eq(entries.categoriesId,params.categoryid))
        return NextResponse.json(
            {
                "message": allEntries.length > 0 ? "entries found" : "no entries found",
                "error":false,
                "error_message":null,
                "data":allEntries
            },{
                status:200
            }
        )  

        
    } catch (error) {
        
        return NextResponse.json(
            {
                "message":"",
                "error":true,
                "error_message":error,
            },{
                status:500

    }
    )
  }
}