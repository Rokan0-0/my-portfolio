"use client";

import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative block w-full p-5 sm:p-6 bg-background border border-border/80 hover:border-foreground/30 rounded-xl h-full flex flex-col transition-all duration-200 hover:bg-muted/15 shadow-sm cursor-pointer"
    >
      <div className="relative w-full h-[200px] flex-shrink-0 overflow-hidden rounded-lg border border-border/70 bg-muted/20">
        <Image
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />

        <div className="absolute top-3 right-3 p-1.5 rounded-md bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground">
          {project.type === "Personal" ? (
            <Icons.userFill className="h-3.5 w-3.5" />
          ) : (
            <Icons.work className="h-3.5 w-3.5" />
          )}
        </div>
      </div>

      <div className="pt-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2.5 min-w-0">
            {project.logoIcon && (
              <div className="w-7 h-7 rounded-md border border-border/60 overflow-hidden bg-muted/40 flex-shrink-0">
                <Image
                  src={project.logoIcon}
                  alt={project.companyName}
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            )}
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors truncate">
              {project.companyName}
            </h3>
          </div>

          <Icons.chevronRight className="w-4 h-4 text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
          {project.shortDescription}
        </p>

        <div className="mt-auto pt-2 flex items-center justify-between gap-2 border-t border-border/40">
          <div className="flex gap-1.5 flex-wrap">
            {project.category.slice(0, 3).map((cat, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono text-muted-foreground bg-muted/60 border border-border/40"
              >
                {cat}
              </span>
            ))}
          </div>

          {project.websiteLink && (
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.websiteLink, "_blank", "noopener,noreferrer");
              }}
              role="button"
              tabIndex={0}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors p-1"
              title="Visit live site"
            >
              <Icons.externalLink className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
