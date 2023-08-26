"use client";

import ButtonTheme from "@/components/ui/button-theme";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import MyContacts from "@/components/ui/my-contacts";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Divider } from "@mui/material";

import brain from '../../public/brain.png'
import my from '../../public/allan.jpeg'
import seo from '../../public/seo.png'
import Image from "next/image"
import { front, back, devops } from '../lib/stacks';
import Loading from "./loading";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <div className="flex items-center justify-end pt-5 pr-3">
            <ButtonTheme />
          </div>
        </section>
        <section className="my-10">
          <Card className="sm:p-5 md:p-10">
            <div className="flex justify-center mb-5 mt-5">
              <Image
                src={my}
                alt="allan"
                width={300}
                height={300}
                className="rounded-full opacity-50 xl:mt-5"
              />
            </div>
            <h1 className="text-center mb-10 text-3xl font-extrabold">
              Hello! My name is Allan
            </h1>
            <Card >
              <p className="p-5 text-justify text-muted-foreground">
                I am a highly skilled Full-stack Developer with four years of extensive experience in crafting cutting-edge web applications. My passion for web development is matched only by my enthusiasm for making a meaningful impact through technology. I possess a robust skill set that encompasses both front-end and back-end development, allowing me to create seamless, user-friendly web experiences.
                Throughout my career, I have had the privilege of working on a diverse range of projects, from e-commerce platforms to content management systems and everything in between. My commitment to staying up-to-date with the latest industry trends and technologies ensures that I can deliver solutions that are not only functional but also innovative. <br />

                I thrive in collaborative environments and take pride in my ability to communicate effectively with cross-functional teams, turning ideas into reality. My dedication to clean code practices, performance optimization, and a user-centered approach is evident in the quality of my work.
                I am driven by a strong desire to contribute to the ever-evolving world of web development, and I am eager to take on new challenges and create exceptional digital experiences. Let's work together to bring your web projects to life and make a lasting impact in the digital realm.
              </p>
            </Card>
          </Card>
        </section>
        <section className="card my-10">
          <Card className="p-10">
            <h2 className="text-center mb-10 text-3xl font-extrabold">
              Experience<br /> to create scalable applications.
            </h2>
            <Card className="mx-5">
              <Skeleton>
                <div className="flex justify-center items-center ">
                  <Image
                    src={brain}
                    alt="brain"
                    width={600}
                    height={600}
                  />
                </div>
              </Skeleton>
            </Card>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-10 px-5">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <Skeleton className="w-[10px] h-[100px]" />
                </div>
                <Card className="h-full">
                  <h1 className="text-center py-5 text-lg font-bold">
                    FrontEnd
                  </h1>
                  <Divider />
                  <Timeline position="alternate">
                    {front.map((tech, index) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot>
                          </TimelineDot>
                          {index < front.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{tech.name}</TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Card>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <Skeleton className="w-[10px] h-[100px]" />
                </div>
                <Card className="h-full">
                  <h1 className="text-center py-5 text-lg font-bold">
                    BackEnd
                  </h1>
                  <Divider />
                  <Timeline position="alternate">
                    {back.map((tech, index) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot>
                          </TimelineDot>
                          {index < back.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{tech.name}</TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Card>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <Skeleton className="w-[10px] h-[100px] relative" />
                </div>
                <Card className="h-full">
                  <h1 className="text-center py-5 text-lg font-bold">
                    DevOps
                  </h1>
                  <Divider />
                  <Timeline position="alternate">
                    {devops.map((tech, index) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot>
                          </TimelineDot>
                          {index < devops.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{tech.name}</TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Card>
              </div>
            </div>
          </Card>
        </section>
        <section className="my-10">
          <Card className="p-10">
            <div className="text-center mb-10">
              <h4 className=" mb-10 text-3xl font-extrabold">
                "If you're not on the first page of Google,<br /> you don't exist."
              </h4>
              <p className="text-muted-foreground ml-auto mr-auto w-auto sm:w-1/2">
                With a solid and dedicated professional journey, I am proud to share my proven ability to significantly boost the ranking and performance of projects, websites, and online businesses. My passion for optimization and excellence has led me to achieve exceptional results over the years.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div>
                <Image
                  src={seo}
                  alt="seo-perform"
                  width={150}
                  height={150}
                />
                <p className="text-lg font-bold mt-2 text-center">Performance</p>
              </div>
              <div>
                <Image
                  src={seo}
                  alt="seo-perform"
                  width={150}
                  height={150}
                />
                <p className="text-lg font-bold mt-2 text-center">Accessibility</p>
              </div>
              <div>
                <Image
                  src={seo}
                  alt="seo-perform"
                  width={150}
                  height={150}
                />
                <p className="text-lg font-bold mt-2 text-center">Best Practices</p>
              </div>
              <div>
                <Image
                  src={seo}
                  alt="seo-perform"
                  width={150}
                  height={150}
                />
                <p className="text-lg font-bold mt-2 text-center">SEO</p>
              </div>
            </div>
            <div className="text-center my-10">
              <Button variant="outline">
                <Link rel="noopener noreferrer" target="_blank" href="https://pagespeed.web.dev/analysis/https-allan-dev-portfolio-vercel-app/2mibahwiw7?form_factor=mobile">
                  Take the test yourself!
                </Link>
              </Button>
            </div>
          </Card>
        </section>
        <section id="#mycontacts">
          <Card className="p-10">
            <MyContacts />
          </Card>
        </section>
      </main >
    </>
  )
}
