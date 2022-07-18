import instance from "./instance";


// export const getListProduct =  (url: string) => {
//     // const url = "/products"
//     return instance.get(url)
// }

export const addProduct =  ( product: any) => {
    // const url = "/products"
    return instance.post("/products",product)
}

export const editProduct =  ( product: any) => {
    // const url = "/products"
    return instance.put(`/products/${product.id}`,product)
}

export const removeProduct =  ( id: any) => {
    // const url = "/products"
    return instance.delete(`/products/${id}`)
}