/**
 * ═══════════════════════════════════════
 * 公众号排版器 Pro v2 - 主应用逻辑
 * ═══════════════════════════════════════
 */

// ── 状态 ──
let curTpl = 'minimal';
let customColors = {}; // { primary, gradEnd, bg, text, rainbow }
let curCategory = 'all';
let wxCompatMode = true;
let previewZoom = 100;
let tplPanelMode = 'inline';
let curImgStyle = 'img'; // 图片边框样式
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// ── 初始化 ──
document.addEventListener('DOMContentLoaded', () => {
  curTpl = getFirstTemplateId() || 'minimal';
  updateTplLabel();
  render();

  editor.addEventListener('input', render);
  editor.addEventListener('paste', handlePaste);

  // 初始化表格模板选择器
  initTableTplSelector();

  // 初始化预览缩放
  setZoom(previewZoom);

  // 初始化模板面板
  initTplPanel();

  // 初始化分隔条拖拽
  initResizers();

  // 初始化混搭模式
  initMixMode();

  // 初始化手机端
  initMobile();

  // 初始化界面缩放
  initUIScale();
});

// ── 获取当前配色 ──
function getColors() {
  const tpl = getTemplate(curTpl);
  const primary = customColors.primary || (tpl ? tpl.primary : '#2b5da6');
  return {
    primary: primary,
    gradEnd: customColors.gradEnd || '',
    bg: customColors.bg || (tpl ? tpl.bg : '#ffffff'),
    text: customColors.text || '',
    rainbow: customColors.rainbow || false,
  };
}

// ── 渲染预览 ──
function render() {
  const colors = getColors();
  const tpl = getTemplate(curTpl);
  if (!tpl) {
    preview.innerHTML = '<p style="color:#999;text-align:center;padding:40px">模板加载中...</p>';
    return;
  }

  // 更新手机屏幕背景
  const phoneScreen = document.getElementById('phoneScreen');
  if (phoneScreen) {
    phoneScreen.style.background = colors.bg;
    const brightness = getColorBrightness(colors.bg);
    phoneScreen.querySelectorAll('.phone-statusbar span').forEach(sp => {
      sp.style.color = brightness > 128 ? '#666' : '#888';
    });
  }

  // 应用模板样式到内容（支持混搭）
  let styled;
  if (mixMode && Object.keys(mixOverrides).length > 0) {
    styled = applyMixStyles(editor.innerHTML, curTpl, colors);
  } else {
    styled = applyTemplateStyles(editor.innerHTML, curTpl, colors);
  }

  // 渐变/彩虹模式后处理
  styled = applyColorEffects(styled, colors);

  // 微信兼容模式：过滤不支持的CSS
  if (wxCompatMode) {
    styled = applyWxCompatMode(styled);
  }

  preview.innerHTML = styled;

  // 渲染 LaTeX 数学公式
  renderMathInPreview();
}

function renderMathInPreview() {
  if (typeof renderMathInElement === 'undefined') return;
  try {
    renderMathInElement(preview, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false },
      ],
      throwOnError: false,
      trust: true,
    });
  } catch (e) {
    console.warn('[数学公式] 渲染失败:', e);
  }
}

// ── 工具栏功能 ──
function fmt(tag) {
  document.execCommand('formatBlock', false, tag);
  render();
}

function insertDivider() {
  const s = getTemplate(curTpl).render(getColors());
  document.execCommand('insertHTML', false,
    `<p class="dv" style="${s.divider}">· · · · ·</p><p><br></p>`);
  render();
}

function insertHighlight() {
  const sel = window.getSelection();
  const t = sel.toString();
  if (t) {
    const s = getTemplate(curTpl).render(getColors());
    document.execCommand('insertHTML', false,
      `<span class="hl" style="${s.highlight}">${t}</span>`);
  }
  render();
}

function addImgs(files) {
  for (let f of files) {
    const r = new FileReader();
    r.onload = e => {
      const tpl = getTemplate(curTpl);
      const imgStyle = tpl ? tpl.render(getColors()).img : 'max-width:100%;border-radius:8px;margin:14px auto;display:block;';
      document.execCommand('insertHTML', false,
        `<img src="${e.target.result}" style="${imgStyle}"><p><br></p>`);
      render();
    };
    r.readAsDataURL(f);
  }
}

function quickIns(v) {
  const colors = getColors();
  const tpl = getTemplate(curTpl);
  if (!tpl) return;
  const s = tpl.render(colors);
  let h = '';

  switch (v) {
    case 'ending':
      h = `<div class="card" style="${s.card}"><p style="margin:0 0 8px;font-size:16px;font-weight:700;color:${colors.primary}">觉得有用就点个「在看」吧 👇</p><p style="margin:0;font-size:14px;color:#888">你的支持是我最大的动力 ❤️</p></div><p><br></p>`;
      break;
    case 'author':
      h = `<p style="font-size:13px;color:#aaa;margin:20px 0 0;text-align:center;border-top:1px solid #eee;padding-top:12px">作者：___ ｜ 编辑：___ ｜ 转载请联系授权</p><p><br></p>`;
      break;
    case 'tips':
      h = `<blockquote style="${s.quote}">💡 <strong style="${s.strong}">小提示：</strong>在这里写提示内容</blockquote><p><br></p>`;
      break;
    case 'nums':
      h = `<p style="${s.p}"><span class="nm" style="${s.num}">1</span>第一点内容</p><p style="${s.p}"><span class="nm" style="${s.num}">2</span>第二点内容</p><p style="${s.p}"><span class="nm" style="${s.num}">3</span>第三点内容</p><p><br></p>`;
      break;
    case 'imgtext':
      h = `<table style="width:100%;margin:16px 0;border-collapse:collapse"><tr><td style="width:45%;vertical-align:top;padding-right:12px"><img src="https://placehold.co/300x200/e8e8e8/999?text=图片" style="${s.img}"></td><td style="vertical-align:top;font-size:15px;line-height:1.8;color:#555">在这里写图片说明文字</td></tr></table><p><br></p>`;
      break;
  }

  if (h) document.execCommand('insertHTML', false, h);
  render();
}

// ── 模板弹窗（已移除，保留pickTpl中的引用兼容） ──

function pickTpl(k) {
  curTpl = k;
  customColors = {};
  updateTplLabel();
  render();

  // 更新颜色面板
  const tpl = getTemplate(k);
  if (tpl) {
    const cp = document.getElementById('cPrimary');
    const cb = document.getElementById('cBg');
    if (cp) cp.value = tpl.primary;
    if (cb) cb.value = tpl.bg;
  }
  buildPresets();

  // 自动更新表格颜色（如果编辑器中有表格）
  if (editor.querySelector('table') && typeof forceApplyTableStyles === 'function') {
    setTimeout(() => forceApplyTableStyles(), 50);
  }

  // 更新左侧堆叠卡片选中状态
  const idx = stackTpls.findIndex(([k]) => k === curTpl);
  if (idx >= 0 && idx !== stackIndex) {
    stackIndex = idx;
    renderTplStack();
  }
}

function updateTplLabel() {
  const tpl = getTemplate(curTpl);
  const label = document.getElementById('tplLabel');
  if (label && tpl) label.textContent = tpl.name;

  const tip = document.getElementById('contentTip');
  if (tip && tpl) tip.textContent = tpl.contentTip || '';
}

// ── 复制到公众号 ──
function copyToClipboard() {
  const tpl = getTemplate(curTpl);
  if (!tpl) { toast('❌ 模板未加载'); return; }
  if (!editor.innerHTML.trim()) { toast('❌ 编辑器内容为空'); return; }

  const colors = getColors();
  // 应用模板样式到内容（支持混搭）
  let styled;
  if (mixMode && Object.keys(mixOverrides).length > 0) {
    styled = applyMixStyles(editor.innerHTML, curTpl, colors);
  } else {
    styled = applyTemplateStyles(editor.innerHTML, curTpl, colors);
  }

  // 渐变/彩虹模式后处理
  styled = applyColorEffects(styled, colors);

  const s = tpl.render(colors);

  const tmpDiv = document.createElement('div');
  tmpDiv.innerHTML = styled;
  tmpDiv.style.position = 'fixed';
  tmpDiv.style.left = '-9999px';
  tmpDiv.style.width = '600px';
  document.body.appendChild(tmpDiv);

  if (typeof renderMathInElement !== 'undefined') {
    try {
      renderMathInElement(tmpDiv, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
      });
    } catch(e) {}
  }

  convertFormulasToImagesAsync(tmpDiv).then(() => {
    const bg = colors.bg || '#ffffff';
    const textColor = colors.text || '';
    const textCss = textColor ? `color:${textColor};` : '';

    // 微信兼容模式下，清理body样式中的不支持属性
    let bodyStyle = s.body;
    if (wxCompatMode) {
      bodyStyle = stripWxUnsupported(bodyStyle);
    }

    let innerHTML = tmpDiv.innerHTML;
    // 微信兼容模式下，清理内容中的不支持属性
    if (wxCompatMode) {
      innerHTML = applyWxCompatMode(innerHTML);
    }

    const htmlContent = `<table style="width:100%;background-color:${bg};"><tr><td style="${bodyStyle}${textCss}padding:20px;">${innerHTML}</td></tr></table>`;

    document.body.removeChild(tmpDiv);

    if (navigator.clipboard && navigator.clipboard.write) {
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const textBlob = new Blob([editor.textContent], { type: 'text/plain' });
      const item = new ClipboardItem({ 'text/html': blob, 'text/plain': textBlob });
      navigator.clipboard.write([item]).then(() => {
        toast('✅ 已复制！粘贴到公众号即可');
      }).catch(() => fallbackCopyHTML(htmlContent));
    } else {
      fallbackCopyHTML(htmlContent);
    }
  });
}

function convertFormulasToImagesAsync(container) {
  return new Promise((resolve) => {
    // ① 先移除 katex-mathml（MathML 会被公众号重复解析，导致 1→3）
    container.querySelectorAll('.katex-mathml').forEach(el => el.remove());

    // ② 移除 KaTeX 的 aria-hidden 辅助元素，只保留可见内容
    container.querySelectorAll('.katex-html[aria-hidden]').forEach(el => {
      // katex-html 是实际渲染层，保留内部 span 但移除外层 wrapper
      // 这样 SVG 能被正常找到，同时避免重复
    });

    const katexElements = container.querySelectorAll('.katex');
    if (katexElements.length === 0) { resolve(); return; }

    let pending = katexElements.length;
    let resolved = false;
    const done = () => {
      pending--;
      if (pending <= 0 && !resolved) {
        resolved = true;
        cleanupRemaining(container);
        resolve();
      }
    };

    katexElements.forEach(el => {
      try {
        const svgEl = el.querySelector('svg');
        if (!svgEl) {
          // 没有 SVG，直接用文本替代，避免残留 HTML 导致重复
          const text = el.textContent || '';
          if (el.parentNode) el.replaceWith(document.createTextNode(text));
          done();
          return;
        }

        const bbox = svgEl.getBBox();
        const width = Math.ceil(bbox.width) + 20;
        const height = Math.ceil(bbox.height) + 10;

        const canvas = document.createElement('canvas');
        const scale = 2;
        canvas.width = width * scale;
        canvas.height = height * scale;
        const ctx = canvas.getContext('2d');
        ctx.scale(scale, scale);

        const svgData = new XMLSerializer().serializeToString(svgEl);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        const img = new Image();
        img.onload = function() {
          ctx.drawImage(img, 0, 0, width, height);
          URL.revokeObjectURL(url);
          const dataUrl = canvas.toDataURL('image/png');
          const imgEl = document.createElement('img');
          imgEl.src = dataUrl;
          imgEl.style.width = width + 'px';
          imgEl.style.height = height + 'px';
          imgEl.style.verticalAlign = 'middle';
          if (el.parentNode) el.replaceWith(imgEl);
          done();
        };
        img.onerror = function() {
          URL.revokeObjectURL(url);
          // 转换失败时用文本替代，避免残留 KaTeX HTML
          const text = el.textContent || '';
          if (el.parentNode) el.replaceWith(document.createTextNode(text));
          done();
        };
        img.src = url;
      } catch(e) {
        const text = el.textContent || '';
        if (el.parentNode) el.replaceWith(document.createTextNode(text));
        done();
      }
    });

    // 超时保护：清理所有残留的 KaTeX 元素
    setTimeout(() => {
      if (!resolved) {
        resolved = true;
        cleanupRemaining(container);
        resolve();
      }
    }, 5000);
  });
}

/**
 * 清理残留的 KaTeX 元素，替换为纯文本，防止复制时重复
 */
function cleanupRemaining(container) {
  container.querySelectorAll('.katex').forEach(el => {
    const text = el.textContent || '';
    if (el.parentNode) el.replaceWith(document.createTextNode(text));
  });
  // 兜底：移除所有可能残留的 KaTeX 相关元素
  container.querySelectorAll('.katex-mathml, .katex-html[aria-hidden]').forEach(el => el.remove());
}

function fallbackCopyHTML(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  tmp.style.position = 'fixed';
  tmp.style.left = '-9999px';
  document.body.appendChild(tmp);
  const range = document.createRange();
  range.selectNode(tmp);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  try {
    document.execCommand('copy');
    toast('✅ 已复制！粘贴到公众号即可');
  } catch {
    toast('❌ 复制失败，请手动选中右侧预览区内容复制');
  }
  sel.removeAllRanges();
  document.body.removeChild(tmp);
}

// ── 其他 ──
function clearAll() {
  if (confirm('确定清空所有内容？')) {
    editor.innerHTML = '';
    render();
  }
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('show');
  void t.offsetWidth;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

// ── 微信兼容模式 ──

/**
 * 切换微信兼容模式
 */
function toggleWxMode() {
  wxCompatMode = document.getElementById('wxMode').checked;
  render();
}

/**
 * 设置预览缩放比例
 */
function setZoom(val) {
  previewZoom = parseInt(val);
  document.getElementById('zoomVal').textContent = previewZoom + '%';

  const phone = document.querySelector('.phone-mockup');
  if (phone) {
    phone.style.transform = `scale(${previewZoom / 100})`;
    phone.style.transformOrigin = 'top center';
  }
}

// ═══ 分隔条拖拽 ═══

function initResizers() {
  document.querySelectorAll('.resizer').forEach(resizer => {
    resizer.addEventListener('mousedown', onResizerMouseDown);
  });
  restorePanelSizes();
}

function onResizerMouseDown(e) {
  e.preventDefault();
  const resizer = e.target;
  const leftPanel = document.getElementById(resizer.dataset.left);
  const rightPanel = document.getElementById(resizer.dataset.right);
  if (!leftPanel || !rightPanel) return;

  resizer.classList.add('active');
  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';

  const startX = e.clientX;
  const startLeftW = leftPanel.getBoundingClientRect().width;
  const startRightW = rightPanel.getBoundingClientRect().width;

  function onMove(e) {
    const dx = e.clientX - startX;
    leftPanel.style.width = Math.max(150, startLeftW + dx) + 'px';
    leftPanel.style.flex = 'none';
    rightPanel.style.width = Math.max(200, startRightW - dx) + 'px';
    rightPanel.style.flex = 'none';
  }

  function onUp() {
    resizer.classList.remove('active');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    savePanelSizes();
  }

  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
}

function savePanelSizes() {
  const sizes = {};
  ['templatePanel', 'editorPanel', 'previewPanel'].forEach(id => {
    const el = document.getElementById(id);
    if (el) sizes[id] = el.offsetWidth;
  });
  localStorage.setItem('panelSizes', JSON.stringify(sizes));
}

function restorePanelSizes() {
  try {
    const sizes = JSON.parse(localStorage.getItem('panelSizes'));
    if (!sizes) return;
    Object.entries(sizes).forEach(([id, w]) => {
      const el = document.getElementById(id);
      if (el && w) {
        el.style.width = w + 'px';
        el.style.flex = 'none';
      }
    });
  } catch (e) {}
}

// ── 模板面板（左侧） ──

/**
 * 初始化模板面板
 */
function initTplPanel() {
  renderTplScrollRow();
  renderCatSelect();
}

/**
 * 渲染分类下拉
 */
function renderCatSelect() {
  const select = document.getElementById('catSelect');
  if (!select) return;

  const cats = getCategories();
  const allTpls = getAllTemplates();

  select.innerHTML = '<option value="all">全部</option>';
  Object.entries(cats).forEach(([key, cat]) => {
    const count = Object.values(allTpls).filter(t => t.category === key).length;
    if (count === 0) return;
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = `${cat.icon} ${cat.name} (${count})`;
    select.appendChild(opt);
  });

  select.value = curCategory;
}

// ═══ 模板堆叠轮播 ═══

let stackIndex = 0;
let stackTpls = [];

/**
 * 初始化模板面板
 */
function initTplPanel() {
  renderTplStack();
  renderCatSelect();

  // 鼠标滚轮切换模板
  const wrap = document.getElementById('tplStackWrap');
  if (wrap) {
    wrap.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY > 0) stackNext();
      else stackPrev();
    }, { passive: false });
  }
}

/**
 * 渲染堆叠卡片
 */
function renderTplStack() {
  const container = document.getElementById('tplStack');
  if (!container) return;

  const allTpls = getAllTemplates();
  stackTpls = Object.entries(allTpls).filter(([, v]) => {
    return curCategory === 'all' || v.category === curCategory;
  });

  if (stackIndex >= stackTpls.length) stackIndex = 0;

  container.innerHTML = '';

  stackTpls.forEach(([k, v], i) => {
    const card = document.createElement('div');
    card.className = 'stack-card';
    card.dataset.tplId = k;

    const rel = i - stackIndex;
    const total = stackTpls.length;
    let dist = rel;
    if (dist > total / 2) dist -= total;
    if (dist < -total / 2) dist += total;

    if (dist === 0) card.classList.add('top');
    else if (dist === -1) card.classList.add('layer2-l');
    else if (dist === 1) card.classList.add('layer2-r');
    else if (dist === -2) card.classList.add('layer3-l');
    else if (dist === 2) card.classList.add('layer3-r');
    else if (Math.abs(dist) <= 4) card.classList.add('layer4');
    else card.classList.add('hidden');

    // 用模板render函数生成样式
    const colors = { primary: v.primary, bg: v.bg, text: '' };
    const s = v.render(colors);
    const p = v.primary;

    // 缩放样式（预览卡片只有~240px宽，需要缩小字号等）
    function scale(styleStr, scale) {
      return styleStr
        .replace(/font-size:\s*(\d+(?:\.\d+)?)px/g, (_, n) => `font-size:${(parseFloat(n)*scale).toFixed(1)}px`)
        .replace(/padding:\s*(\d+(?:\.\d+)?)px/g, (_, n) => `padding:${(parseFloat(n)*scale).toFixed(1)}px`)
        .replace(/padding:\s*(\d+(?:\.\d+)?)px\s+(\d+(?:\.\d+)?)px/g, (_, a, b) => `padding:${(parseFloat(a)*scale).toFixed(1)}px ${(parseFloat(b)*scale).toFixed(1)}px`)
        .replace(/border-radius:\s*(\d+(?:\.\d+)?)px/g, (_, n) => `border-radius:${(parseFloat(n)*scale).toFixed(1)}px`)
        .replace(/margin:\s*(\d+(?:\.\d+)?)px/g, (_, n) => `margin:${Math.max(2,parseFloat(n)*scale).toFixed(1)}px`)
        .replace(/letter-spacing:\s*(\d+(?:\.\d+)?)px/g, (_, n) => `letter-spacing:${(parseFloat(n)*scale).toFixed(1)}px`)
        .replace(/width:\s*(\d+(?:\.\d+)?)px/g, (_, n) => `width:${(parseFloat(n)*scale).toFixed(1)}px`)
        .replace(/height:\s*(\d+(?:\.\d+)?)px/g, (_, n) => `height:${(parseFloat(n)*scale).toFixed(1)}px`);
    }

    const sc = window._previewScale || 0.65; // 预览缩放比例（跟随界面缩放）

    // 表格样式（用模板的table_th/table_td，没有则用默认）
    const thStyle = scale(s.table_th || `background:${p};color:#fff;padding:3px 6px;font-weight:600;`, sc);
    const tdStyle = scale(s.table_td || `padding:3px 6px;border-bottom:1px solid #eee;font-size:10px;`, sc);
    const altStyle = s.table_alt || `background:#f9f9f9;`;
    const cardStyle = scale(s.card || `background:${p}10;padding:8px;border-radius:6px;`, sc);

    // 图片样式
    const imgStyle = s.img || `max-width:100%;border-radius:6px;display:block;`;

    // 预览内容：标题 + 正文 + 图片 + 引用 + 表格 + 卡片
    const previewHTML = `
      <div style="${scale(s.h2, sc)}">章节标题</div>
      <div style="${scale(s.h3 || '', sc)}">小标题说明</div>
      <div style="${scale(s.p.replace(/margin:[^;]+;?/g,''), sc)}">这是正文段落的预览文字，展示行高和字体效果。</div>
      <div style="text-align:center;margin:4px 0">
        <img src="img/preview.jpg" style="${imgStyle}" alt="图片预览">
      </div>
      <div style="${scale(s.quote || '', sc)}">💡 引用块样式预览</div>
      <table style="width:100%;border-collapse:collapse;font-size:${(10*sc).toFixed(1)}px;margin:6px 0">
        <tr><th style="${thStyle}">项目</th><th style="${thStyle}">数据</th><th style="${thStyle}">状态</th></tr>
        <tr><td style="${tdStyle}">示例A</td><td style="${tdStyle}">128</td><td style="${tdStyle}">✅</td></tr>
        <tr style="${altStyle}"><td style="${tdStyle}${altStyle}">示例B</td><td style="${tdStyle}${altStyle}">256</td><td style="${tdStyle}${altStyle}">⏳</td></tr>
      </table>
      <div style="${cardStyle}">卡片样式预览</div>
    `;

    card.innerHTML = `
      <div class="stack-card-preview" style="background:${v.bg || '#fff'}">
        ${previewHTML}
      </div>
      <div class="stack-card-info">
        <div class="stack-card-name">${v.name}</div>
        <div class="stack-card-desc">${v.desc}</div>
      </div>
      ${dist === 0 && total > 1 ? `<div class="stack-hint">◀ ▶ 还有${total - 1}个模板</div>` : ''}
    `;

    card.onclick = () => {
      if (dist === 0) pickTpl(k);
      else { stackIndex = i; renderTplStack(); }
    };

    container.appendChild(card);
  });

  updateStackNav();
}

/**
 * 上一个模板
 */
function stackPrev() {
  stackIndex = (stackIndex - 1 + stackTpls.length) % stackTpls.length;
  renderTplStack();
}

/**
 * 下一个模板
 */
function stackNext() {
  stackIndex = (stackIndex + 1) % stackTpls.length;
  renderTplStack();
}

/**
 * 更新导航标签
 */
function updateStackNav() {
  const label = document.getElementById('stackNavLabel');
  if (label && stackTpls.length > 0) {
    label.textContent = `${stackIndex + 1} / ${stackTpls.length}`;
  }

  // 更新层叠指示点
  const layersEl = document.getElementById('stackLayers');
  if (layersEl && stackTpls.length > 0) {
    const maxDots = Math.min(stackTpls.length, 9);
    let dotsHTML = '';
    for (let i = 0; i < maxDots; i++) {
      const isActive = i === (stackIndex % maxDots);
      dotsHTML += `<div class="stack-layer-dot${isActive ? ' active' : ''}"></div>`;
    }
    if (stackTpls.length > maxDots) {
      dotsHTML += `<span style="font-size:10px;color:var(--text-muted);margin-left:2px">…</span>`;
    }
    layersEl.innerHTML = dotsHTML;
  }
}

/**
 * 分类筛选
 */
function filterCategory(cat) {
  curCategory = cat;
  stackIndex = 0;
  renderTplStack();

  const select = document.getElementById('catSelect');
  if (select) select.value = cat;
}

/**
 * 微信不支持的CSS属性列表
 */
const WX_UNSUPPORTED_PROPS = [
  'backdrop-filter',
  'filter',
  'position:\\s*fixed',
  'position:\\s*sticky',
  'box-shadow',
  'text-shadow',
  'animation',
  'transition',
  'transform',
  'clip-path',
  'mask',
  'perspective',
  'object-fit',
];

/**
 * 从inline style中移除微信不支持的CSS属性
 */
function stripWxUnsupported(styleStr) {
  if (!styleStr) return styleStr;

  let result = styleStr;

  // 移除不支持的属性
  WX_UNSUPPORTED_PROPS.forEach(prop => {
    // 匹配 "property: value;" 或 "property: value" (在末尾)
    const regex = new RegExp(`(^|;\\s*)(${prop}\\s*:[^;]+;?)`, 'gi');
    result = result.replace(regex, '$1');
  });

  // 移除渐变中的透明度写法（微信对rgba支持有限，部分场景会吞掉）
  // 保留但简化：将 rgba(r,g,b,0.x) 转为对应hex（简化处理，只去掉alpha很低的）
  result = result.replace(/rgba\([^)]+,\s*0\.0[0-9]+\)/g, 'transparent');

  // 清理多余分号和空白
  result = result.replace(/;+/g, ';').replace(/^;|;\s*$/g, '').trim();

  return result;
}

/**
 * 微信兼容模式下，清理预览HTML中不支持的样式
 * 微信公众号编辑器的核心限制：
 * 1. 不支持 box-shadow, text-shadow, filter, backdrop-filter
 * 2. 不支持 position: fixed/sticky
 * 3. 不支持 animation, transition, transform
 * 4. 不支持外部样式表和class选择器，只认inline style
 * 5. 不支持 clip-path, mask, perspective
 * 6. 渐变(background: linear-gradient)支持有限
 * 7. border-radius 支持（但复杂值可能被简化）
 */
function applyWxCompatMode(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;

  // 处理所有带style的元素
  tmp.querySelectorAll('[style]').forEach(el => {
    const original = el.getAttribute('style');
    const stripped = stripWxUnsupported(original);
    el.setAttribute('style', stripped);
  });

  // 移除微信不支持的标签
  tmp.querySelectorAll('video,audio,iframe,embed,object,canvas,svg').forEach(el => {
    const placeholder = document.createElement('p');
    placeholder.style.cssText = 'text-align:center;padding:20px;color:#999;font-size:13px;background:#f5f5f5;border-radius:8px;';
    placeholder.textContent = `[${el.tagName.toLowerCase()} 不支持]`;
    el.replaceWith(placeholder);
  });

  // 移除外部链接和脚本
  tmp.querySelectorAll('link,script,style').forEach(el => el.remove());

  // 处理img：确保有width属性（微信对max-width支持有限）
  tmp.querySelectorAll('img').forEach(img => {
    img.removeAttribute('class');
    img.removeAttribute('loading');
    img.removeAttribute('decoding');
    // 确保img有基本的width样式
    const style = img.getAttribute('style') || '';
    if (!style.includes('width')) {
      img.setAttribute('style', style + ';max-width:100%;height:auto;');
    }
  });

  return tmp.innerHTML;
}

// ── 表格功能 ──

/**
 * 初始化表格模板选择器
 */
function initTableTplSelector() {
  const select = document.getElementById('tableTplSelect');
  if (!select || !window.TABLE_TEMPLATES) return;

  // 清空现有选项（保留第一个）
  while (select.options.length > 1) select.remove(1);

  // 添加表格模板选项
  Object.entries(window.TABLE_TEMPLATES).forEach(([id, tpl]) => {
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = `${tpl.icon} ${tpl.name}`;
    select.appendChild(opt);
  });

  // 设置默认选中
  select.value = window.curTableTpl || 'tbl-clean';
}

/**
 * 设置表格模板
 */
function setTableTpl(tplId) {
  if (!tplId) return;
  window.curTableTpl = tplId;
  // 强制应用到编辑器中已有的表格
  forceApplyTableStyles();
}

/**
 * 设置是否有表头
 */
function setTableHeader(hasHeader) {
  window.curTableHasHeader = hasHeader;
  // 先标准化表格结构（th/td转换），再应用样式
  editor.querySelectorAll('table').forEach(t => normalizeTableStructure(t));
  forceApplyTableStyles();
}

/**
 * 设置图片边框样式
 */
function setImgStyle(style) {
  window.curImgStyle = style;
  // 刷新已有图片样式
  const tpl = getTemplate(curTpl);
  if (tpl && editor.querySelector('img')) {
    const colors = getColors();
    const s = tpl.render(colors);
    const imgs = getImgVariants(s);
    const imgStyle = imgs[style] || imgs.img;
    editor.querySelectorAll('img').forEach(img => {
      img.setAttribute('style', imgStyle);
    });
  }
  render();
}

/**
 * 插入新表格（旧版prompt，保留兼容）
 */
function insertTable() {
  insertTableFromPicker();
}

/**
 * 切换表格选择器显示
 */
function toggleTablePicker() {
  const picker = document.getElementById('tablePicker');
  if (!picker) return;

  if (picker.classList.contains('show')) {
    picker.classList.remove('show');
    return;
  }

  // 初始化网格
  initPickerGrid();

  // 重置输入
  document.getElementById('pickerRows').value = 1;
  document.getElementById('pickerCols').value = 1;
  document.getElementById('pickerLabel').textContent = '选择表格大小';

  picker.classList.add('show');

  // 点击外部关闭
  setTimeout(() => {
    document.addEventListener('click', closePickerOutside, { once: true });
  }, 10);
}

function closePickerOutside(e) {
  const picker = document.getElementById('tablePicker');
  const btn = document.getElementById('tableInsertBtn');
  if (picker && !picker.contains(e.target) && e.target !== btn) {
    picker.classList.remove('show');
  }
}

/**
 * 初始化选择器网格
 */
function initPickerGrid() {
  const grid = document.getElementById('pickerGrid');
  if (!grid) return;

  grid.innerHTML = '';

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 10; c++) {
      const cell = document.createElement('div');
      cell.className = 'picker-cell';
      cell.dataset.row = r + 1;
      cell.dataset.col = c + 1;
      cell.addEventListener('mouseenter', onPickerHover);
      cell.addEventListener('click', onPickerClick);
      grid.appendChild(cell);
    }
  }
}

/**
 * 鼠标悬停高亮
 */
function onPickerHover(e) {
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);

  // 更新高亮
  document.querySelectorAll('.picker-cell').forEach(cell => {
    const r = parseInt(cell.dataset.row);
    const c = parseInt(cell.dataset.col);
    if (r <= row && c <= col) {
      cell.classList.add('highlight');
    } else {
      cell.classList.remove('highlight');
    }
  });

  // 更新标签和输入框
  document.getElementById('pickerLabel').textContent = `${row} × ${col}`;
  document.getElementById('pickerRows').value = row;
  document.getElementById('pickerCols').value = col;
}

/**
 * 点击网格直接插入
 */
function onPickerClick(e) {
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);
  doInsertTable(row, col);
}

/**
 * 从输入框插入表格
 */
function insertTableFromPicker() {
  const rows = parseInt(document.getElementById('pickerRows').value) || 4;
  const cols = parseInt(document.getElementById('pickerCols').value) || 3;

  if (rows < 1 || cols < 1 || rows > 20 || cols > 10) {
    toast('❌ 行数1-20，列数1-10');
    return;
  }

  doInsertTable(rows, cols);
}

/**
 * 执行插入表格
 */
function doInsertTable(rows, cols) {
  const colors = getColors();
  const html = renderTableHTML(rows, cols, colors, window.curTableTpl, window.curTableHasHeader);
  document.execCommand('insertHTML', false, html);

  // 关闭选择器
  const picker = document.getElementById('tablePicker');
  if (picker) picker.classList.remove('show');

  render();
  toast(`✅ 已插入 ${rows}×${cols} 表格`);
}

/**
 * 应用表格样式到编辑器中已有的表格
 */
function applyTableToExisting() {
  if (!editor.querySelector('table')) {
    toast('ℹ️ 编辑器中没有表格');
    return;
  }

  // 先标准化表格结构
  editor.querySelectorAll('table').forEach(t => normalizeTableStructure(t));

  // 强制应用样式
  forceApplyTableStyles();

  toast('✅ 表格样式已更新');
}

/**
 * 重写粘贴处理，增加表格支持
 */
function handlePaste(e) {
  e.preventDefault();
  const html = e.clipboardData.getData('text/html');
  const text = e.clipboardData.getData('text/plain');
  const files = e.clipboardData.files;

  if (files.length && files[0].type.startsWith('image/')) {
    addImgs(files);
    return;
  }

  if (html) {
    // 清理HTML但保留表格结构
    const cleaned = cleanPastedHTML(html);
    document.execCommand('insertHTML', false, cleaned);

    // 对粘贴的表格标准化结构并应用当前样式
    setTimeout(() => {
      const tables = editor.querySelectorAll('table');
      if (tables.length > 0) {
        tables.forEach(t => normalizeTableStructure(t));
        forceApplyTableStyles();
      }
      render();
    }, 30);
  } else {
    // 检测纯文本中的表格（制表符分隔或管道符分隔）
    const tableData = parseTextTable(text);
    if (tableData) {
      const colors = getColors();
      const html = renderTableHTML(tableData.rows.length, tableData.cols, colors, window.curTableTpl, window.curTableHasHeader);
      document.execCommand('insertHTML', false, html);
    } else {
      const ps = text.split(/\n\s*\n/).filter(p => p.trim());
      document.execCommand('insertHTML', false,
        ps.map(p => `<p>${p.trim().replace(/\n/g, '<br>')}</p>`).join(''));
    }
  }
  render();
}

/**
 * 解析纯文本中的表格
 * 支持制表符分隔和管道符分隔
 */
function parseTextTable(text) {
  const lines = text.trim().split('\n').filter(l => l.trim());

  // 检测制表符分隔
  const tabLines = lines.filter(l => l.includes('\t'));
  if (tabLines.length >= 2 && tabLines.length === lines.length) {
    const rows = tabLines.map(l => l.split('\t'));
    const cols = Math.max(...rows.map(r => r.length));
    return { rows, cols };
  }

  // 检测管道符分隔（如 Markdown 表格）
  const pipeLines = lines.filter(l => l.includes('|') && !l.match(/^\s*\|?\s*[-:]+/));
  if (pipeLines.length >= 2) {
    const rows = pipeLines.map(l =>
      l.split('|').map(c => c.trim()).filter(c => c !== '')
    );
    const cols = Math.max(...rows.map(r => r.length));
    return { rows, cols };
  }

  return null;
}

/**
 * 渐变/彩虹模式后处理
 */
function applyColorEffects(html, colors) {
  if (!colors.gradEnd && !colors.rainbow) return html;

  const tmp = document.createElement('div');
  tmp.innerHTML = html;

  tmp.querySelectorAll('h1, h2').forEach(el => {
    const style = el.getAttribute('style') || '';

    // 彩虹模式
    if (colors.rainbow) {
      el.style.background = 'linear-gradient(90deg,#ff006e,#ff7700,#ffdd00,#00ff88,#0088ff,#8800ff)';
      el.style.webkitBackgroundClip = 'text';
      el.style.webkitTextFillColor = 'transparent';
      el.style.backgroundClip = 'text';
      return;
    }

    // 渐变模式：给标题添加渐变背景色
    if (colors.gradEnd) {
      const p = colors.primary;
      const g = colors.gradEnd;
      // 如果元素已有background且含gradient，替换颜色
      if (style.includes('background') && style.includes('gradient')) {
        el.style.background = `linear-gradient(135deg,${p},${g})`;
      }
      // 如果元素是纯色背景（如胶囊h2），改为渐变
      else if (style.includes('background') && !style.includes('gradient')) {
        // 检查是否是白色文字（胶囊样式）
        if (style.includes('color:#fff') || style.includes('color: #fff')) {
          el.style.background = `linear-gradient(135deg,${p},${g})`;
        }
      }
    }
  });

  return tmp.innerHTML;
}

// ═══════════════════════════════════════
//  手机端适配
// ═══════════════════════════════════════

/**
 * 混搭模式样式应用
 * 对每个元素类型，优先使用 mixOverrides 中指定模板的样式
 */
function applyMixStyles(html, tplId, colors) {
  const baseTpl = getTemplate(tplId);
  if (!baseTpl) return html;

  const baseS = baseTpl.render(colors);
  const tmp = document.createElement('div');
  tmp.innerHTML = html;

  const textColor = colors.text || '';

  // 为每个部分获取样式（混搭覆盖 or 基础模板）
  function getStyle(part) {
    if (mixOverrides[part]) {
      const t = getTemplate(mixOverrides[part]);
      if (t) return t.render(colors);
    }
    return baseS;
  }

  const sh2 = getStyle('h2');
  const sh3 = getStyle('h3');
  const sp = getStyle('p');
  const sq = getStyle('quote');
  const sTable = getStyle('table');
  const sImg = getStyle('img');
  const sCard = getStyle('card');

  tmp.querySelectorAll('h2').forEach(e => e.setAttribute('style', sh2.h2));
  tmp.querySelectorAll('h3').forEach(e => {
    e.setAttribute('style', sh3.h3);
    if (textColor) e.style.color = textColor;
  });
  tmp.querySelectorAll('p').forEach(e => {
    const st = e.getAttribute('style') || '';
    if (!st.includes('text-align') && !st.includes('font-size: 14px') && !st.includes('margin: 0')) {
      e.setAttribute('style', sp.p);
      if (textColor) e.style.color = textColor;
    }
  });
  tmp.querySelectorAll('blockquote').forEach(e => {
    e.setAttribute('style', sq.quote);
    if (textColor) e.style.color = textColor;
  });
  tmp.querySelectorAll('strong').forEach(e => e.setAttribute('style', baseS.strong));
  tmp.querySelectorAll('img').forEach(e => {
    const imgs = getImgVariants(sImg);
    e.setAttribute('style', imgs[window.curImgStyle] || imgs.img);
  });
  tmp.querySelectorAll('.hl').forEach(e => e.setAttribute('style', baseS.highlight));
  tmp.querySelectorAll('.dv').forEach(e => e.setAttribute('style', baseS.divider));
  tmp.querySelectorAll('.nm').forEach(e => e.setAttribute('style', baseS.num));
  tmp.querySelectorAll('.card').forEach(e => {
    e.setAttribute('style', sCard.card);
    if (textColor) e.style.color = textColor;
  });

  // 表格样式
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
        if (isAlt && ts.trAlt) row.setAttribute('style', `background:${ts.trAlt};`);
        row.querySelectorAll('th').forEach(th => {
          th.setAttribute('style', isHeaderRow ? ts.th : ts.td);
        });
        row.querySelectorAll('td').forEach(td => {
          let tdStyle = ts.td || '';
          if (isAlt && ts.trAlt) tdStyle += `background:${ts.trAlt};`;
          td.setAttribute('style', tdStyle);
        });
      });
    });
  }

  return tmp.innerHTML;
}

function initMobile() {
  if (window.innerWidth <= 768) {
    switchMobileTab('templatePanel', document.querySelector('.mobile-tab[data-panel="templatePanel"]'));
  }
}

function switchMobileTab(panelId, tabEl) {
  // 隐藏所有面板
  document.querySelectorAll('.template-panel, .editor-panel, .preview-panel').forEach(p => {
    p.classList.remove('mobile-active');
  });

  // 显示目标面板
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.add('mobile-active');

  // 更新 tab 状态
  document.querySelectorAll('.mobile-tab').forEach(t => t.classList.remove('active'));
  if (tabEl) tabEl.classList.add('active');

  // 切换到预览时刷新渲染
  if (panelId === 'previewPanel') render();
}

// ═══════════════════════════════════════
//  混搭模式
// ═══════════════════════════════════════

let mixMode = false;
let mixOverrides = {}; // { h2: 'tplId', h3: 'tplId', ... }

const PRESETS = [
  '#2b5da6','#e74c3c','#2ecc71','#f39c12','#9b59b6','#1abc9c',
  '#e67e22','#34495e','#00bcd4','#ff6b6b','#6366f1','#2d6a4f',
  '#8b6914','#00ff88','#111111','#ec4899'
];

function initMixMode() {
  populateMixSelects();
  initColorPanel();
}

// ── 自定义颜色面板 ──

function initColorPanel() {
  buildPresets();
  const tpl = getTemplate(curTpl);
  if (tpl) {
    document.getElementById('cPrimary').value = tpl.primary;
    document.getElementById('cBg').value = tpl.bg;
  }
}

function toggleColorPanel() {
  const body = document.getElementById('colorCzBody');
  const toggle = document.getElementById('colorCzToggle');
  if (!body) return;
  const open = body.style.display === 'none';
  body.style.display = open ? 'block' : 'none';
  if (toggle) toggle.classList.toggle('open', open);
}

function buildPresets() {
  const bar = document.getElementById('presetBar');
  if (!bar) return;
  bar.innerHTML = '';
  const curColor = customColors.primary || (getTemplate(curTpl) ? getTemplate(curTpl).primary : '');

  PRESETS.forEach(c => {
    const s = document.createElement('span');
    s.style.background = c;
    if (c === curColor) s.className = 'active';
    s.onclick = () => {
      customColors.primary = c;
      document.getElementById('cPrimary').value = c;
      render();
      buildPresets();
    };
    bar.appendChild(s);
  });
}

function setCustomColor() {
  customColors.primary = document.getElementById('cPrimary').value;
  customColors.gradEnd = document.getElementById('cGradEnd').value;
  customColors.bg = document.getElementById('cBg').value;
  customColors.text = document.getElementById('cText').value;
  customColors.rainbow = document.getElementById('cRainbow').checked;
  render();
  buildPresets();

  // 自动更新表格颜色
  if (editor.querySelector('table') && typeof forceApplyTableStyles === 'function') {
    forceApplyTableStyles();
  }
}

function resetColors() {
  customColors = {};
  const tpl = getTemplate(curTpl);
  if (tpl) {
    document.getElementById('cPrimary').value = tpl.primary;
    document.getElementById('cBg').value = tpl.bg;
  }
  document.getElementById('cGradEnd').value = '';
  document.getElementById('cText').value = '';
  document.getElementById('cRainbow').checked = false;
  render();
  buildPresets();
  toast('✅ 已重置为模板默认颜色');
}

function populateMixSelects() {
  const allTpls = getAllTemplates();
  const parts = ['mixH2', 'mixH3', 'mixP', 'mixQuote', 'mixTable', 'mixImg', 'mixCard'];

  parts.forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = '<option value="">跟随当前模板</option>';
    Object.entries(allTpls).forEach(([k, v]) => {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = v.name;
      sel.appendChild(opt);
    });
    // 恢复已选值
    const part = id.replace('mix', '').toLowerCase();
    if (mixOverrides[part]) sel.value = mixOverrides[part];
  });
}

function toggleMixMode() {
  mixMode = !mixMode;
  const panel = document.getElementById('mixPanel');
  const tplStackWrap = document.getElementById('tplStackWrap');
  const tplNav = document.querySelector('.tpl-stack-nav');
  const layers = document.getElementById('stackLayers');
  const hint = document.querySelector('.stack-scroll-hint');
  const colorCz = document.getElementById('colorCustomizer');
  const btn = document.getElementById('mixToggle');

  if (panel) panel.style.display = mixMode ? 'block' : 'none';

  // 混搭模式下隐藏模板轮播和颜色面板
  if (tplStackWrap) tplStackWrap.style.display = mixMode ? 'none' : 'flex';
  if (tplNav) tplNav.style.display = mixMode ? 'none' : 'flex';
  if (layers) layers.style.display = mixMode ? 'none' : 'flex';
  if (hint) hint.style.display = mixMode ? 'none' : 'block';
  if (colorCz) colorCz.style.display = mixMode ? 'none' : 'block';

  if (btn) btn.classList.toggle('active', mixMode);
  if (mixMode) populateMixSelects();
}

function applyMix() {
  mixOverrides = {};
  const mapping = {
    h2: 'mixH2', h3: 'mixH3', p: 'mixP',
    quote: 'mixQuote', table: 'mixTable',
    img: 'mixImg', card: 'mixCard'
  };

  Object.entries(mapping).forEach(([part, selId]) => {
    const sel = document.getElementById(selId);
    if (sel && sel.value) mixOverrides[part] = sel.value;
  });

  render();
}

function resetMix() {
  mixOverrides = {};
  ['mixH2', 'mixH3', 'mixP', 'mixQuote', 'mixTable', 'mixImg', 'mixCard'].forEach(id => {
    const sel = document.getElementById(id);
    if (sel) sel.value = '';
  });
  render();
  toast('✅ 已重置为当前模板样式');
}

/**
 * 获取混搭后的样式（供 render 使用）
 * 如果某个部分有混搭覆盖，就用覆盖模板的样式，否则用当前模板
 */
function getMixStyle(part) {
  if (!mixMode || !mixOverrides[part]) return null;
  const tpl = getTemplate(mixOverrides[part]);
  if (!tpl) return null;
  const colors = getColors();
  return tpl.render(colors);
}

// ═══════════════════════════════════════
//  界面缩放
// ═══════════════════════════════════════

function initUIScale() {
  const saved = localStorage.getItem('uiScale') || '100';
  const slider = document.getElementById('uiScale');
  const valEl = document.getElementById('scaleVal');
  if (slider) slider.value = saved;
  if (valEl) valEl.textContent = saved + '%';
  applyUIScale(parseInt(saved));
}

function setUIScale(val) {
  val = parseInt(val);
  document.getElementById('scaleVal').textContent = val + '%';
  localStorage.setItem('uiScale', val);
  applyUIScale(val);
}

function applyUIScale(val) {
  document.documentElement.style.setProperty('--ui-scale', val / 100);
  // 模板预览区域也跟着缩放
  const previewScale = 0.65 * (val / 100);
  window._previewScale = previewScale;
}

// ═══════════════════════════════════════
//  分享功能
// ═══════════════════════════════════════

function toggleShare() {
  const url = window.location.href;
  document.getElementById('shareLinkInput').value = url;
  document.getElementById('shareOverlay').classList.add('active');
  generateQR(url);
}

function closeShare() {
  document.getElementById('shareOverlay').classList.remove('active');
}

function shareToWechat() {
  // 微信只能通过扫码或复制链接
  copyShareLink();
  toast('✅ 链接已复制，粘贴到微信发送即可');
}

function shareToQQ() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent('公众号排版器 Pro - 免费在线排版工具');
  window.open(`https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}`);
}

function shareToWeibo() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent('推荐一个超好用的公众号排版器，100+模板免费用！');
  window.open(`https://service.weibo.com/share/share.php?url=${url}&title=${title}`);
}

function shareToTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Free WeChat article formatter with 100+ templates');
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
}

function copyShareLink() {
  const input = document.getElementById('shareLinkInput');
  input.select();
  navigator.clipboard.writeText(input.value).then(() => {
    toast('✅ 链接已复制');
  }).catch(() => {
    document.execCommand('copy');
    toast('✅ 链接已复制');
  });
}

// 简易 QR 码生成器（纯 JS，无需外部库）
function generateQR(text) {
  const container = document.getElementById('shareQR');
  container.innerHTML = '';
  const canvas = document.createElement('canvas');
  const size = 160;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // 用第三方 API 生成 QR（轻量方案）
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    ctx.drawImage(img, 0, 0, size, size);
  };
  img.onerror = function() {
    // API 失败时显示提示
    container.innerHTML = '<p style="font-size:12px;color:var(--text-muted)">请复制链接手动分享</p>';
  };
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(text)}`;
  container.appendChild(canvas);
}

// 点击遮罩关闭分享
document.addEventListener('click', (e) => {
  if (e.target.id === 'shareOverlay') closeShare();
});

// ═══════════════════════════════════════
//  反馈系统
// ═══════════════════════════════════════

function openFeedback() {
  document.getElementById('feedbackOverlay').classList.add('active');
}

function closeFeedback() {
  document.getElementById('feedbackOverlay').classList.remove('active');
}

function copyFeedbackLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    toast('✅ 链接已复制，发给朋友提建议吧');
  }).catch(() => {
    toast('❌ 复制失败，请手动复制地址栏链接');
  });
}

function submitFeedback() {
  const text = document.getElementById('feedbackText').value.trim();
  if (!text) {
    toast('❌ 请先写点反馈内容');
    return;
  }

  // 方案1: 用 mailto 发送
  const subject = encodeURIComponent('公众号排版器反馈');
  const body = encodeURIComponent(text);
  window.open(`mailto:your@email.com?subject=${subject}&body=${body}`);

  // 方案2: 如果你有后端 API，可以改成 fetch 请求
  // fetch('/api/feedback', { method: 'POST', body: JSON.stringify({ text }) });

  document.getElementById('feedbackText').value = '';
  closeFeedback();
  toast('✅ 感谢反馈！已打开邮件客户端');
}

// 点击遮罩关闭反馈
document.addEventListener('click', (e) => {
  if (e.target.id === 'feedbackOverlay') closeFeedback();
});
