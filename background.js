const TOOLBAR_FOLDER_ID = 'toolbar_____';
const UNFILED_ID = 'unfiled_____';

browser.bookmarks.onCreated.addListener((id, bookmark) => {
    if (bookmark.parentId === UNFILED_ID) {
        browser.bookmarks.move(id, {
            parentId: TOOLBAR_FOLDER_ID
        });
    }
});
