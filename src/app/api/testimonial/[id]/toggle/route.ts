import { NextResponse } from "next/server"
import {GET} from "@/app/api/testimonial/[id]/route"
import { db } from "@/lib/db";

export const PATCH = async(req:Request,{params}:{params:{id:string}})=>{
    try {
        const id = params.id;
        const check = await GET(req,{params:{id}});

        const {data} = await check.json();
        
        if (check.status !== 200)
            return NextResponse.json({message:"Testimonial not found"},{status:404})

        const res =await db.testimonial.update({
            where:{
                id
            },
            data:{
                status:!data.status
            }
        })
        return NextResponse.json({message:"Success",data:res},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}