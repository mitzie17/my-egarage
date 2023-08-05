const ITEMS_API = 'https://64caa1a2700d50e3c705235a.mockapi.io/items';

class ItemsApi {
    get = async () => {
        try {
            const resp = await fetch(ITEMS_API);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oh no! Something went wrong in fetchItems.', e);
        }
    }

    put = async (item) => {
        try {
            const resp = await fetch(`${ITEMS_API}/${item.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oh no! Looks like the item couldnt be updated.', e);
        }
    }

    post = async (item) => {
        try {
            const resp = await fetch(`${ITEMS_API}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': item.name,
                    'price': item.price,
                    'reviews': [...item.reviews, item.review]
                })
            });
            const data = await response.json();
            console.log(data)
        } catch(e) {
            console.log('Oh no! Item counldnt be created.')
        }
    }
    
}

export const itemsApi = new ItemsApi();

