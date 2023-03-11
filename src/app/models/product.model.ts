export interface Category {
  id: number,
  name: string,
  typeImg: string
}

export interface Product {
  id: string,
  title: string,
  price: number,
  images: string[],
  description: string,
  category: Category,
  tax?: number,
}

export interface createProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number
}

export type updateProductDTO = Partial<createProductDTO>
