export interface HeroData {
  title: string
  text: string
  cta: string
}

export interface ProductItem {
  title: string
  text: string
  image: string
}

export interface ProductsData {
  [key: string]: ProductItem
}
