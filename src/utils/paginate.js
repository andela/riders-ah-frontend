import  Pages from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return Pages(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
