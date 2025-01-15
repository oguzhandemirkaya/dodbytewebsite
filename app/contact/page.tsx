"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";

import '../globals.css';
import Head  from "next/head";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/ui/navbar";
import { LampDemo } from "@/components/ui/lamp";
import { Link } from 'react-router-dom';

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate Bird for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "Mobile App Develoment",
    "Social Media Marketing",
    "UI/UX Design",
    "Branding",
    "Website Development",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Evaluate Bird for my company" | "Learn More" | "Get a Quote" | "Other";
  services:
    | "Mobile App Develoment"
    | "Social Media Marketing"
    | "UI/UX Design"
    | "Branding"
    | "Website Development";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      services: "Mobile App Develoment",
      info: "",
    },
  });
  

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
  <Head>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</Head>
    <div>

  <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Navbar
      scrollToWebsiteDesign={() => {}}
      scrollToGraphicDesign={() => {}}
      scrollToServices={() => {}}
    />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-[#ff6220] ">
          Contact our team
          </div>
          <div
            className="
              
              py-4
              text-gray-300
                    "
          >
            Let&apos; talk about how Dodbyte can help your team work better or enhance your brand.
          </div>

          <div className="bg-white/[0.05] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b border-orange-500 ">
              <div className=" font-normal pb-4 text-white">
              Enhance user engagement with our tailored mobile and web development solutions designed for optimal performance.
              </div>
            </div>

            <div className="flex gap-4 border-b  border-orange-500 text-white ">
              <div className=" font-normal pb-4 ">
              Boost your brand presence with our effective social media strategies and engaging content.
              </div>
            </div>

            <div className="flex gap-4 border-orange-500 text-white ">
              <div className=" font-normal pb-2 ">
              Improve user experience with our sleek UI/UX designs and compelling graphic visuals.
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
            space-y-4
            h-full
            border rounded-3xl p-10
            md:w-1/3
            
            
                     
                        "
            >
              <div className="md:flex items-center gap-6 ">
              <FormField
  control={form.control}
  name="first_name"
  render={({ field }) => (
    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        First name *
      </FormLabel>
      <FormControl>
        <Input {...field} style={{backgroundColor: '#FFFFFF08', color: '#ffffff' }} />
      </FormControl>
    </FormItem>
  )}
/>


                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Last name *
                      </FormLabel>
                      <FormControl>
                      <Input {...field} style={{ backgroundColor: '#FFFFFF08', color: '#ffffff' }} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Email *
                    </FormLabel>
                    <FormControl>
                    <Input {...field} style={{ backgroundColor: '#FFFFFF08', color: '#ffffff' }} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Company name?
                    </FormLabel>
                    <FormControl>
                    <Input {...field} style={{ backgroundColor: '#FFFFFF08', color: '#ffffff' }} />
                    </FormControl>
                  </FormItem>
                )}
              />
<FormField
  control={form.control}
  name="services"
  render={({ field }) => (
    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Services you are interested in
      </FormLabel>
<Select
  onValueChange={field.onChange}
  defaultValue={field.value}
>
  <SelectTrigger style={{ backgroundColor: '#FFFFFF08', color:'#ffffff' }}>
    <SelectValue placeholder="Select an option" style={{ color: '#ffffff' }} />
  </SelectTrigger>
  <SelectContent style={{ backgroundColor: '#FFFFFF08' }}> {/* Açılan menü arka plan rengi */}
  <div className="flex flex-col gap-0 bg-black"> {/* Menü öğeleri arasındaki boşluğu ve yönünü ayarlar */}
      {["Mobile App Development", "Social Media Marketing", "UI/UX Design", "Branding", "Website Development"].map((service, index) => (
        <SelectItem key={index} value={service} style={{ backgroundColor: '#FFFFFF08', color: '#ffffff' }}> {/* Her menü öğesi için stil düzeltilmiş ve key eklenmiş */}
          {service}
        </SelectItem>
      ))}
    </div>
  </SelectContent>
</Select>

    </FormItem>
  )}
/>



<FormField
  control={form.control}
  name="help"
  render={({ field }) => (
    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        How can we help?
      </FormLabel>
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
      >
        <FormControl>
          <SelectTrigger style={{ backgroundColor: '#FFFFFF08', color:'#ffffff' }}> {/* Trigger stil uygulama */}
            <SelectValue placeholder="Select an option" style={{ color: '#ffffff' }} /> {/* Placeholder rengi */}
          </SelectTrigger>
        </FormControl>
        <SelectContent style={{ backgroundColor: '#FFFFFF08' }}> {/* Açılan menü arka plan rengi */}
  <div className="flex flex-col gap-0 bg-black"> {/* Menü öğeleri arasındaki boşluğu ve yönünü ayarlar */}
    {["Consulting for my project or company", "Learn More", "Get a Quote", "Other"].map((option, index) => (
      <SelectItem key={index} value={option} style={{ backgroundColor: '#FFFFFF08', color: '#ffffff' }}> {/* Her menü öğesi için stil */}
        {option}
      </SelectItem>
    ))}
  </div>
</SelectContent>

      </Select>
    </FormItem>
  )}
/>


              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Anything else ?
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-4 items-center">
                <div>
                  <Checkbox
                    className="
                    outline-none
                    border-2 border-[#ff6220]
                    text-sm
                    font-light
                    bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
                    hover:border-[#e55b1e]  // optional: change on hover
                "
                  />
                </div>
                <div className="text-xs font-light  md:w-3/4 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                I consent to receive marketing communications from Dodbyte.
                </div>
              </div>

              <div className="flex items-center gap-4">
              <Button
  type="submit"
  className="
            text-sm
            font-light
            bg-[#ff6220] text-white
            hover:bg-[#e55b1e]  // optional: change on hover
            disabled:bg-gray-400 disabled:text-gray-700
            "
  disabled={loading}
  onClick={() => form.handleSubmit(onSubmit)}
>
  Submit
</Button>

              </div>
            </form>
          ) : (
            <>
              <div
                className="
        text-xl 
        
        md:text-2xl 
        flex 
        items-center
        justify-center
        flex-col
        

 
        px-8

        "
              >
                <div className="w-80 py-20">
                  <PiSmiley className="text-6xl text-[#6c6684] mx-auto" />

                  <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10">
                    We&apos;ve received your inquiry and will be contacting you
                    via email shortly.
                  </div>
                </div>
              </div>
            </>
          )}
        </Form>
      </div>
      <div className="bg-020817 h-80"></div>
      <div className="bg-020817 h-20"></div>
    </div>

    </div>
    </>
  );
}