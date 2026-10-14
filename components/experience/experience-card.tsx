"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import { Icons } from "@/components/common/icons";
import { ExperienceInterface } from "@/config/experience";

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} — ${endYear}`;
};

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`w-full bg-background border rounded-xl transition-all duration-200 shadow-sm ${
        isExpanded
          ? "border-foreground/30 shadow-md ring-1 ring-border/50"
          : "border-border/80 hover:border-foreground/20 hover:bg-muted/10"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 sm:p-5 text-left flex items-start gap-3 sm:gap-4 cursor-pointer focus:outline-none"
        aria-expanded={isExpanded}
      >
        {experience.logo && (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-border/70 overflow-hidden bg-muted/40 flex-shrink-0 mt-0.5">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <h3 className="text-base font-bold text-foreground hover:text-primary transition-colors tracking-tight line-clamp-1">
              {experience.position}
            </h3>

            <div className="flex items-center gap-1.5 self-start sm:self-auto flex-shrink-0">
              <span className="font-mono text-[11px] text-muted-foreground bg-muted/70 border border-border/40 px-2 py-0.5 rounded">
                {getDurationText(experience.startDate, experience.endDate)}
              </span>
              <Icons.chevronDown
                className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                  isExpanded ? "rotate-180 text-foreground" : ""
                }`}
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2 flex-wrap">
            <span className="font-medium text-foreground/90">{experience.company}</span>
            <span>•</span>
            <span>{experience.location}</span>

            {experience.companyUrl && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(experience.companyUrl, "_blank", "noopener,noreferrer");
                }}
                role="button"
                tabIndex={0}
                className="inline-flex items-center gap-0.5 text-primary/80 hover:text-primary hover:underline ml-1 z-10"
                title={`Visit ${experience.company}`}
              >
                <span>Live</span>
                <Icons.externalLink className="w-2.5 h-2.5" />
              </span>
            )}
          </div>

          {!isExpanded && (
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-2">
              {experience.description[0]}
            </p>
          )}

          {!isExpanded && (
            <div className="flex flex-wrap gap-1">
              {experience.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono bg-muted/60 text-muted-foreground border border-border/40"
                >
                  {skill}
                </span>
              ))}
              {experience.skills.length > 3 && (
                <span className="inline-flex items-center px-1 py-0.5 rounded text-[11px] font-mono text-muted-foreground/60">
                  +{experience.skills.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </button>

      {/* Expandable Accordion Body */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-border/40 mt-1">
              <div className="pt-3 space-y-1.5">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80">
                  Overview
                </h4>
                <div className="space-y-1 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {experience.description.map((desc, dIdx) => (
                    <p key={dIdx}>{desc}</p>
                  ))}
                </div>
              </div>

              {experience.achievements && experience.achievements.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border/30 space-y-1.5">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80">
                    Key Impact & Deliverables
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-foreground/90">
                    {experience.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-1.5">
                        <span className="text-primary mt-0.5 font-bold text-xs">✓</span>
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.skills && experience.skills.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border/30">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80 mb-1.5">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {experience.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono bg-muted/60 text-muted-foreground border border-border/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceCard;
