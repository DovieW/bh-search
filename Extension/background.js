chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create({
      id: 'B&H Search',
      title: 'Search B&&H \' %s \'',
      type: 'normal',
      contexts: ['selection']
    });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  let url = createUrl(item.selectionText);
  chrome.tabs.create({ url: url.href, index: tab.index + 1 });
});

function createUrl(query) {
  return new URL(`https://www.bhphotovideo.com/c/search?Ntt=${query}`);
}