import axios from 'axios';


axios.defaults.baseURL = 'https://652abc844791d884f1fd4e18.mockapi.io';

export async function fetchUsersCards(page) {
  const { data } = await axios.get(`/users?limit=3&page=${page}`);
  return data;
}


export async function addToFollow(id, follow, addFollower) {
  console.log('isFollow', follow);

  const { data } = await axios.put(`/users/${id}`, {
    isFollow: follow,
    followers: addFollower,
  });
  console.log('data', data.isFollow);
  return data;
}

