type WithId<T = {}> = T & { _id: string };

type Distinct<T> = WithId<T> & { createdAt: Date; updatedAt: Date };
