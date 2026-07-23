

type User7 = {
  id: string;
  name: string;
  email?: string;
};

function getUserA7<T, K extends keyof T>(objA7: T, keyA7 : K): T[K]{
  return objA7[keyA7]
}

const userA7 : User7 = {
  id: 'u1', name: "Stanley"
}

const idValA7 = getUserA7(userA7, 'id');

function setUserA7<T, K extends keyof T>(objA7: T, keyA7 : K,newVal: T[K]): void{
  objA7[keyA7]= newVal
}

setUserA7(userA7,"email", ".com")
setUserA7(userA7,"name", "James")