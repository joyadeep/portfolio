import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { v2 as cloudinary } from "cloudinary";
import { Stream } from "stream";

cloudinary.config({
  cloud_name: "dopcnlqkl",
  api_key: "267235443225785",
  api_secret: "TfL1iIRWaonwsk6jpdlWciiNnh4",
});

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get("type");
    const result =
      type === "active"
        ? await db.testimonial.findMany({ where: { status: true } })
        : await db.testimonial.findMany();
    console.log("result", result);
    if (result.length === 0) {
      return NextResponse.json({ message: "no data found !" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "success", data: result },
      { status: 200 }
    );
  } catch (error) {
    console.log("error");
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};


const uploadImage = async (image: File | null):Promise<string|null> => {
    if (!image) {
        return null;
    }
    const bytes = await image?.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const result:any = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            resolve(result);
          }
        );

        // convert buffer to stream and pipe to cloudinary
        const Readable = Stream.Readable;
        const stream = new Readable();
        stream.push(buffer);
        stream.push(null);
        stream.pipe(uploadStream);
      });

      if (result && result.secure_url) {
        return result.secure_url;
    }

    return null;
}

export const POST = async (req: Request) => {
  try {
    const data = await req.formData();
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const designation = data.get("designation") as string;
    const message = data.get("message") as string;
    const image = data.get("image") as File | null;

    const imageUrl = await uploadImage(image as File);

    const resp = await db.testimonial.create({
      data: {
        name,
        email,
        designation,
        image: imageUrl,
        message,
      },
    });

    return NextResponse.json(
      { message: "Success", data: resp },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
