import { NextResponse } from "next/server";
import db from "@/db/connection";
import { desc } from 'drizzle-orm';
import { races,categories } from "@/db/schema";
export async function POST(request: Request){

    try {
        const body = await request.json();

        if(body.password!="1968")
        {
            return NextResponse.json({
                message:"password is not valid"
            },{
                status:403
            })
        }
        const newRace = await db.insert(races).values(
            {
                name: body.name,
                description: body.description,
                date: body.date,
                location: body.location
            }
        ).returning({insertedId:races.id});

        const race200  =await db.insert(categories).values(
            {
                name: "200 meters",
                raceId: newRace[0].insertedId
            }
        ).returning({insertedId:categories.id});

        const race300 = await db.insert(categories).values(
            {
                name: "300 meters",
                raceId: newRace[0].insertedId
            }
        ).returning({insertedId:categories.id});
        const returnData = {
       
            race200: race200[0].insertedId,
            race300: race300[0].insertedId,
            race: newRace[0].insertedId

       
        }
        return NextResponse.json(
            {
                "message":"race created",
                "error":false,
                "error_message":null,
                "data":returnData
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

export async function GET(){

    try {
        const allRaces = await db.select().from(races).orderBy(desc(races.created_at));
        
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