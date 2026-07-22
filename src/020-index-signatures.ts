//strings to be used as keys and the  keys has to be mapped to number-value


type NumberDict = {[k:string]: number}

const counters : NumberDict = {}

counters['Likes'] = 1
counters['Comment'] = 2
counters['Shares'] = 100

//if you have a finite no of keys
type Metrices = Record<'likes' | 'views' | 'shares', number> //more tight and safer
const mm: Metrices = {likes: 1, views: 100, shares: 23}

//dynamic  keys at run time
const priceMap= new Map<string,number>()
priceMap.set('likes', 1)

type LooseMap = Record<string, number | undefined>
const lm: LooseMap = {}
lm['x']= undefined
lm['y']= 100