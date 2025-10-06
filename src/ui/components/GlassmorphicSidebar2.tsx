"use client";
/*
 * Documentation:
 * GlassmorphicSidebar2 — https://app.subframe.com/library?component=GlassmorphicSidebar2_90ab2b3e-2589-48ea-949c-d993d9bf03b1
 */

import React from "react";
import { FeatherMenu } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface GlassmorphicSidebar2RootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  menuIcon?: React.ReactNode;
  className?: string;
}

const GlassmorphicSidebar2Root = React.forwardRef<
  HTMLDivElement,
  GlassmorphicSidebar2RootProps
>(function GlassmorphicSidebar2Root(
  {
    menuIcon = <FeatherMenu />,
    className,
    ...otherProps
  }: GlassmorphicSidebar2RootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex cursor-pointer flex-col items-start gap-4",
        className
      )}
      ref={ref}
      {...otherProps}
    />
  );
});

export const GlassmorphicSidebar2 = GlassmorphicSidebar2Root;
