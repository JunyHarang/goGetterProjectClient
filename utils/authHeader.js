export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const header = {
    headers: {
      Authorization: 'Bearer ' + user.access_token,
    },
  };

  return header;
};
