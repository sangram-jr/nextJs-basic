
import { NextRequest, NextResponse } from "next/server";
import  prisma  from '../../../lib/db'

export async function POST(req:NextRequest){

    //get the body
    const data=await req.json();
    //add userdata to the user table
    await prisma.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    })
    return NextResponse.json({message:"you are signed up"})
}