'use client'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { ImageUploadForm } from "@/components/ImageUploadForm";
import { useState } from 'react';
import { Dropzone } from '@/components/ui/dropzone';
import { Separator } from "@/components/ui/separator"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return(

  <div className="flex flex-col items-center justify-center py-8" >
    <h1 className="text-4xl font-bold mb-4 text-black" style={{marginBottom: "50vh", marginTop: "30vh"}} >Transform Waste. Shape the Future.</h1>

    <h1 className="text-2xl mb-4" style={{marginBottom: "50px"}} >First visit? Here's how it works:</h1>

    <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl">
      <Card className="w-[350px]" style={{marginRight: "150px", marginBottom: "50px"}}>
        <CardHeader>
          <CardTitle>ECOchamp Web App</CardTitle>
          <CardDescription>Track your environmental impact and learn how to improve it.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Monitor your carbon footprint</li>
            <li>Get personalized tips to reduce waste</li>
            <li>Join challenges to improve your habits</li>
            <li>Earn rewards for eco-friendly actions</li>
          </ul>
        </CardContent>
      </Card>
      <img
        alt="ECOchamp Logo"
        className="mb-8"
        height="200"
        src="/img/ECOchampB.png"
        style={{
          aspectRatio: "339/200",
          objectFit: "cover",
        }}
        width="339"
      />
    </div>

    <Separator className="my-4" style={{marginBottom: "50px"}} />

    <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl"style={{marginBottom: "50px"}}>
      <img
          alt="ECOchamp Logo"
          className="mb-8"
          height="200"
          src="/img/ECOchampB.png"
          style={{
            aspectRatio: "339/200",
            objectFit: "cover",
            marginRight: "150px",
            marginBottom: "50px",
          }}
          width="339"
        />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>ECOchamp Web App</CardTitle>
          <CardDescription>Track your environmental impact and learn how to improve it.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Monitor your carbon footprint</li>
            <li>Get personalized tips to reduce waste</li>
            <li>Join challenges to improve your habits</li>
            <li>Earn rewards for eco-friendly actions</li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <Separator className="my-4" style={{marginBottom: "50px"}} />

    <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl">
      <Card className="w-[350px]" style={{marginRight: "150px", marginBottom: "50px"}}>
        <CardHeader>
          <CardTitle>ECOchamp Web App</CardTitle>
          <CardDescription>Track your environmental impact and learn how to improve it.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Monitor your carbon footprint</li>
            <li>Get personalized tips to reduce waste</li>
            <li>Join challenges to improve your habits</li>
            <li>Earn rewards for eco-friendly actions</li>
          </ul>
        </CardContent>
      </Card>
      <img
        alt="ECOchamp Logo"
        className="mb-8"
        height="200"
        src="/img/ECOchampB.png"
        style={{
          aspectRatio: "339/200",
          objectFit: "cover",
        }}
        width="339"
      />
    </div>

    <Separator className="my-4" style={{marginBottom: "50px"}} />

    <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl" >
      <img
          alt="ECOchamp Logo"
          className="mb-8"
          height="200"
          src="/img/ECOchampB.png"
          style={{
            aspectRatio: "339/200",
            objectFit: "cover",
            marginRight: "150px",
            marginBottom: "50px",
          }}
          width="339"
        />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>ECOchamp Web App</CardTitle>
          <CardDescription>Track your environmental impact and learn how to improve it.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Monitor your carbon footprint</li>
            <li>Get personalized tips to reduce waste</li>
            <li>Join challenges to improve your habits</li>
            <li>Earn rewards for eco-friendly actions</li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild className="cta">
            <Link href="/image-recognition">Waste Classify</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>

  </div>

  

  )
}

