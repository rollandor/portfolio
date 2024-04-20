import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import quantumQuillImg from "@/public/quantum_quill.png";
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
    description: {
      "ru": "Инновационный венчурный фонд, работающий как инвестиционная и фандрайзинговая платформа, реализованная в виде децентрализованной автономной организации (DAO), которая воплощает в жизнь криптопроекты за счет частных инвестиций участников.",
      "en": "An innovative venture fund operating as an investment and fundraising platform, implemented as a Decentralized Autonomous Organization (DAO).",
    },
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Solidity",
      "Hardhat",
    ],
    imageUrl: seedstarterImg,
  },
  {
    title: "QuantumQuill",
    description: {
      "ru": "QuantumQuill — это инновационный Web3 кошелек, созданный для безопасного и интуитивно понятного управления цифровыми активами с помощью передовых технологий шифрования. ",
      "en": "QuantumQuill is an innovative Web3 wallet designed to provide secure and intuitive management of digital assets through advanced encryption technologies. It offers a user-friendly interface for seamless transactions, staking, and access to decentralized financial services from any device.",
    },
    tags: [
      "React",
      "Next.js",
      "TypeScript",
    ],
    imageUrl: quantumQuillImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "Python",
  "Linux",
  "React",
  "C/C++",
  "Next.js",
  "Solidity",
  "Hardhat",
  "EthersJS",
  "PostgreSQL",
  "Docker",
] as const;
