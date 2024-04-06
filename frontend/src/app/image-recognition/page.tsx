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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState<string[]>([]);

  const handleFileChange = (e) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file))
    setSelectedImage(file);
  }

  const handleSubmit = async () => {
    if (!selectedImage) return

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('http://127.0.0.1:8080/recognize', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-bold md:text-2xl">Classify Waste</h1>
        <p className="text-md text-foreground text-center">
          Take a photo with camera or select from the gallery. Easily know the category of the waste.
        </p>
      </div>

      <div className="border rounded-lg shadow-sm p-4">
        <div className="flex flex-col gap-4">
          {image ? <Image src={image} alt="Selected Image" width={0} height={0} className="w-full h-auto" /> : (
            <Input type="file" accept=".jpeg, .png" onChange={handleFileChange} />)}

          {/* <Button className="w-full">Select Image</Button> */}
          <div className="flex max-md:flex-col gap-2">
            <Button type='submit' className="flex-1" onClick={handleSubmit}>Predict</Button>
            <Button className="flex-1">Reset</Button>
          </div>
        </div>
      </div>
      {/* <ImageUploadForm /> */}
      {result && (
        <div>
          <h2 className="text-xl font-semibold">Result</h2>
          {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
          <Card>
            <CardHeader>
              <CardTitle>Recyclable</CardTitle>
              <CardDescription>Predicted paper bag with 80% confidence</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Recyclable Type: Paper</p>
              <p>Item: Paper bag (predicted with 80% confidence)</p>
              <p>Recycling Tips: Remove non-paper materials, Keep dry.</p>
            </CardContent>
            <CardFooter>
              <p>Is it correct?</p>
            </CardFooter>
          </Card>
        </div>
      )}
      {/* <Dropzone
        onChange={setFiles}
        className="w-full"
        fileExtension="image/*"
      />
      {files.map((file) => (
        <Image key={file} src={files} alt="Uploaded File" width={300} height={300} />
      ))} */}






      {/* <div className="border rounded-lg shadow-sm p-4">
        <h1 className="font-semibold text-2xl text-black">Main page</h1>
        <img alt="App Logo" className="h-20 w-30" src="/img/ECOchampB.png" />
        <p className="max-w-prose text-gray-500 text-sm md:text-base/relaxed dark:text-gray-400">
          ECOchamp is a free web application to.....................
        </p>
      </div> */}
    </>
  );
}
