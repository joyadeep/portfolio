"use client";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import LoadingSkeleton from "./LoadingSkeleton";
import { Loader2, Plus } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import EmptyTestimonial from "./EmptyTestimonial";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

export interface Itestimonial {
  _id: string;
  name: string;
  email: string;
  image: string;
  message: string;
  status: boolean;
  designation: string;
}


const formSchema = z.object({
  name: z.string().min(1,{message:"Name is required"}),
  email: z.string().email(),
  designation: z.string().min(1,{message:"Designation is required"}),
  image: z
  .custom<FileList>()
  .optional()
  .transform(files => files?.[0])
  .refine(
    (file) => !file || ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported.'
  )
  ,
  message: z.string().min(1,{message:"Message is required"}).max(250,{message:"Message limit exceeded. (limit:200)"}),
})

const Testimonial = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      name: "",
      email: "",
      designation: "",
      image:undefined,
      message: "",
    }
  })

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const result = await axios.get("/api/testimonial?type=active");
        if (result.status === 200) {
          setTestimonials(result.data.result)
        }
        else throw new Error("something went wrong!")
      } catch (error) {
        console.log("error", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<Itestimonial[]>([]);
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmiting, setIsSubmitting] = useState(false)

 
 
  const onSubmit = async(formData: z.infer<typeof formSchema>) => {

   try {
    setIsSubmitting(true)
    const data = new FormData();
    data.append('name',formData.name);
    data.append('email',formData.email);
    data.append('designation',formData.designation);
    data.append('message',formData.message);
    if (formData.image){
      data.append('image',formData.image);
    }

    const response = await axios.post("/api/testimonial", data, {
      headers:{
        'Content-Type':'multipart/form-data'}
    })

    if(response.status !==201){
      throw new Error("Cannot create testimonial")
    }
    toast({
      title: "Success",
      description: "Testimonial created successfully",
    })
    setIsOpen(false)
    form.reset()


   } catch (error) {
      console.log("error",error)
   } finally {
    setIsSubmitting(false)
   }
    
  }

  return (
    <div className=" px-5 md:px-20 ">
      <h2 className="text-4xl text-center font-bold tracking-tighter capitalize whitespace-nowrap">
        words of appreciation
      </h2>
      <Dialog open={isOpen} onOpenChange={setIsOpen} modal={true}>
        <DialogTrigger asChild>

          <Button variant="outline" className="flex ml-auto w-fit gap-1 text-sm mt-2 md:mt-0" onClick={() => setIsOpen(true)}><Plus size={20} /> Add your voice</Button>

        </DialogTrigger>
        <DialogContent className="dark:border-slate-500 w-full">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">Add your words</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div className="flex justify-between gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <div className="flex justify-between items-center">
                      <FormLabel>Name</FormLabel>
                      <FormMessage className="text-xs leading-3"/>
                      </div>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <div className="flex justify-between items-center">
                      <FormLabel>Email</FormLabel>
                      <FormMessage className="text-xs leading-3"/>
                      </div>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <div className="flex justify-between items-center">
                      <FormLabel>Designation</FormLabel>
                      <FormMessage className="text-xs leading-3"/>
                      </div>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <div className="flex justify-between items-center">
                      <FormLabel>Image</FormLabel>
                      <FormMessage className="text-xs leading-3"/>
                      </div>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e:any)=>field.onChange(e.target.files)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <div className="flex justify-between items-center">
                      <FormLabel>Message</FormLabel>
                      <FormMessage className="text-xs leading-3"/>
                      </div>
                    <FormControl>
                      <Textarea rows={4} {...field} className="resize-none" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button disabled={isSubmiting}>{isSubmiting && <Loader2 className="animate-spin"/>} Create</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      {
        isLoading ?
          (
            <Swiper
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {[1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                  <LoadingSkeleton />
                </SwiperSlide>
              ))}
            </Swiper>
          )
          :
          testimonials?.length === 0 ? <EmptyTestimonial /> :
            (
              <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                {testimonials?.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard
                      key={testimonial._id}
                      testimonial={testimonial}
                    />
                  </SwiperSlide>
                ))}

              </Swiper>
            )}

    </div>
  );
};

export default Testimonial;
