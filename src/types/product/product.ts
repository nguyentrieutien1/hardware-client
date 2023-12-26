import { IImage } from ".."
export type IProduct =  {
    id: number
    name: string
    price: number
    description: string
    images: IImage[]
}