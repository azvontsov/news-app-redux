export const getLatestNews = async (searchQuery) => {
  const request = await fetch(
    `http://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`
  );
  return await request.json();
};

export const getPopularNews = async () => {
  const request = await fetch(
    `http://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`
  );
  return await request.json();
};
