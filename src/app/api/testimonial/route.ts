import { NextResponse } from "next/server"
import {db} from "@/lib/db";

export const GET = async()=>{
    try {
        const result = await db.testimonial.findMany();
        return NextResponse.json({message:"success",data:result},{status:200})
    } catch (error) {
        console.log("error")
    }
}

