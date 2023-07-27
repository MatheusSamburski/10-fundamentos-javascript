async function getProducts (url) {
  const response = await fetch(url)
  const json = await response.json();
  return json
}

getProducts("https://api.fake.com/products");