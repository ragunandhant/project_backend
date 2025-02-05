import { NextResponse } from "next/server";
import db from "@/db/connection";
import { races,categories } from "@/db/schema";
export async function POST(request: Request){

    try {
        const body = await request.json();
        const newRace = await db.insert(races).values(
            {
                name: body.name,
                description: body.description,
                date: body.date,
                location: body.location
            }
        ).returning({insertedId:races.id});

        await db.insert(categories).values(
            {
                name: "200 meters",
                raceId: newRace[0].insertedId
            }
        ).returning({insertedId:categories.id});

        await db.insert(categories).values(
            {
                name: "300 meters",
                raceId: newRace[0].insertedId
            }
        ).returning({insertedId:categories.id});
        return NextResponse.json(
            {
                "message":"race created",
                "error":false,
                "error_message":null,
                "data":newRace
            },{
                status:201
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

export async function GET(request: Request){

    try {
        const allRaces = await db.select().from(races)
        return NextResponse.json(
            {
                "message":"All Available races",
                "error":false,
                "error_message":null,
                "data":allRaces
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