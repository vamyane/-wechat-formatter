/**
 * ═══════════════════════════════════════
 * 公众号排版器 Pro - 模板引擎 v2
 * ═══════════════════════════════════════
 */

// 全局模板注册表
window.TPL_REGISTRY = {};

// 分类定义
window.TPL_CATEGORIES = {
  light: {
    name: '浅色系',
    icon: '☀️',
    desc: '白色/浅色背景，清爽干净',
    contentTip: '通用型，适合表格、图文、数据、正式文档等各类内容',
  },
  dark: {
    name: '深色系',
    icon: '🌙',
    desc: '黑色/深色背景，酷炫高级',
    contentTip: '适合科技、潮流、影视评论、品牌展示类内容',
  },
  gradient: {
    name: '渐变风',
    icon: '🌈',
    desc: '渐变色彩效果，活力动感',
    contentTip: '适合创意、营销、情感、旅行类内容',
  },
  border: {
    name: '边框装饰',
    icon: '🖼️',
    desc: '边框/阴影装饰，层次分明',
    contentTip: '适合正式公告、文艺创作、产品介绍类内容',
  },
  block: {
    name: '色块强调',
    icon: '🎨',
    desc: '色块背景标题，视觉冲击',
    contentTip: '适合新闻、观点、活动推广、热点资讯类内容',
  },
  special: {
    name: '特殊风格',
    icon: '✨',
    desc: '独特主题风格，个性鲜明',
    contentTip: '适合特定主题：复古、禅意、科幻、艺术等',
  },
};

// 旧模板的分类映射（兼容未设置 category 的模板）
const LEGACY_CATEGORY_MAP = {
  'minimal': { category: 'light', contentTip: '通用型，适合大多数文章' },
  'stripe': { category: 'block', contentTip: '适合新闻、观点、活动推广类内容' },
  'magazine': { category: 'light', contentTip: '适合深度长文、专栏、评论类内容' },
  'card': { category: 'border', contentTip: '适合产品介绍、功能说明、列表展示' },
  'neon': { category: 'dark', contentTip: '适合科技、潮流、夜生活类内容' },
  'vintage': { category: 'border', contentTip: '适合散文、随笔、文学创作类内容' },
  'modern': { category: 'gradient', contentTip: '适合商业、品牌、产品发布类内容' },
  'nature': { category: 'light', contentTip: '适合生活方式、自然、健康类内容' },
  'wireframe': { category: 'light', contentTip: '适合正式文档、极简风格内容' },
  'academic': { category: 'light', contentTip: '适合研究、分析、学术类内容' },
  'gold': { category: 'dark', contentTip: '适合高端品牌、奢侈品、奢华内容' },
  'pink': { category: 'light', contentTip: '适合情感、生活、女性向内容' },
  'cyber': { category: 'dark', contentTip: '适合科幻、科技、游戏类内容' },
  'chinese': { category: 'border', contentTip: '适合文化、历史、传统类内容' },
  'handwrite': { category: 'border', contentTip: '适合个人随笔、手绘风内容' },
  'newspaper': { category: 'block', contentTip: '适合新闻、时事评论、深度报道' },
  'mint': { category: 'light', contentTip: '适合清新、夏日、健康类内容' },
  'muji': { category: 'light', contentTip: '适合极简生活、设计美学类内容' },
  'redblack': { category: 'block', contentTip: '适合观点、评论、头条类内容' },
  'aurora': { category: 'gradient', contentTip: '适合创意、梦幻、艺术类内容' },
  'typewriter': { category: 'special', contentTip: '适合文学、怀旧、打字机风格内容' },
  'metal': { category: 'dark', contentTip: '适合硬核科技、工业、机械类内容' },
  'ink': { category: 'border', contentTip: '适合古典文学、水墨艺术类内容' },
  'candy': { category: 'gradient', contentTip: '适合年轻、娱乐、活泼类内容' },
  'gothic': { category: 'dark', contentTip: '适合暗黑、神秘、哥特文化类内容' },
  'illustration': { category: 'gradient', contentTip: '适合科普、教育、知识分享类内容' },
  'bizblue': { category: 'block', contentTip: '适合商务、金融、正式报告类内容' },
  'pixel': { category: 'dark', contentTip: '适合游戏、怀旧、像素艺术类内容' },
};

/**
 * 获取模板的图片样式变体
 * 如果模板没有定义变体，从base img样式自动生成
 */
function getImgVariants(tplStyle) {
  // 所有图片样式都强制居中：margin auto + text-align center
  const base = tplStyle.img || 'max-width:100%;border-radius:6px;display:block;margin:14px auto;';

  return {
    img: base,
    img_border: 'max-width:100%;display:block;margin:14px auto;border:4px solid #d1d5db;border-radius:8px;padding:0;',
    img_shadow: 'max-width:100%;display:block;margin:14px auto;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.25);border:none;',
    img_card: 'max-width:100%;display:block;margin:14px auto;padding:12px;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 4px 16px rgba(0,0,0,.1);',
    img_polaroid: 'max-width:100%;display:block;margin:14px auto;padding:12px 12px 40px;background:#ffffff;border:1px solid #e5e7eb;border-radius:4px;box-shadow:0 6px 20px rgba(0,0,0,.15);',
  };
}

/**
 * 生成模板的真实预览demo
 */
function generateTplDemo(tplId) {
  const tpl = getTemplate(tplId);
  if (!tpl) return '';

  const colors = { primary: tpl.primary, bg: tpl.bg, text: '' };
  const s = tpl.render(colors);
  const p = tpl.primary;

  const thStyle = s.table_th || `background:${p};color:#fff;padding:3px 6px;`;
  const tdStyle = s.table_td || `padding:3px 6px;border-bottom:1px solid #eee;font-size:10px;`;
  const altStyle = s.table_alt || `background:#f9f9f9;`;
  const cardStyle = s.card || `background:${p}10;padding:8px;border-radius:6px;`;
  const imgs = getImgVariants(s);
  // 预览中用img_shadow样式展示图片
  const imgStyle = imgs.img_shadow;

  return `
    <div style="${s.h2}">章节标题</div>
    <div style="${s.h3 || ''}">小标题</div>
    <div style="${s.p}">正文段落预览</div>
    <div style="text-align:center;margin:6px 0"><img src="img/preview.jpg" style="${imgStyle}" alt="图片预览"></div>
    <div style="${s.quote || ''}">引用块</div>
    <table style="width:100%;border-collapse:collapse;font-size:10px;margin:6px 0">
      <tr><th style="${thStyle}">项目</th><th style="${thStyle}">数据</th></tr>
      <tr><td style="${tdStyle}">示例</td><td style="${tdStyle}">128</td></tr>
      <tr style="${altStyle}"><td style="${tdStyle}${altStyle}">示例</td><td style="${tdStyle}${altStyle}">256</td></tr>
    </table>
    <div style="${cardStyle}">卡片样式</div>
  `;
}

/**
 * 注册一个模板
 */
function registerTemplate(id, config) {
  if (!id || !config || !config.render) {
    console.warn(`[模板引擎] 模板 "${id}" 配置不完整，已跳过`);
    return;
  }
  const legacy = LEGACY_CATEGORY_MAP[id] || {};
  window.TPL_REGISTRY[id] = {
    id,
    name: config.name || id,
    desc: config.desc || '',
    primary: config.primary || '#2b5da6',
    bg: config.bg || '#ffffff',
    demo: config.demo || '',
    category: config.category || legacy.category || 'light',
    contentTip: config.contentTip || legacy.contentTip || '',
    render: config.render,
  };
}

/**
 * 获取所有已注册模板
 */
function getAllTemplates() {
  return window.TPL_REGISTRY;
}

/**
 * 获取模板数量
 */
function getTemplateCount() {
  return Object.keys(window.TPL_REGISTRY).length;
}

/**
 * 获取指定模板
 */
function getTemplate(id) {
  return window.TPL_REGISTRY[id] || null;
}

/**
 * 获取第一个模板 ID
 */
function getFirstTemplateId() {
  const keys = Object.keys(window.TPL_REGISTRY);
  return keys.length > 0 ? keys[0] : null;
}

/**
 * 按分类获取模板
 */
function getTemplatesByCategory(category) {
  return Object.entries(window.TPL_REGISTRY)
    .filter(([, v]) => v.category === category)
    .reduce((acc, [k, v]) => { acc[k] = v; return acc; }, {});
}

/**
 * 获取所有分类信息
 */
function getCategories() {
  return window.TPL_CATEGORIES;
}

/**
 * 应用模板样式到 HTML 内容
 */
function applyTemplateStyles(html, tplId, colors) {
  const tpl = getTemplate(tplId);
  if (!tpl) return html;

  const s = tpl.render(colors);
  const tmp = document.createElement('div');
  tmp.innerHTML = html;

  const textColor = colors.text || '';

  tmp.querySelectorAll('h1').forEach(e => {
    e.setAttribute('style', s.h1);
    if (textColor) e.style.color = textColor;
  });
  tmp.querySelectorAll('h2').forEach(e => {
    e.setAttribute('style', s.h2);
  });
  tmp.querySelectorAll('h3').forEach(e => {
    e.setAttribute('style', s.h3);
    if (textColor) e.style.color = textColor;
  });

  tmp.querySelectorAll('p').forEach(e => {
    const st = e.getAttribute('style') || '';
    if (!st.includes('text-align') && !st.includes('font-size: 14px') && !st.includes('margin: 0')) {
      e.setAttribute('style', s.p);
      if (textColor) e.style.color = textColor;
    }
  });

  tmp.querySelectorAll('blockquote').forEach(e => {
    e.setAttribute('style', s.quote);
    if (textColor) e.style.color = textColor;
  });
  tmp.querySelectorAll('strong').forEach(e => e.setAttribute('style', s.strong));
  tmp.querySelectorAll('img').forEach(e => {
    const imgs = getImgVariants(s);
    e.setAttribute('style', imgs[window.curImgStyle] || imgs.img);
    // 确保图片在列表等缩进容器中也能居中
    const parent = e.parentElement;
    if (parent && parent.tagName !== 'BODY') {
      parent.style.textAlign = 'center';
    }
  });
  tmp.querySelectorAll('.hl').forEach(e => e.setAttribute('style', s.highlight));
  tmp.querySelectorAll('.dv').forEach(e => e.setAttribute('style', s.divider));
  tmp.querySelectorAll('.nm').forEach(e => e.setAttribute('style', s.num));
  tmp.querySelectorAll('.card').forEach(e => {
    e.setAttribute('style', s.card);
    if (textColor) e.style.color = textColor;
  });

  // 列表样式
  if (s.ul) tmp.querySelectorAll('ul').forEach(e => e.setAttribute('style', s.ul));
  if (s.ol) tmp.querySelectorAll('ol').forEach(e => e.setAttribute('style', s.ol));
  if (s.li) tmp.querySelectorAll('li').forEach(e => {
    e.setAttribute('style', s.li);
    if (textColor) e.style.color = textColor;
  });

  // 应用表格样式（使用表格样式系统）
  const tableTplId = window.curTableTpl || 'tbl-clean';
  const tableTpl = window.TABLE_TEMPLATES ? window.TABLE_TEMPLATES[tableTplId] : null;
  if (tableTpl) {
    const hasHeader = window.curTableHasHeader !== false;
    const ts = tableTpl.render(colors, hasHeader);

    tmp.querySelectorAll('table').forEach(table => {
      table.setAttribute('style', ts.table);

      const rows = table.querySelectorAll('tr');
      rows.forEach((row, idx) => {
        const isFirstRow = idx === 0;
        const isHeaderRow = hasHeader && isFirstRow;
        const isAlt = !isHeaderRow && idx % 2 === 1;

        // 行背景色
        if (isAlt && ts.trAlt) {
          row.setAttribute('style', `background:${ts.trAlt};`);
        }

        // th样式
        row.querySelectorAll('th').forEach(th => {
          if (isHeaderRow && ts.th) {
            th.setAttribute('style', ts.th);
          } else {
            th.setAttribute('style', ts.td);
          }
        });

        // td样式
        row.querySelectorAll('td').forEach(td => {
          let tdStyle = ts.td || '';
          if (isAlt && ts.trAlt) {
            tdStyle += `background:${ts.trAlt};`;
          }
          td.setAttribute('style', tdStyle);
        });
      });
    });
  }

  return tmp.innerHTML;
}

/**
 * 清理粘贴的 HTML
 */
function cleanPastedHTML(html) {
  const t = document.createElement('div');
  t.innerHTML = html;
  t.querySelectorAll('script,style,link,meta,head,title').forEach(e => e.remove());

  t.querySelectorAll('img').forEach(img => {
    const src = img.src || img.getAttribute('data-src') || '';
    if (!src) { img.remove(); return; }
    img.setAttribute('src', src);
    img.removeAttribute('class');
  });

  const allowed = ['p','h1','h2','h3','blockquote','strong','b','em','i','br','img','table','tr','td','th','ul','ol','li','a','span','div'];
  t.querySelectorAll('*').forEach(el => {
    const tag = el.tagName.toLowerCase();
    if (!allowed.includes(tag)) {
      if (el.children.length === 0) {
        el.replaceWith(document.createTextNode(el.textContent));
        return;
      }
    }
    el.removeAttribute('class');
    el.removeAttribute('id');
    const st = el.getAttribute('style') || '';
    const ta = st.match(/text-align\s*:\s*[^;]+/);
    el.setAttribute('style', ta ? ta[0] : '');
  });

  const body = t.querySelector('body');
  return body ? body.innerHTML : t.innerHTML;
}

/**
 * 获取颜色亮度 (0-255)
 */
function getColorBrightness(hex) {
  if (!hex || hex.length < 7) return 128;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return r * 0.299 + g * 0.587 + b * 0.114;
}

console.log('[模板引擎 v2] 已加载，分类系统就绪');
