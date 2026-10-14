"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import { AnimatedSection } from "@/components/common/animated-section";
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

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  // Keep track of which cards are expanded. Default the first 2 open for immediate reading.
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    [sortedExperiences[0]?.id || ""]: true,
    [sortedExperiences[1]?.id || ""]: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-4">
      {sortedExperiences.map((experience, index) => {
        const isExpanded = !!expandedIds[experience.id];

        return (
          <AnimatedSection
            key={experience.id}
            delay={0.05 * (index + 1)}
            direction="up"
          >
            <div
              className={`w-full bg-background border rounded-xl transition-all duration-200 shadow-sm ${
                isExpanded
                  ? "border-foreground/30 shadow-md ring-1 ring-border/50"
                  : "border-border/80 hover:border-foreground/20 hover:bg-muted/10"
              }`}
            >
              {/* Card Header — acts as the accordion toggle */}
              <button
                type="button"
                onClick={() => toggleExpand(experience.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isExpanded}
              >
                {experience.logo && (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border border-border/70 overflow-hidden bg-muted/40 flex-shrink-0 mt-0.5">
                    <Image
                      src={experience.logo}
                      alt={experience.company}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-foreground hover:text-primary transition-colors tracking-tight">
                      {experience.position}
                    </h3>

                    <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                      <span className="font-mono text-xs text-muted-foreground bg-muted/70 border border-border/40 px-2.5 py-0.5 rounded-md">
                        {getDurationText(experience.startDate, experience.endDate)}
                      </span>
                      <Icons.chevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-foreground" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                    <span className="font-medium text-foreground/90">
                      {experience.company}
                    </span>
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
                        className="inline-flex items-center gap-1 text-xs text-primary/80 hover:text-primary hover:underline ml-1 z-10"
                        title={`Visit ${experience.company}`}
                      >
                        <span>Visit Live</span>
                        <Icons.externalLink className="w-3 h-3" />
                      </span>
                    )}
                  </div>

                  {/* Collapsed preview line */}
                  {!isExpanded && (
                    <p className="mt-2 text-sm text-muted-foreground/80 line-clamp-1">
                      {experience.description[0]}
                    </p>
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
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-border/40 mt-1">
                      {/* Summary Section */}
                      <div className="pt-4 space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">
                          Overview
                        </h4>
                        <div className="space-y-1.5 text-sm text-foreground/90 leading-relaxed">
                          {experience.description.map((desc, dIdx) => (
                            <p key={dIdx}>{desc}</p>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-border/30 space-y-2">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">
                            Key Impact & Deliverables
                          </h4>
                          <ul className="space-y-1.5 text-sm text-foreground/90">
                            {experience.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2">
                                <span className="text-primary mt-1 font-bold text-xs">✓</span>
                                <span className="leading-relaxed">{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack */}
                      {experience.skills && experience.skills.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-border/30">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80 mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {experience.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-muted/60 text-muted-foreground border border-border/40"
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
          </AnimatedSection>
        );
      })}
    </div>
  );
};

export default Timeline;
