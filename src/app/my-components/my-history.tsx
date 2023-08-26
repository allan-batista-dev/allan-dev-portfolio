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
                            At the moment
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="text-muted-foreground">
                            Following my experience at Vivaweb, I decided to pursue a more flexible career as a freelancer and digital nomad.
                            This allowed me to explore new challenges in technology, working on diverse projects and expanding my knowledge in various areas.
                            My journey as an independent professional provided me with the opportunity
                            to collaborate with clients from different industries and cultures, broadening my expertise in web and mobile development.<br />
                            I am always seeking new challenges and opportunities to enhance my skills and contribute to
                            innovative projects in the technology field.
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className="text-muted-foreground">
                            Company: Vivaweb
                            Position: Web & Mobile Developer
                            Period: 01/2020 - 06/2022 (2 years and 5 months)
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="text-muted-foreground">
                            In January 2020, I had the honor of being selected to participate in Vivaweb's recruitment program,
                            an intensive internship designed for individuals starting their careers in development. During the first six months, along with seven other talented participants, I underwent a rigorous programming-focused training program, where the competition was fierce,
                            culminating in the selection of the best performers. With dedication and determination, I was
                            recognized as the participant with the highest performance and
                            commitment, earning a permanent position at the company in June 2020.<br />
                            Since then, I have been serving as a Web & Mobile Developer at Vivaweb,
                            actively contributing to innovative projects in the web and mobile development domains.
                            My responsibilities include developing user-focused applications and websites,
                            enhancing my skills in cutting-edge technologies, and ensuring the delivery of high-quality solutions.
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className="text-muted-foreground">
                            Company: Unimed Maringá
                            Position: Infrastructure Intern
                            Period: 12/2016 - 12/2018 (2 years)
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent className="text-muted-foreground">
                            During my tenure as an Infrastructure intern at Unimed Maringá, I had the opportunity
                            to immerse myself in the field of information technology. My responsibilities included first-level support,
                            providing technical assistance through remote and on-site support
                            for both cooperators and employees, addressing issues related to hardware, software, telephony, and systems.<br />
                            Additionally, I actively participated in server and network administration, including user creation,
                            Exchange distribution group management, and data center monitoring.
                            I was also involved in infrastructure projects, where I gained a
                            systemic view to identify issues and propose effective improvements.
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </ScrollArea>
        </>
    )
}