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
    <h1 className="text-4xl font-bold mb-4 text-gray-800" style={{marginBottom: "50vh", marginTop: "30vh"}} >Transform Waste. Shape the Future.</h1>
    <Separator className="my-4" style={{marginBottom: "50px"}} />
    <h1 className="text-2xl mb-4" style={{marginBottom: "50px"}} >First visit? Here's how it works:</h1>

    <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl">
      <Card className="w-[350px]" style={{marginRight: "150px", marginBottom: "50px"}}>
        <CardHeader>
          <CardTitle>Step 1: Go to the Waste Classify Page</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Navigate to the Waste Classify page.</li>
            <li>You can usually find it in the main menu or navigation bar.</li>
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
          <CardTitle>Step 2: Select the Waste Image</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Look for the option to select or upload a waste image. This can typically be done by clicking on a button or an image placeholder.</li>
            <li>Choose an image of the waste item you want to classify. Make sure the image is clear and shows the waste item prominently.</li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <Separator className="my-4" style={{marginBottom: "50px"}} />

    <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl">
      <Card className="w-[350px]" style={{marginRight: "150px", marginBottom: "50px"}}>
        <CardHeader>
          <CardTitle>Step 3: Press the Predict Button</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Once you have selected the waste image, locate the "Predict" button and click on it.</li>
            <li>The app will process the image and analyze its content to determine the waste category.</li>
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
          <CardTitle>Step 4: View the Result and Description</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>After the analysis is complete, the app will display the result of the waste classification.</li>
            <li>Look for the waste category or label assigned to the item, along with a brief description or additional information about the waste type.</li>
            <li>Take note of any specific instructions or guidelines provided regarding proper disposal or handling of the waste.</li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <Separator className="my-4" style={{marginBottom: "50px"}} />

    <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl">
      <Card className="w-[350px]" style={{marginRight: "150px", marginBottom: "50px"}}>
        <CardHeader>
          <CardTitle>Step 5: Reset and Predict Next One</CardTitle>
          <CardDescription> (Optional)</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>If you have more waste items to classify, you can reset the app and predict the next one.</li>
            <li>Locate the "Reset" button and click on it to clear the current image and classification result.</li>
            <li>Repeat steps 2 to 4 for each waste item you want to classify.</li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild className="cta">
            <Link href="/image-recognition">Waste Classify</Link>
          </Button>
        </CardFooter>
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

  </div>

  

  )
}

