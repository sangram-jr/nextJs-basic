
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){

    //get the body
    const data=await req.json();
    console.log(data);
    return NextResponse.json({message:"you are signed up"})
}