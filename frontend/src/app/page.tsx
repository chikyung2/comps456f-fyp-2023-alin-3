'use client'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
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
  return (

    <div className="flex flex-col items-center justify-center py-8" >
      <h1 className="text-6xl font-bold mb-4 text-gray-800" style={{ marginBottom: "50vh", marginTop: "30vh" }} >綠色循環 共創智慧</h1>
      <Separator className="my-4" style={{ marginBottom: "50px" }} />
      <h1 className="text-2xl mb-4" style={{ marginBottom: "50px" }} >首次來到? 請先仔細閱讀:</h1>

      <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl">
        <Card className="w-[350px]" style={{ marginRight: "150px", marginBottom: "50px" }}>
          <CardHeader>
            <CardTitle>步驟1: 前往「垃圾分類」頁面</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>請至「垃圾分類」頁面。</li>
              <li>您可以在網頁的右上角中找到它。</li>
            </ul>
          </CardContent>
        </Card>
        <Image
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

      <Separator className="my-4" style={{ marginBottom: "50px" }} />

      <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl" style={{ marginBottom: "50px" }}>
        <Image
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
            <CardTitle>步驟2: 選擇垃圾圖片</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>找到上傳垃圾圖片的位置，通過點擊圖片顯示區來完成。</li>
              <li>選擇您要分類的垃圾物品的圖片。確保圖片清晰,並突出顯示該垃圾物品。</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" style={{ marginBottom: "50px" }} />

      <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl">
        <Card className="w-[350px]" style={{ marginRight: "150px", marginBottom: "50px" }}>
          <CardHeader>
            <CardTitle>步驟3: 按下「查詢」按鈕</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>選擇好圖片後,找到「查詢」按鈕並點擊它。</li>
              <li>網站將處理這張圖片並分析其內容,以確定垃圾的類別。</li>
            </ul>
          </CardContent>
        </Card>
        <Image
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

      <Separator className="my-4" style={{ marginBottom: "50px" }} />

      <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl" >
        <Image
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
            <CardTitle>步驟4: 查看結果和回收指引</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>分析完成後,網站會顯示垃圾分類的結果。</li>
              <li>查看分配給該物品的垃圾類別或標籤,以及關於該垃圾類型的簡要說明和回收資訊。</li>
              <li>注意任何關於如何正確處理或處置該垃圾的具體說明或指南。</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" style={{ marginBottom: "50px" }} />

      <div className="flex flex-col md:flex-row justify-start w-full max-w-4xl">
        <Card className="w-[350px]" style={{ marginRight: "150px", marginBottom: "50px" }}>
          <CardHeader>
            <CardTitle>步驟5: 重置並預測下一個</CardTitle>
            <CardDescription> (可選)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>如果您還有更多垃圾需要分類,您可以重置並預測下一個。</li>
              <li>找到「重置」按鈕並點擊它,以清除當前的圖像和分類結果。</li>
              <li>針對每個需要分類的垃圾物品,重複步驟2到4。</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild className="cta">
              <Link href="/image-recognition">垃圾分類</Link>
            </Button>
          </CardFooter>
        </Card>
        <Image
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

