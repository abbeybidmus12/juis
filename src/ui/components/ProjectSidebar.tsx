"use client";
/*
 * Documentation:
 * ProjectSidebar — https://app.subframe.com/library?component=ProjectSidebar_fa5125fc-ece5-4b80-b4d9-69fb5c009fe8
 */

import React from "react";
import * as SubframeUtils from "../utils";

interface ProjectSidebarRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  navigationItems?: React.ReactNode;
  recentProjects?: React.ReactNode;
  actionButton?: React.ReactNode;
  className?: string;
}

const ProjectSidebarRoot = React.forwardRef<
  HTMLDivElement,
  ProjectSidebarRootProps
>(function ProjectSidebarRoot(
  {
    title,
    subtitle,
    navigationItems,
    recentProjects,
    actionButton,
    className,
    ...otherProps
  }: ProjectSidebarRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-full w-64 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border px-4 py-6 shadow-lg backdrop-blur-sm",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full flex-col items-start gap-2">
        {title ? (
          <span className="text-heading-2 font-heading-2 text-default-font">
            {title}
          </span>
        ) : null}
        {subtitle ? (
          <span className="text-caption font-caption text-subtext-color">
            {subtitle}
          </span>
        ) : null}
      </div>
      {navigationItems ? (
        <div className="flex w-full flex-col items-start gap-1">
          {navigationItems}
        </div>
      ) : null}
      <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
      <div className="flex w-full flex-col items-start gap-3">
        <span className="text-caption-bold font-caption-bold text-subtext-color">
          RECENT PROJECTS
        </span>
        {recentProjects ? (
          <div className="flex w-full flex-col items-start gap-3">
            {recentProjects}
          </div>
        ) : null}
      </div>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-end">
        {actionButton ? (
          <div className="flex w-full flex-col items-start justify-end">
            {actionButton}
          </div>
        ) : null}
      </div>
    </div>
  );
});

export const ProjectSidebar = ProjectSidebarRoot;
