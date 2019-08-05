export const isFollowing = (following, name) => {
  let usernames = [];
  let follow;
  if (following.length > 0) {
    following.map(Following => usernames.push(Following.username));
  }
  follow = usernames.includes(name) ? true : false;
  return follow;
};
