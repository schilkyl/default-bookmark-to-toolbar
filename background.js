const TOOLBAR_FOLDER_ID = 'toolbar_____';

browser.bookmarks.onCreated.addListener((id) => {
    browser.bookmarks.move(id, {
        parentId: TOOLBAR_FOLDER_ID
    });
});
