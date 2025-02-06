
import { NextResponse } from "next/server";
import db from "@/db/connection";
import { entries,categories } from "@/db/schema";
import { eq } from "drizzle-orm";


export async function GET(
    request: Request,
    { params }: { params: { categoryid: string } }
  ){

    try {
        const allEntries = await db.select().from(entries).where(eq(entries.categoriesId,params.categoryid))

        const contest = await db.select().from(categories).where(eq(categories.id,params.categoryid))
        return NextResponse.json(
            {
                "message": allEntries.length > 0 ? "entries found" : "no entries found",
                "error":false,
                "error_message":null,
                "data":allEntries,
                "contestName":contest[0].name
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