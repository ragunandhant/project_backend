import { NextResponse } from "next/server";
import db from "@/db/connection";
import { categories } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  context: { params: Promise<{ raceid: string }> } // Define params as a Promise
) {
  try {
    const { raceid } = await context.params; // Await the params promise

    const allEntries = await db
      .select()
      .from(categories)
      .where(eq(categories.raceId, raceid));

    return NextResponse.json(
      {
        message: allEntries.length > 0 ? "entries found" : "no entries found",
        error: false,
        error_message: null,
        data: allEntries,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "",
        error: true,
        error_message: error,
      },
      {
        status: 500,
      }
    );
  }
}
