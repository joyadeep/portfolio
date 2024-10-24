import { db } from "@/lib/db"
import { NextResponse } from "next/server";

export const GET = async(req:Request,{params}:{params:{id:string}})=>{
    try {
        const id = params.id;
        const testimonial = await db.testimonial.findFirst({
            where:{
                id
            }
        })
        if(!testimonial){
            return NextResponse.json({message:"Testimonial not found"},{status:404})
        }
        return NextResponse.json({message:"Success",data:testimonial},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}

export const DELETE = async(req:Request,{params}:{params:{id:string}})=>{
    try {
        const id = params.id;
        const check = await GET(req,{params:{id}})

        if (check.status !==200){
            return NextResponse.json({message:"Testimonial not found"},{status:404})
        }

        await db.testimonial.delete({
            where:{
                id
            }
        })
        
        return NextResponse.json({message:"Testimonial Deleted Successfully."},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}

