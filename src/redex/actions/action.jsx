export const Add = (item)=>{
    return{
        type:"ADD_DATA",
        payload: item
    }
}
export const Remove = (id)=>{
    return{
        type:"RMV_DATA",
        payload: id
    }
}
export const Update_data= (item,id)=>{
    return{
        type:"UPDATE_DATA",
        payload: item,
        de:id
    }
}