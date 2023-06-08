import GradientBar from "../components/GradientBar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    SiVisualstudiocode,
    SiDocker,
    SiGit,
    SiGo,
    SiNextdotjs as SiNextJs,
    SiNodedotjs as SiNodeJs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiYarn,
    SiSwift,
    SiKubernetes,
    SiJavascript,
    SiPython,
    SiNestjs,
    SiPrisma,

} from "react-icons/si";
import { FaAws, FaRust} from "react-icons/fa";
import { DiGoogleCloudPlatform,DiJava } from "react-icons/di";

import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";
import Link from "next/link";

interface AppProps {
    stats: Record<string, number>;
    topRepos: Record<any, any>;
}

const Index = ({ stats, topRepos }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Adeola 👋</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                I'm a software engineer who's dedicated to building applications that are both inwardly and outwardly
                elegant, as I believe that successful end products require both structural integrity and aesthetic
                value.
            </p>

            <h2 className="font-medium text-3xl mb-4">What I Do 💭</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
                I'm passionate about everything technology; from designing and developing software, to understanding how
                the many moving parts of the internet work together, to cloud, systems, programming, and so much more. I
                strive to learn more about these things every day, and utilize my knowledge to further understand{" "}
                <i>how</i> or <i>why</i> the technology around us works.
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I use a variety of tools to streamline my development process and increase the quality of both my code,
                and my projects. Below is a list of technologies and languages I've had experience with in the past, or
                use currently.
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiPython} name="Python" />
                <TechItem icon={DiJava} name="Java" />
                <TechItem icon={FaRust} name="Rust" />
                <TechItem icon={SiJavascript} name="JavaScript" />
                <TechItem icon={SiTypescript} name="TypeScript" />
                <TechItem icon={SiReact} name="React.js" />
                <TechItem icon={SiNestjs} name="Nest.js" />
                <TechItem icon={SiDocker} name="Docker" />
            </div>

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I am presently engaged in contributing to <a href={"https://github.com/unifyai/ivy"}  className="font-semibold"> Ivy </a>as an open-source contributor.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
                {topRepos.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};

export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/adeola23`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/adeola23/repos?type=all&sort=updated&per_page=100`).then(res =>
        res.json()
    );

    const topRepos = repos
       
        .slice(0, 6);

    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Index;
