// @ts-nocheck
"use client"
import React, {useState, useEffect} from "react";
import anime from "animejs";
import Image from "next/image";

const SplashScreen = ({ finishLoading }) => {

    const [isMounted, setIsMounted] = useState(false)

    const animate = ()=>{
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader
            .add ({
                targets: "#logo",
                delay: 0,
                scale: 1,
                duration: 500,
                easing: "easeInOutExpo",
            })

            .add ({
                targets: "#logo",
                delay: 0,
                scale: 2,
                duration: 500,
                easing: "easeInOutExpo",
            })
    }

        useEffect(()=>{
            const timeout = setTimeout(()=> setIsMounted(true), 10)
            animate()
            return () => clearTimeout(timeout)
        },[])

    return 
        <div className="flex h-screen items-center justify-center"
        isMounted={isMounted}>
            <image id="logo" src="/img/ECOchampA.png" alt="" width={60} height={60}/>
        </div>
}

export default SplashScreen;