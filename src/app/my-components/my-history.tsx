"use client";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@mui/material"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function MyHistory() {
    return (
        <>
            <ScrollArea className="h-[300px]">
                <Timeline
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        },
                    }}
                >
                    <TimelineItem>
                        <TimelineOppositeContent className="text-muted-foreground">
                            No atual momento
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="text-muted-foreground">
                            Atualmente
                            Após minha experiência na Vivaweb, optei por atuar como freelancer e nômade digital, conquistando maior flexibilidade de carreira. Nesse período, participei de projetos diversificados em tecnologia, ampliando meus conhecimentos em desenvolvimento web e mobile. Essa trajetória me possibilitou colaborar com clientes de diferentes setores e culturas, fortalecendo minha capacidade de adaptação e entregando soluções personalizadas e inovadoras.

                            Sempre em busca de novos desafios, mantenho o foco no aprimoramento contínuo das minhas habilidades e na contribuição para projetos de impacto no campo da tecnologia.
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className="text-muted-foreground">
                            Empresa: Vivaweb
                            Cargo: Desenvolvedor Web & Mobile
                            Período: 01/2020 - 06/2022 (2 anos e 5 meses)
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="text-muted-foreground">
                            Selecionado em janeiro de 2020 para o programa de recrutamento intensivo da empresa.

                            Reconhecido como melhor desempenho do programa, conquistando posição efetiva em junho de 2020.

                            Atuação no desenvolvimento de aplicações e sites focados na experiência do usuário.

                            Contribuição em projetos inovadores de web e mobile, aplicando tecnologias de ponta.

                            Responsável por garantir a entrega de soluções de alta qualidade e aprimoramento contínuo das habilidades técnicas.
                            enhancing my skills in cutting-edge technologies, and ensuring the delivery of high-quality solutions.
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className="text-muted-foreground">
                            Empresa: Unimed Maringá
                            Cargo: Estagiário de Infraestrutura
                            Período: 12/2016 – 12/2018 (2 anos)
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent className="text-muted-foreground">
                            Prestação de suporte de primeiro nível (remoto e presencial) para cooperados e colaboradores.

                            Atendimento a demandas de hardware, software, telefonia e sistemas.

                            Atuação na administração de servidores e redes, incluindo criação de usuários e gerenciamento de grupos no Exchange.

                            Responsável pelo monitoramento do data center.

                            Participação em projetos de infraestrutura, desenvolvendo visão sistêmica para identificação de problemas e proposição de melhorias.
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </ScrollArea>
        </>
    )
}