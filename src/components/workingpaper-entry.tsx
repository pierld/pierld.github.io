"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { PaperLink, WorkingPaper } from "@/data/workingpapers";

export function WorkingPaperEntry({
  workingpaper,
}: {
  workingpaper: WorkingPaper;
}) {
  const [showAbstract, setShowAbstract] = useState(false);

  const paperLinks: PaperLink[] = !workingpaper.paperUrl
    ? []
    : typeof workingpaper.paperUrl === "string"
    ? [{ label: "Paper", url: workingpaper.paperUrl }]
    : workingpaper.paperUrl;

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {workingpaper.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative">
          <Image
            src={workingpaper.imageUrl}
            alt={workingpaper.title}
            width={160}
            height={200}
            className="rounded-lg transition-all duration-300"
          />
        </div>
      )}

      <div className="flex flex-col flex-1">
        <h3 className="font-serif font-medium text-md mb-3 text-mycolor0">{workingpaper.title}</h3>
        
        <p className="text-sm text-zinc-600 mb-2">{workingpaper.authors}</p>
        
        {workingpaper.subtitle && (
          <p className="text-xs text-zinc-500 mb-4">
            {workingpaper.subtitle}
          </p>
        )}

        {(paperLinks.length > 0 || workingpaper.codeUrl || workingpaper.bibtex) && (
        <div className="flex flex-row gap-6">

          {paperLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">{link.label}</span>
            </a>
          ))}

          {workingpaper.codeUrl && (
            <a
              href={workingpaper.codeUrl}
              target="_blank"
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}

          {workingpaper.bibtex && (
            <a
              href={workingpaper.bibtex}
              target="_blank"
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">BibTeX</span>
            </a>
          )}
        </div>
        )}
        
          
        {workingpaper.tldr && (
          <div className={workingpaper.subtitle || paperLinks.length > 0 || workingpaper.codeUrl || workingpaper.bibtex ? "mt-4" : "mt-1"}>
            <button
              type="button"
              onClick={() => setShowAbstract((prev) => !prev)}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              {showAbstract ? (
                <ChevronDown size={12} />
              ) : (
                <ChevronRight size={12} />
              )}
              {/* tracking-wider uppercase */}
              <span className="tracking-wider">abstract</span>
            </button>
            {showAbstract && (
              <p className="text-sm italic text-zinc-600 mt-2">
                {workingpaper.tldr}
              </p>
            )}
          </div>
        )}

      </div>

    </div>
  );
}
