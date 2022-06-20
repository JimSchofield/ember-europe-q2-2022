export default async function () {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  const data = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      accept: 'application/json',
      'User-Agent': 'ember-demonstration',
    },
  });

  return data;
}
