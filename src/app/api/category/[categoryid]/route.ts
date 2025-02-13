import { NextResponse, NextRequest } from "next/server";
import db from "@/db/connection";
import { entries, categories } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ categoryid: string }> } // params is a Promise
) {
  try {
    const { categoryid } = await context.params; // Await the params Promise

    const allEntries = await db
      .select()
      .from(entries)
      .where(eq(entries.categoriesId, categoryid));

    const contest = await db
      .select()
      .from(categories)
      .where(eq(categories.id, categoryid));

    return NextResponse.json(
      {
        message: allEntries.length > 0 ? "entries found" : "no entries found",
        error: false,
        error_message: null,
        data: allEntries,
        contestName: contest.length > 0 ? contest[0].name : null,
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
