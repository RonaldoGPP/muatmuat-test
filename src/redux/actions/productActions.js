export const addProducts = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export const editProducts = (product) => {
    return {
        type: 'EDIT_PRODUCT',
        payload: product
    }
}

export const deleteProducts = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
}