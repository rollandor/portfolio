import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import seedstarterImg from "@/public/seedstarter.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated collage",
    location: "Perm, Russia",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a back-end python developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "UJIN.tech. Integration Engineer",
    location: "Perm, Russia",
    description:
      "Development of the backend part of projects in the field of smart buildings.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "RPD.RU. C++ Developer",
    location: "Moscow, Russia",
    description:
      "Development/maintenance of highly loaded components for NAT system. Code base supporting/refactoring.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "VK. C++ Developer",
    location: "Moscow, Russia",
    description:
      "Development of the backend part for VKTeams messenger video calls. Writing microservices in Go, C++. Designing micro-service architecture.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Seedstarter ICO",
    description:
      "I worked as a full-stack developer on this startup project. It represents a decentralized private investors venture fund.",
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "Solidity", "Hardhat"],
    imageUrl: seedstarterImg,
  },
] as const;

export const skillsData = [
  "C/C++",
  "Python",
  "Golang",
  "Linux",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Solidity",
  "Hardhat",
  "EthersJS",
  "PostgreSQL",
  "Docker",
  "UML",
] as const;
