import { NextResponse } from "next/server";
import db from "@/db/connection";
import { entries } from "@/db/schema";


export async function POST(request: Request){

    try {
        const body = await request.json();
        const newRace = await db.insert(entries).values(
            {
            name1: body.name1,
            name2: body.name2,
            cartno: body.cartno,
            time: Number(parseFloat(body.time).toFixed(4)),
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
        console.log("error",error)
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
