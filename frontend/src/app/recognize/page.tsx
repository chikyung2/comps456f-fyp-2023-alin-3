'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Image as ImageIcon, CircleCheck, CircleX } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ApiResponse {
  details: {
    type: string,
    info: string,
    icon: string,
    recyclable: boolean
  },
  prediction: {
    confidence: number;
    name: string;
  }
}

export default function Page() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [uploadedImage, setUploadedImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setUploadedImage(URL.createObjectURL(file))
    setFile(file);
  }

  const handleSubmit = async () => {
    if (!file) return
    setLoading(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://127.0.0.1:8080/recognize', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  }

  const resetState = () => {
    setFile(null);
    setUploadedImage("");
    setResult(null);
  };

  const toPercentage = (confidence: any) => {
    return Math.round(confidence * 100 * 10) / 10;
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle className="text-2xl">分類物品</CardTitle>
              <CardDescription>拿起相機拍照或從圖庫中選擇照片。輕鬆知道廢棄物的類別。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {uploadedImage ? <Image src={uploadedImage} alt="Selected Image" width={0} height={0} className="w-full max-h-96 object-cover" /> : (
                  <Label htmlFor="upload" className="gap-2 w-full h-40 border-dashed border-2 border-muted-foreground flex flex-col items-center justify-center cursor-pointer">
                    <Input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="upload" />
                    <ImageIcon className="text-muted-foreground" />
                    <Label className="text-sm text-muted-foreground">點擊上傳</Label>
                  </Label>)}

                {result ? (
                  <>
                    <div className="text-md">
                      Predicted {result.details.type} with {toPercentage(result.prediction.confidence)}% confidence
                    </div>
                    {result.details.recyclable ? (
                      <Alert variant="info">
                        <CircleCheck className="primary h-4 w-4" />
                        <AlertTitle>Recycle out of home</AlertTitle>
                        <AlertDescription>
                          {result.details.type} can be recycled at some out of home locations - find out more recycling tips below.
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <Alert variant="destructive">
                        <CircleX className="primary h-4 w-4" />
                        <AlertTitle>Bin it</AlertTitle>
                        <AlertDescription>
                          {result.details.type} can not be recycled. Throw it to the bin.
                        </AlertDescription>
                      </Alert>
                    )}

                    <Button className="flex-1" onClick={resetState}>查詢其他物件</Button>
                  </>
                ) : (<div className="flex max-md:flex-col gap-2">
                  <Button type='submit' className="flex-1" onClick={handleSubmit} disabled={!file || loading}>查詢</Button>
                  <Button className="flex-1" onClick={resetState}>重置</Button>
                </div>)}
              </div>
            </CardContent>
          </Card>

          {result && result.details && (
            <Card className="w-full max-w-lg">
              <CardHeader>
                <Avatar>
                  <AvatarImage src={`/img/${result.details.icon}`} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">How to recycle {result?.details.type}
                </CardTitle>
                {/* <CardDescription>Take a photo with camera or select from the gallery. Easily know the category of the waste.</CardDescription> */}
              </CardHeader>
              <CardContent>
                <p dangerouslySetInnerHTML={{ __html: result.details.info }}></p>
              </CardContent>
            </Card>)
          }
        </div>
      </div>
    </>
  );
}
