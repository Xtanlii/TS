//interface => named shape for objects

interface User123 {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const user123: User123 = {
  id: '1',
  name: "Stanley",
  createdAt: new Date()
};

interface Admin123 extends User123 {
  permissions: string[]
}

const admin333 : Admin123 = {
  id: '1',
  name: "Stanley",
  createdAt: new Date(),
  permissions: ["admin"]
}

interface WithMeta1{
  meta: {
    active: boolean
  }
}
interface AdminWithMeta extends Admin123,WithMeta1 {}

const adminWithMeta333 : AdminWithMeta = {
  id: '1',
  name: "Stanley",
  createdAt: new Date(),
  permissions: ["admin"],
  meta: {
    active: true
  }
}