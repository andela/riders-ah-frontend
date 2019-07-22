const comment = (typecomment, writecomment) => {
  let typeComment = document.getElementById(`${typecomment}`);
  let writeComment = document.getElementById(`${writecomment}`);
  if (writeComment.style.display !== 'none') {
    writeComment.style.display = 'none';
    typeComment.style.display = 'block';
  } else {
    typeComment.style.display = 'none';
    writeComment.style.display = 'block';
    document.getElementById('text').focus();
  }
};

export default comment;
