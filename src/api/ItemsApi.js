const ITEMS_API = "https://64caa1a2700d50e3c705235a.mockapi.io/items";

class ItemsApi {
  // Api call to get all items
  get = async () => {
    try {
      const resp = await fetch(ITEMS_API);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Oh no! Something went wrong in fetchItems.", e);
    }
  };
  // Api call to update an item
  put = async (item) => {
    console.log(item);
    try {
      const resp = await fetch(`${ITEMS_API}/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      return await resp.json();
    } catch (e) {
      console.log("Oh no! Looks like the item couldnt be updated.", e);
    }
  };
  // Api call to create a new item
  post = async (item) => {
    try {
      const resp = await fetch(`${ITEMS_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: item.name,
          brand: item.brand,
          price: item.price,
          reviews: item.reviews,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log("Oh no! Item counldnt be created.");
    }
  };
  // Api call to delete an item
  delete = async (itemId) => {
    try {
      const resp = await fetch(`${ITEMS_API}/${itemId}`, {
        method: "DELETE",
      });
      const data = await response.json();
    } catch (e) {
      console.log("Oh no! Item was not deleteed.");
    }
  };
}

export const itemsApi = new ItemsApi();
