const form = document.getElementById('bookmark-form');
const title = document.getElementById('bookmarkTitle');
const url = document.getElementById('bookmarkUrl');
const list = document.getElementById('bookmarksList');

const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

form.addEventListener('submit', onBookmarkAdd);

renderBookmarks();

function onBookmarkAdd(e) {
  e.preventDefault();

  if ((title.value = '')) {
    alert('Enter title for a bookmark!');
  } else {
    const titleValue = title.value;
    const urlValue = url.value;

    bookmarks.push({ title: titleValue, url: urlValue });
    saveBookmarks();
    renderBookmarks();
  }
}

function saveBookmarks() {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function renderBookmarks() {
  list.innerHTML = '';
  bookmarks.forEach((bookmark, index) => {
    list.insertAdjacentHTML(
      'beforeend',
      `<li><a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
        <button type="button" onclick="deleteBookmark(${index})">Delete</button></li>`
    );
  });
}

window.deleteBtn = index => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.splice(index, 1);
  saveBookmarks(bookmarks);
};
