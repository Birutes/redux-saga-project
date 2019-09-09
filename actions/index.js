export const GET_ITEMS = "GET_ITEMS";
export const ITEMS_RECEIVED = "ITEMS_RECEIVED";
export const POST_ITEMS = "POST_ITEMS";
export const POST_RECEIVED = "POST_RECEIVED";



export const getItems = () => ({
    type: GET_ITEMS
});

export const itemsReceived = data => ({
    type: ITEMS_RECEIVED,
    payload: data
});

export const postItems = data => ({
    type: POST_ITEMS,
    payload: data
});

export const postReceived = data => ({
    type: POST_RECEIVED,
    payload: data
});