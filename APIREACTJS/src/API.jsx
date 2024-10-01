export const API = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
  });

  return await result.json();
};

export const UserAPI = async () => {
  const result = await fetch("https://randomuser.me/api/", {
    method: "GET"
  });

  return await result.json();
};
