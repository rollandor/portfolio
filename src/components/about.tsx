"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/src/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have enjoyed programming since childhood. I remember creating my first 
        websites using pure HTML/CSS in Notepad and writing simple programs in Pascal. 
        Four years ago I began programming professionally. During this time I have 
        explored many fields of programming, with a focus on backend development. 
        I developed my own microservices to solve significant business issues. 
        I enjoy deassembling the inner implementations of large scale projects such 
        as CPython, V8 and the Linux kernel. Recently I have become interested in 
        blockchain technology, and I would like to be a part of this exciting field.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing piano. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. 
      </p>
    </motion.section>
  );
}
