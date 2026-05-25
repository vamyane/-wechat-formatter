/**
 * ═══════════════════════════════════════
 * 公众号排版器 Pro - 表格样式系统 v2
 * ═══════════════════════════════════════
 */

// 当前选中的表格模板
window.curTableTpl = 'tbl-clean';
// 是否有表头
window.curTableHasHeader = true;

// 表格模板注册表
window.TABLE_TEMPLATES = {
  'tbl-clean': {
    name: '简约',
    icon: '◻️',
    desc: '干净清爽，细线分隔',
    render(colors, hasHeader) {
      const p = colors.primary || '#2b5da6';
      if (hasHeader) {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: `background:${p};color:#fff;padding:10px 14px;text-align:left;font-weight:700;border:1px solid ${p};`,
          td: 'padding:10px 14px;border:1px solid #e0e0e0;color:#333;font-weight:400;',
          trAlt: '#f9f9f9',
        };
      } else {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: '',
          td: 'padding:10px 14px;border:1px solid #e0e0e0;color:#333;font-weight:400;',
          trAlt: '#f9f9f9',
        };
      }
    }
  },

  'tbl-stripe': {
    name: '斑马纹',
    icon: '🦓',
    desc: '交替行底色，便于阅读',
    render(colors, hasHeader) {
      const p = colors.primary || '#2b5da6';
      if (hasHeader) {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: `background:${p};color:#fff;padding:10px 14px;text-align:left;font-weight:700;`,
          td: 'padding:10px 14px;color:#333;font-weight:400;',
          trAlt: `${p}18`,
        };
      } else {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: '',
          td: 'padding:10px 14px;color:#333;font-weight:400;',
          trAlt: `${p}18`,
        };
      }
    }
  },

  'tbl-border': {
    name: '全边框',
    icon: '🔲',
    desc: '完整边框，正式严谨',
    render(colors, hasHeader) {
      const p = colors.primary || '#2b5da6';
      if (hasHeader) {
        return {
          table: `width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;border:2px solid ${p};`,
          th: `background:${p};color:#fff;padding:10px 14px;text-align:left;font-weight:700;border:1px solid ${p};`,
          td: `padding:10px 14px;border:1px solid ${p}40;color:#333;font-weight:400;`,
          trAlt: '',
        };
      } else {
        return {
          table: `width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;border:2px solid ${p};`,
          th: '',
          td: `padding:10px 14px;border:1px solid ${p}40;color:#333;font-weight:400;`,
          trAlt: '',
        };
      }
    }
  },

  'tbl-card': {
    name: '卡片式',
    icon: '🃏',
    desc: '圆角卡片，现代感强',
    render(colors, hasHeader) {
      const p = colors.primary || '#2b5da6';
      if (hasHeader) {
        return {
          table: 'width:100%;border-collapse:separate;border-spacing:0;margin:16px 0;font-size:14px;line-height:1.8;border-radius:8px;overflow:hidden;border:1px solid #e5e5e5;',
          th: `background:${p};color:#fff;padding:12px 16px;text-align:left;font-weight:700;`,
          td: 'padding:12px 16px;color:#333;font-weight:400;border-bottom:1px solid #f0f0f0;',
          trAlt: '#fafafa',
        };
      } else {
        return {
          table: 'width:100%;border-collapse:separate;border-spacing:0;margin:16px 0;font-size:14px;line-height:1.8;border-radius:8px;overflow:hidden;border:1px solid #e5e5e5;',
          th: '',
          td: 'padding:12px 16px;color:#333;font-weight:400;border-bottom:1px solid #f0f0f0;',
          trAlt: '#fafafa',
        };
      }
    }
  },

  'tbl-minimal': {
    name: '极简线',
    icon: '📏',
    desc: '仅横线分隔，极度简约',
    render(colors, hasHeader) {
      const p = colors.primary || '#2b5da6';
      if (hasHeader) {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: `padding:10px 14px;text-align:left;font-weight:700;color:${p};border-bottom:2px solid ${p};`,
          td: 'padding:10px 14px;color:#333;font-weight:400;border-bottom:1px solid #eee;',
          trAlt: '',
        };
      } else {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: '',
          td: 'padding:10px 14px;color:#333;font-weight:400;border-bottom:1px solid #eee;',
          trAlt: '',
        };
      }
    }
  },

  'tbl-gradient': {
    name: '渐变表头',
    icon: '🌈',
    desc: '渐变色表头，活力动感',
    render(colors, hasHeader) {
      const p = colors.primary || '#2b5da6';
      if (hasHeader) {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: `background:linear-gradient(135deg, ${p}, ${p}cc);color:#fff;padding:12px 16px;text-align:left;font-weight:700;`,
          td: 'padding:10px 14px;color:#333;font-weight:400;border-bottom:1px solid #eee;',
          trAlt: '#f8f8f8',
        };
      } else {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: '',
          td: 'padding:10px 14px;color:#333;font-weight:400;border-bottom:1px solid #eee;',
          trAlt: '#f8f8f8',
        };
      }
    }
  },

  'tbl-shadow': {
    name: '阴影卡片',
    icon: '💫',
    desc: '带阴影的立体卡片',
    render(colors, hasHeader) {
      const p = colors.primary || '#2b5da6';
      if (hasHeader) {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);',
          th: `background:${p};color:#fff;padding:12px 16px;text-align:left;font-weight:700;`,
          td: 'padding:12px 16px;color:#333;font-weight:400;background:#fff;',
          trAlt: '#f9f9fb',
        };
      } else {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);',
          th: '',
          td: 'padding:12px 16px;color:#333;font-weight:400;background:#fff;',
          trAlt: '#f9f9fb',
        };
      }
    }
  },

  'tbl-dot': {
    name: '圆点标记',
    icon: '🔵',
    desc: '首列圆点标记，活泼有趣',
    render(colors, hasHeader) {
      const p = colors.primary || '#2b5da6';
      if (hasHeader) {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: `background:${p}10;color:${p};padding:10px 14px;text-align:left;font-weight:700;border-bottom:2px solid ${p};`,
          td: 'padding:10px 14px;color:#333;font-weight:400;border-bottom:1px solid #eee;',
          trAlt: '',
        };
      } else {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: '',
          td: 'padding:10px 14px;color:#333;font-weight:400;border-bottom:1px solid #eee;',
          trAlt: '',
        };
      }
    }
  },

  'tbl-dark': {
    name: '暗色系',
    icon: '🌙',
    desc: '深色背景，高级质感',
    render(colors, hasHeader) {
      const p = colors.primary || '#6366f1';
      if (hasHeader) {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;background:#1a1a2e;border-radius:8px;overflow:hidden;',
          th: `background:${p};color:#fff;padding:12px 16px;text-align:left;font-weight:700;`,
          td: 'padding:10px 16px;color:#e0e0e0;font-weight:400;border-bottom:1px solid #2a2a3e;',
          trAlt: '#16162a',
        };
      } else {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;background:#1a1a2e;border-radius:8px;overflow:hidden;',
          th: '',
          td: 'padding:10px 16px;color:#e0e0e0;font-weight:400;border-bottom:1px solid #2a2a3e;',
          trAlt: '#16162a',
        };
      }
    }
  },

  'tbl-elegant': {
    name: '优雅',
    icon: '✨',
    desc: '细线优雅，适合文艺内容',
    render(colors, hasHeader) {
      const p = colors.primary || '#8b6914';
      if (hasHeader) {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: `padding:12px 14px;text-align:left;font-weight:700;color:${p};border-bottom:2px solid ${p};letter-spacing:1px;`,
          td: 'padding:12px 14px;color:#555;font-weight:400;border-bottom:1px solid #e8e4dc;',
          trAlt: '',
        };
      } else {
        return {
          table: 'width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;line-height:1.8;',
          th: '',
          td: 'padding:12px 14px;color:#555;font-weight:400;border-bottom:1px solid #e8e4dc;',
          trAlt: '',
        };
      }
    }
  },
};

/**
 * 获取当前表格模板的样式
 */
function getTableStyles() {
  const colors = getColors();
  const tpl = window.TABLE_TEMPLATES[window.curTableTpl];
  if (!tpl) return null;
  return tpl.render(colors, window.curTableHasHeader);
}

/**
 * 强制应用表格样式到编辑器中的所有表格
 * 无论表格当前状态如何，都重新设置样式
 */
function forceApplyTableStyles() {
  const s = getTableStyles();
  if (!s) return;

  const tables = editor.querySelectorAll('table');
  if (tables.length === 0) return;

  tables.forEach(table => {
    // 重写table样式
    table.removeAttribute('style');
    table.setAttribute('style', s.table);

    const rows = table.querySelectorAll('tr');
    rows.forEach((row, idx) => {
      // 清除tr样式
      row.removeAttribute('style');

      const isFirstRow = idx === 0;
      const isHeaderRow = window.curTableHasHeader && isFirstRow;
      const isAlt = !isHeaderRow && idx % 2 === 1;

      // 设置行背景色（斑马纹等）
      if (isAlt && s.trAlt) {
        row.setAttribute('style', `background:${s.trAlt};`);
      }

      // 处理th
      row.querySelectorAll('th').forEach(th => {
        th.removeAttribute('style');
        if (isHeaderRow && s.th) {
          th.setAttribute('style', s.th);
        } else if (!isHeaderRow) {
          // 无表头模式下，th转为td的样式
          th.setAttribute('style', s.td);
        }
      });

      // 处理td
      row.querySelectorAll('td').forEach(td => {
        td.removeAttribute('style');
        let tdStyle = s.td || '';
        if (isAlt && s.trAlt) {
          tdStyle += `background:${s.trAlt};`;
        }
        td.setAttribute('style', tdStyle);
      });
    });
  });

  // 触发预览更新
  if (typeof render === 'function') render();
}

/**
 * 将粘贴的表格标准化（确保有正确的th/td结构）
 */
function normalizeTableStructure(tableEl) {
  const hasHeader = window.curTableHasHeader;
  const existingTh = tableEl.querySelector('th');
  const rows = tableEl.querySelectorAll('tr');

  if (rows.length === 0) return;

  if (hasHeader && !existingTh) {
    // 用户想要表头，但表格没有th，把第一行td转为th
    const firstRow = rows[0];
    const cells = firstRow.querySelectorAll('td');
    cells.forEach(td => {
      const th = document.createElement('th');
      th.innerHTML = td.innerHTML;
      // 复制属性
      for (const attr of td.attributes) {
        th.setAttribute(attr.name, attr.value);
      }
      td.replaceWith(th);
    });
  } else if (!hasHeader && existingTh) {
    // 用户不想要表头，但表格有th，把th转为td
    tableEl.querySelectorAll('th').forEach(th => {
      const td = document.createElement('td');
      td.innerHTML = th.innerHTML;
      for (const attr of th.attributes) {
        td.setAttribute(attr.name, attr.value);
      }
      th.replaceWith(td);
    });
  }
}

/**
 * 渲染表格HTML（用于插入新表格）
 */
function renderTableHTML(rows, cols, colors, tplId, hasHeader) {
  const tpl = window.TABLE_TEMPLATES[tplId || window.curTableTpl];
  if (!tpl) return '';

  const s = tpl.render(colors, hasHeader);
  let html = `<table style="${s.table}">`;

  for (let i = 0; i < rows; i++) {
    const isHeaderRow = hasHeader && i === 0;
    const isAlt = !isHeaderRow && i % 2 === 1;
    let trStyle = '';
    if (isAlt && s.trAlt) trStyle = `style="background:${s.trAlt};"`;

    html += `<tr ${trStyle}>`;

    for (let j = 0; j < cols; j++) {
      if (isHeaderRow) {
        html += `<th style="${s.th}">表头${j + 1}</th>`;
      } else {
        let tdStyle = s.td || '';
        if (isAlt && s.trAlt) tdStyle += `background:${s.trAlt};`;
        html += `<td style="${tdStyle}">内容</td>`;
      }
    }
    html += '</tr>';
  }

  html += '</table><p><br></p>';
  return html;
}

/**
 * 解析纯文本中的表格
 */
function parseTextTable(text) {
  const lines = text.trim().split('\n').filter(l => l.trim());
  if (lines.length < 2) return null;

  // 检测制表符分隔
  const tabLines = lines.filter(l => l.includes('\t'));
  if (tabLines.length >= 2 && tabLines.length === lines.length) {
    const rows = tabLines.map(l => l.split('\t'));
    const cols = Math.max(...rows.map(r => r.length));
    return { rows, cols };
  }

  // 检测管道符分隔
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

console.log('[表格样式系统 v2] 已加载，模板数量:', Object.keys(window.TABLE_TEMPLATES).length);
