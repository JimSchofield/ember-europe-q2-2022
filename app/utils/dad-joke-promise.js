export default function (initialSearchTerm) {
  return async (signal, searchTerm = initialSearchTerm) => {
    if (searchTerm === '') {
      throw new Error('Please enter a search term');
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
  };
}
