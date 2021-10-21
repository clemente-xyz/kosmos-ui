import React from "react";
import { CSSProperties } from "styled-components";

export type Distinct<T> = WithId<T> & { createdAt: Date; updatedAt: Date };

export type WithId<T = {}> = T & { _id: string };

export type WithChildren<T = {}> = T & { children: React.ReactNode };

export type WithStyle<T = {}> = T & {
  style?: CSSProperties;
  className?: string;
};

export type TDirection = "up" | "down" | "left" | "right";

export type TPosition = "top" | "bottom" | "center";
