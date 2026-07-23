// partial<T> -> make all the top level fields optional

type AddressA2 = {
  line1: string;
  city: string;
};

type User22 = {
  id: string;
  name: string;
  email?: string;
  address: Partial<AddressA2>;
};

type UserPatch10 = Partial<User22>;

const patch10: UserPatch10 = { name: "Jossie" };
const patch11: UserPatch10 = { address: { city: "Jakarta" } };

//required<T>

type UserAllRequiredA10 = Required<User22>;
const userAllPatch11: UserAllRequiredA10 = {
  id: "011",
  name: "Lily",
  address: { line1: "Jodd", city: "Austin" },
  email: "samsom.com",
};

//readonly

type ReadonlyUserA10 = Readonly<User22>;
const readonlyUser: ReadonlyUserA10 = {
  id: "u3",
  name: "Simon",
  address: { line1: "Mell", city: "Cali" },
};

// readonlyUser.name = "dhd"

//Pick<T,K>keep only some keys

type PublicUserA10 = Pick<User22, "id" | "name">;
const publicUser: PublicUserA10 = { id: "p2", name: "Jackson" };

// Omit<T,k> remove some keys
type UserWithoutEmailA10 = Omit<User22, "address">;
const omitUserA10: UserWithoutEmailA10 = { 
  id: "u3",
  name: "Simon",
};

//Record<K,V>
type RoleK = "admin" | "user" | "editor";
type RoleCheck = Record<RoleK, User22>;

const dirA10: RoleCheck = {
  admin: { id: "u10", name: "admin", address: { line1: "oi", city: "subj" } },
  user: { id: "u11", name: "user", address: { line1: "oi", city: "subj" } },
  editor: { id: "u12", name: "editor", address: { line1: "oi", city: "subj" } },
};
