export async function fetchExampleData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  if (!response.ok) {
    throw new Error('Unable to fetch example data');
  }

  return response.json();
}
