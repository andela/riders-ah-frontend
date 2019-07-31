export const isBookmarking = (Bookmark, title) => {
  let titles = [];
  let isBookmark;
  if (Bookmark.isBookmarksFetched === 'done') {
    const { Bookmarks } = Bookmark;
    Bookmarks.map(bookmark => titles.push(bookmark.article.title));
  }
  isBookmark = titles.includes(title) ? true : false;
  return isBookmark;
};
