import { NextRequest, NextResponse } from "next/server"
import {db} from "@/lib/db";

export const GET = async(req:NextRequest)=>{
    try {
        const url=new URL(req.url)
        const type=url.searchParams.get("type");
        const result = type==="active"?await db.testimonial.findMany({where:{status:true}}) : await db.testimonial.findMany()
        console.log("result",result)
        if(result.length === 0) {
            return NextResponse.json({message:"no data found !"},{status:404})
        }
        return NextResponse.json({message:"success",data:result},{status:200})
    } catch (error) {
        console.log("error")
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}

