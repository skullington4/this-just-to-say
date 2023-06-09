import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export function createFriendRequest(friendData) {
    const newFriend = {text: friendData}
    return sendRequest(BASE_URL, 'POST', newFriend);
}

// export function getFriendsRequest() {
//   return sendRequest(BASE_URL, 'GET');
// }

export function getAllUsers() {

  return sendRequest(BASE_URL);
}

export function getUser(id) {
  return sendRequest(BASE_URL + `/${id}`);
}