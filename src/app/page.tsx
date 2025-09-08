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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MyHistory from "@/app/my-components/my-history";

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
              Olá! meu nome é Allan Batista
            </h1>
            <Card >
              <p className="p-5 text-justify text-muted-foreground">
                Sou um Desenvolvedor Full-stack altamente qualificado, com quatro anos de ampla experiência na criação de aplicações web inovadoras. Minha paixão pelo desenvolvimento web só se iguala ao meu entusiasmo em causar um impacto significativo por meio da tecnologia. Possuo um conjunto sólido de habilidades que abrange tanto o front-end quanto o back-end, permitindo-me criar experiências digitais fluidas e fáceis de usar.

                Ao longo da minha carreira, tive o privilégio de trabalhar em uma ampla variedade de projetos, desde plataformas de e-commerce até sistemas de gerenciamento de conteúdo e muito mais. Meu compromisso em me manter atualizado com as últimas tendências e tecnologias do setor garante que eu possa entregar soluções não apenas funcionais, mas também inovadoras.

                Destaco-me em ambientes colaborativos e me orgulho da minha capacidade de me comunicar de forma eficaz com equipes multifuncionais, transformando ideias em realidade. Minha dedicação a práticas de código limpo, otimização de desempenho e uma abordagem centrada no usuário fica evidente na qualidade do meu trabalho.

                Sou movido por um forte desejo de contribuir para o mundo em constante evolução do desenvolvimento web e estou sempre disposto a enfrentar novos desafios e criar experiências digitais excepcionais. Vamos trabalhar juntos para dar vida aos seus projetos web e gerar um impacto duradouro no universo digital
              </p>
            </Card>
          </Card>
        </section>
        <section className="my-10">
          <Card className="p-10">
            <h4 className=" mb-10 text-3xl font-extrabold text-center">
              Do início até hoje da minha carreira em tecnologia
            </h4>
            <MyHistory />
          </Card>
        </section>
        <section className="card my-10">
          <Card className="p-10">
            <h2 className="text-center mb-10 text-3xl font-extrabold">
              Experiência<br /> desenvolver aplicações escaláveis ✅
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
                "Se você não está na primeira página do Google, você não existe."
              </h4>
              <p className="text-muted-foreground ml-auto mr-auto w-auto sm:w-1/2">
                Profissional com trajetória sólida e dedicada, capaz de melhorar significativamente o desempenho e ranking de projetos, sites e negócios online, com foco em otimização e excelência.
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
            {/* <div className="text-center my-10">
              <Button variant="outline">
                <Link rel="noopener noreferrer" target="_blank" href="https://pagespeed.web.dev/analysis/https-allan-dev-portfolio-vercel-app/2mibahwiw7?form_factor=mobile">
                  Take the test yourself!
                </Link>
              </Button>
            </div> */}
          </Card>
        </section>
        <section className="mb-10">
          <Card className="p-10">
            <MyContacts />
          </Card>
        </section>
      </main >
    </>
  )
}
