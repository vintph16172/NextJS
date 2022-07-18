import { addProduct, editProduct, removeProduct } from "@/api/product"
import useSWR from "swr"


const useProduct = () => {
    // const { mutate } = useSWRConfig()

    // const fetcher = async (url: string) => {
    //     const { data } = await getListProduct(url)
    //     return data
    // }


    let { data, error, mutate } = useSWR("/products",  { dedupingInterval: 5000 })

    const add = async (item: any )=>{
        const {data: product} = await addProduct(item)
        return [...data,product]
    }

    const edit = async (item: any )=>{
        const {data: product} = await editProduct(item)
        return data = data.map((item2: any)=> item2.id === product.id ? product : item2 )
    }

    const remove = async (item: any )=>{
        const {data: product} = await removeProduct(item)
        return data = data.filter((item2: any)=> item2.id !== product.id  )
    }

    return{
        data,
        error,
        mutate,
        add,
        edit,
        remove
    }

}
export default useProduct


