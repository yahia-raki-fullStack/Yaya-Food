export default async function apiCall(quary) {
  try {
    const req = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${quary}&app_id=20ba0030&app_key=%20c1117608d482b49c0b2f55758fadcc2d`
    );
    if (!req.ok) throw Error(`faild to get the data`);
    const data = await req.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be caught elsewhere if needed
  }
}
