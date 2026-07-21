type User = {
  id: string; //required
  name: string;
  email?: string; //optional (could be absent)
  readonly createdAt: Date; //can not be reassigned
};

const user1: User = {
  id: "u1",
  name: "Sangam",
  createdAt: new Date(),
};
const user2: User = {
  id: "u2",
  name: "Stanley",
  email: "sblk",
  createdAt: new Date(),
};

type User2 = { email?: string };
type User3 = { email: string | undefined };

type Count = { [k: string]: number };
type Count1 = Record<"likes" | "views" | "shares", number>;

const c1: Count = { whatever: 1 };
const c2: Count1 = { likes: 1, views: 4, shares: 3 };
