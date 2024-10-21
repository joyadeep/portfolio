"use client"
import React, { useEffect } from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

type Props = {}

const GsapConfig = (props: Props) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    },[])
  return null
}

export default GsapConfig