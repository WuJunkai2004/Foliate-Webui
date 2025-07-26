// 获取主容器和页面元素
const mainStack = document.getElementById('template');
const pages = {
  main: document.getElementById('main'),
  empty: document.getElementById('empty'),
  noresults: document.getElementById('no-results'),
};

/**
 * 切换到指定页面
 * @param {string} pageId - 页面ID ('main', 'empty', 'no-results')
 */
function switchToPage(pageId) {
  if (pages[pageId]) {
    // 隐藏所有页面
    Object.values(pages).forEach(page => {
      page.style.display = 'none';
    });

    // 显示指定页面
    pages[pageId].style.display = 'block';
  } else {
    console.error(`页面ID "${pageId}" 不存在`);
  }
}

// 默认显示主页面
switchToPage('empty');
