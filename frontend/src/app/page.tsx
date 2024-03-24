'use client'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { FormRecognize } from "@/components/FormRecognize";
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);

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
          <Input type="file" accept="image/x-png,image/jpeg" onChange={handleFileChange} />

          {/* <Button className="w-full">Select Image</Button> */}
          <div className="flex gap-2">
            <Button className="flex-1" onClick={handleSubmit}>Submit</Button>
            <Button className="flex-1">Reset</Button>
          </div>
        </div>
      </div>
      {image && (
        <Image src={image} alt="Selected Image" width={300} height={300} />
      )}
      {result && (
        <div>
          <h2>Result JSON:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {/* <FormRecognize /> */}






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
