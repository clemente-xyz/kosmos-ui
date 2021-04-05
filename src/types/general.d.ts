type WithId<T = {}> = T & { _id: string };

type Distinct<T> = WithId<T> & { createdAt: Date; updatedAt: Date };

type TDirection = "up" | "down" | "left" | "right";

type TPosition = "top" | "bottom" | "center";
