

//interface => object shapes you expect to extend
// interfaces supports declaration merging

//types=> more general: objects,unions,intersections,functions
// can not be reopened -> no merging

interface Box1{
  width: number
}

interface Box1{
  height: number
}

const boxDemo : Box1 = {width: 10, height: 20}

// type Bag = {size: number}
// type Bag = {color: string}
// cant redeclare type alais name