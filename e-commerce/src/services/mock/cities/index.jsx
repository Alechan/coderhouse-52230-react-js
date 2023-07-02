const getCities = async () => {
    const response = await fetch('http://localhost:3001/cities');
    return await response.json();
}

const getCity = async (id) => {
    // TODO: instead of fetching all categories and then filtering in the client, fetch only the item with the given id
    const response = await getCities();
    return response.find(item => item.id === id);
}

export {getCities, getCity};
