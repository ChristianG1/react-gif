export const getGifs = async ( category ) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=j77SeAmubshMaEDYGWa4viNT7e4NK4F2&q=${encodeURI(category)}y&limit=10`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	})

	return gifs;
}
