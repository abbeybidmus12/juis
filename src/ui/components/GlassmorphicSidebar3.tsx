"use client";
/*
 * Documentation:
 * GlassmorphicSidebar3 — https://app.subframe.com/library?component=GlassmorphicSidebar3_2ecd9c81-ac89-4a48-958d-5e02b6b60fa5
 * Tooltip — https://app.subframe.com/library?component=Tooltip_ccebd1e9-f6ac-4737-8376-0dfacd90c9f3
 */

import React, { useState } from "react";
import { FeatherBarChart3 } from "@subframe/core";
import { FeatherFolderKanban } from "@subframe/core";
import { FeatherHelpCircle } from "@subframe/core";
import { FeatherLayoutDashboard } from "@subframe/core";
import { FeatherMenu } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherUsers } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";
import { Tooltip } from "./Tooltip";

interface NavigationSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  menuItems?: React.ReactNode;
  className?: string;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const NavigationSidebar = React.forwardRef<
  HTMLDivElement,
  NavigationSidebarProps
>(function NavigationSidebar(
  { menuItems, className, isCollapsed = false, onToggle, ...otherProps }: NavigationSidebarProps,
  ref
) {
  if (isCollapsed) {
    return (
      <SubframeCore.Tooltip.Provider>
        <SubframeCore.Tooltip.Root>
          <SubframeCore.Tooltip.Trigger asChild={true}>
            <div
              className={SubframeUtils.twClassNames(
                "flex h-screen w-16 flex-none flex-col items-start gap-2 rounded-lg bg-[#1c1c1fd9] px-3 py-4 shadow-lg border border-[rgba(255,255,255,0.08)] backdrop-blur-[16px]",
                className
              )}
              ref={ref}
              {...otherProps}
            >
              <div className="flex h-11 w-full flex-none items-center justify-center py-2">
                <FeatherMenu 
                  className="text-heading-2 font-heading-2 text-white cursor-pointer" 
                  onClick={onToggle}
                />
              </div>
              <div className="flex w-full flex-col items-start gap-1 pt-2">
                <div className="flex h-11 w-full flex-none items-center justify-center rounded-lg bg-[#2563eb26] py-2 border-l-[3px] border-brand-primary">
                  <FeatherLayoutDashboard className="text-heading-2 font-heading-2 text-brand-primary" />
                </div>
                <div className="flex h-11 w-full flex-none items-center justify-center rounded-lg py-2">
                  <FeatherFolderKanban className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
                </div>
                <div className="flex h-11 w-full flex-none items-center justify-center rounded-lg py-2">
                  <FeatherBarChart3 className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
                </div>
                <div className="flex h-11 w-full flex-none items-center justify-center rounded-lg py-2">
                  <FeatherUsers className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
                </div>
                <div className="flex h-11 w-full flex-none items-center justify-center rounded-lg py-2">
                  <FeatherSettings className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
                </div>
                <div className="flex h-11 w-full flex-none items-center justify-center rounded-lg py-2">
                  <FeatherHelpCircle className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
                </div>
              </div>
            </div>
          </SubframeCore.Tooltip.Trigger>
          <SubframeCore.Tooltip.Portal>
            <SubframeCore.Tooltip.Content
              side="right"
              align="center"
              sideOffset={4}
              asChild={true}
            >
              <Tooltip>Collapsed sidebar view</Tooltip>
            </SubframeCore.Tooltip.Content>
          </SubframeCore.Tooltip.Portal>
        </SubframeCore.Tooltip.Root>
      </SubframeCore.Tooltip.Provider>
    );
  }

  return (
    <SubframeCore.Tooltip.Provider>
      <SubframeCore.Tooltip.Root>
        <SubframeCore.Tooltip.Trigger asChild={true}>
          <div
            className={SubframeUtils.twClassNames(
              "flex h-screen w-64 flex-col items-start gap-4 rounded-lg bg-[#1c1c1fd9] px-4 py-4 shadow-lg border border-[rgba(255,255,255,0.08)] backdrop-blur-[16px]",
              className
            )}
            ref={ref}
            {...otherProps}
          >
            <div className="flex h-11 w-full flex-none items-center gap-3 py-2">
              <FeatherMenu 
                className="text-heading-2 font-heading-2 text-white cursor-pointer" 
                onClick={onToggle}
              />
              <span className="text-body-bold font-body-bold text-white">
                Dashboard
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-1 pt-2">
              {menuItems ? (
                <div className="flex w-full flex-col items-start gap-1">
                  {menuItems}
                </div>
              ) : null}
            </div>
          </div>
        </SubframeCore.Tooltip.Trigger>
        <SubframeCore.Tooltip.Portal>
          <SubframeCore.Tooltip.Content
            side="top"
            align="center"
            sideOffset={4}
            asChild={true}
          >
            <Tooltip>Expanded sidebar view</Tooltip>
          </SubframeCore.Tooltip.Content>
        </SubframeCore.Tooltip.Portal>
      </SubframeCore.Tooltip.Root>
    </SubframeCore.Tooltip.Provider>
  );
});

interface GlassmorphicSidebar3RootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  menuIcon?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

const GlassmorphicSidebar3Root = React.forwardRef<
  HTMLDivElement,
  GlassmorphicSidebar3RootProps
>(function GlassmorphicSidebar3Root(
  {
    menuIcon = <FeatherMenu />,
    title,
    className,
    ...otherProps
  }: GlassmorphicSidebar3RootProps,
  ref
) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex cursor-pointer flex-col items-start gap-4",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <NavigationSidebar
        isCollapsed={isCollapsed}
        onToggle={toggleSidebar}
        menuItems={
          <>
            <div className="flex h-11 w-full flex-none items-center gap-3 rounded-lg bg-[#2563eb26] px-3 py-2 border-l-[3px] border-brand-primary">
              <FeatherLayoutDashboard className="text-heading-2 font-heading-2 text-brand-primary" />
              <span className="text-body-bold font-body-bold text-brand-primary">
                Overview
              </span>
            </div>
            <div className="flex h-11 w-full flex-none items-center gap-3 rounded-lg bg-[#ffffff0d] px-3 py-2">
              <FeatherFolderKanban className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
              <span className="text-body font-body text-[#b4b4b8ff]">
                Projects
              </span>
            </div>
            <div className="flex h-11 w-full flex-none items-center gap-3 rounded-lg bg-[#ffffff0d] px-3 py-2">
              <FeatherBarChart3 className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
              <span className="text-body font-body text-[#b4b4b8ff]">
                Analytics
              </span>
            </div>
            <div className="flex h-11 w-full flex-none items-center gap-3 rounded-lg bg-[#ffffff0d] px-3 py-2">
              <FeatherUsers className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
              <span className="text-body font-body text-[#b4b4b8ff]">
                Team
              </span>
            </div>
            <div className="flex h-11 w-full flex-none items-center gap-3 rounded-lg bg-[#ffffff0d] px-3 py-2">
              <FeatherSettings className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
              <span className="text-body font-body text-[#b4b4b8ff]">
                Settings
              </span>
            </div>
            <div className="flex h-11 w-full flex-none items-center gap-3 rounded-lg bg-[#ffffff0d] px-3 py-2">
              <FeatherHelpCircle className="text-heading-2 font-heading-2 text-[#b4b4b8ff]" />
              <span className="text-body font-body text-[#b4b4b8ff]">
                Help
              </span>
            </div>
          </>
        }
      />
    </div>
  );
});

export const GlassmorphicSidebar3 = Object.assign(GlassmorphicSidebar3Root, {
  NavigationSidebar,
});
