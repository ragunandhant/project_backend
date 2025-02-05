import { NextResponse } from "next/server";
import db from "@/db/connection";
import { entries } from "@/db/schema";


export async function POST(request: Request){

    try {
        const body = await request.json();
        const newRace = await db.insert(entries).values(
            {
                name: body.name,
                time: body.time,
                categoriesId: body.categoriesId
            }
        ).returning({insertedId:entries.id});

        return NextResponse.json(
            {
                "message":"entry created",
                "error":false,
                "error_message":null,
                "data":newRace
            },{
                status:201
            })
    }
    catch (error) {
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
