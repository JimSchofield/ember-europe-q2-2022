export default async function (signal, searchTerm) {
  if (searchTerm === '') {
    return Promise.resolve({
      results: ['Please enter a search term'],
    });
  }

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  const url = `https://icanhazdadjoke.com/search?term=${searchTerm}`;

  const data = await fetch(url, {
    headers: {
      accept: 'application/json',
      'User-Agent': 'ember-demonstration',
    },
    signal,
  });

  return data;
}
