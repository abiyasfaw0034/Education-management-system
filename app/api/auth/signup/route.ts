import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, password, role, schoolId } = data;

    const body: any = { name, email, password, role };

    // Conditionally add schoolId if it exists
    if (schoolId) {
      body.schoolId = schoolId;
    }

    const response = await auth.api.signUpEmail({
      body,
      asResponse: true, // returns a response object instead of data
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("server error", { status: 500 });
  }
}
