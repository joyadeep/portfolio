import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";


const generateToken = async(user:any)=>{
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const jwt = await new SignJWT({
        id: user.id,
        email: user.email
    })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret);

    return jwt;
}

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    if(!email){
        return NextResponse.json(
            { message: "all fields are required" },{ status: 400 })
    }
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });

    if (!user){
        return NextResponse.json(
            { message: "invalid email or password" },
            { status: 400 }
        )
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid){
        return NextResponse.json(
            { message: "invalid email or password" },
            { status: 400 }
        )
    }

    const token = await generateToken(user);

    const response = NextResponse.json(
      { message: "user logged in successfully" },
      { status: 200 }
    );

    response.cookies.set({
      name:"portfolio_token",
      value:token,
      httpOnly:true,
      maxAge:60*60*24*30
    })

    return response;

  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
};
