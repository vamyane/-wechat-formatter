/**
 * 模板包19：经典设计语言
 * 每个模板引用真实设计体系，结构完全不同
 */

// ═══ Material Design 风格 ═══

// ── Material 卡片 ──
registerTemplate('material-card', {
  name: 'Material 卡片',
  desc: 'Google MD 风格：阴影层级+圆角卡片+色块标题',
  category: 'special',
  contentTip: '产品介绍、App说明、科技评测',
  primary: '#6200ee', bg: '#f5f5f5',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#212121;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:#fff;font-weight:500;margin:24px 0 16px;padding:20px 24px;background:${p};border-radius:12px;box-shadow:0 2px 4px rgba(0,0,0,.2);`,
      h2: `font-size:20px;color:${p};font-weight:500;margin:28px 0 14px;padding:16px 20px;background:#fff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-left:4px solid ${p};`,
      h3: `font-size:16px;color:#424242;font-weight:500;margin:20px 0 10px;padding:8px 0;border-bottom:1px solid #e0e0e0;`,
      p: `margin:14px 0;font-size:16px;color:#424242;line-height:2;`,
      quote: `margin:18px 0;padding:16px 20px;background:${p}08;border-radius:12px;border:none;color:#616161;font-size:15px;line-height:1.8;box-shadow:0 1px 3px rgba(0,0,0,.1);`,
      highlight: `background:${p};color:#fff;padding:2px 8px;border-radius:4px;font-weight:500;`,
      divider: `text-align:center;margin:28px 0;color:#bdbdbd;font-size:16px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.2);`,
      num: `background:${p};color:#fff;width:28px;height:28px;line-height:28px;text-align:center;font-size:14px;font-weight:500;margin-right:10px;border-radius:50%;display:inline-block;box-shadow:0 2px 4px rgba(0,0,0,.2);`,
      card: `background:#fff;padding:24px;margin:16px 0;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── Material 扁平 ──
registerTemplate('material-flat', {
  name: 'Material 扁平',
  desc: 'MD 扁平风格：色块标签+分割线+强调色',
  category: 'special',
  contentTip: '教程、指南、操作步骤',
  primary: '#00897b', bg: '#fafafa',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#37474f;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:#fff;font-weight:500;margin:24px 0 16px;padding:18px 24px;background:${p};letter-spacing:1px;`,
      h2: `font-size:18px;color:${p};font-weight:500;margin:28px 0 12px;display:inline-block;padding:6px 16px;background:${p}12;border-radius:4px;letter-spacing:1px;`,
      h3: `font-size:16px;color:#455a64;font-weight:500;margin:24px 0 10px;padding-left:12px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#546e7a;line-height:2;`,
      quote: `margin:18px 0;padding:12px 16px;background:${p}08;border-left:3px solid ${p};color:#607d8b;font-size:15px;line-height:1.8;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;font-weight:500;`,
      divider: `text-align:center;margin:28px 0;height:1px;background:#e0e0e0;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;`,
      num: `background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;font-weight:500;margin-right:8px;display:inline-block;`,
      card: `background:#fff;padding:20px;margin:16px 0;border:1px solid #e0e0e0;border-radius:4px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ═══ Apple 风格 ═══

// ── Apple 极简 ──
registerTemplate('apple-clean', {
  name: 'Apple 极简',
  desc: '苹果风格：大留白+SF字体感+精致线条',
  category: 'special',
  contentTip: '产品发布、品牌故事、高端介绍',
  primary: '#1d1d1f', bg: '#ffffff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#1d1d1f;font-size:17px;line-height:1.8;background:${b};`,
      h1: `font-size:40px;color:${p};font-weight:700;margin:48px 0 16px;text-align:center;letter-spacing:-1px;line-height:1.2;`,
      h2: `font-size:28px;color:${p};font-weight:700;margin:40px 0 16px;text-align:center;letter-spacing:-0.5px;`,
      h3: `font-size:20px;color:${p};font-weight:600;margin:28px 0 12px;`,
      p: `margin:16px 0;font-size:17px;color:#1d1d1f;line-height:1.8;`,
      quote: `margin:24px 0;padding:20px 0;text-align:center;color:#86868b;font-size:18px;line-height:1.6;font-style:italic;`,
      highlight: `background:#f5f5f7;padding:2px 8px;border-radius:4px;`,
      divider: `text-align:center;margin:40px 0;color:#d2d2d7;font-size:20px;`,
      strong: `color:${p};font-weight:600;`,
      img: `max-width:100%;margin:24px auto;display:block;border-radius:16px;`,
      num: `color:#86868b;font-size:28px;font-weight:300;margin-right:16px;`,
      card: `padding:32px;margin:24px 0;background:#f5f5f7;border-radius:20px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── Apple 深色 ──
registerTemplate('apple-dark', {
  name: 'Apple 深色',
  desc: '苹果深色模式：纯黑底+白字+精致排版',
  category: 'dark',
  contentTip: '产品发布、科技新闻、高端品牌',
  primary: '#f5f5f7', bg: '#000000',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#f5f5f7;font-size:17px;line-height:1.8;background:${b};`,
      h1: `font-size:40px;color:${p};font-weight:700;margin:48px 0 16px;text-align:center;letter-spacing:-1px;line-height:1.2;`,
      h2: `font-size:28px;color:${p};font-weight:700;margin:40px 0 16px;text-align:center;`,
      h3: `font-size:20px;color:#a1a1a6;margin:28px 0 12px;font-weight:600;`,
      p: `margin:16px 0;font-size:17px;color:#d2d2d7;line-height:1.8;`,
      quote: `margin:24px 0;padding:20px 0;text-align:center;color:#86868b;font-size:18px;line-height:1.6;font-style:italic;`,
      highlight: `background:#1d1d1f;padding:2px 8px;border-radius:4px;color:#f5f5f7;`,
      divider: `text-align:center;margin:40px 0;color:#333;font-size:20px;`,
      strong: `color:${p};font-weight:600;`,
      img: `max-width:100%;margin:24px auto;display:block;border-radius:16px;`,
      num: `color:#86868b;font-size:28px;font-weight:300;margin-right:16px;`,
      card: `padding:32px;margin:24px 0;background:#1d1d1f;border-radius:20px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ═══ 装饰型标题 ═══

// ── 胶囊标签 ──
registerTemplate('capsule-tag', {
  name: '胶囊标签',
  desc: '所有标题都是彩色胶囊形状+渐变',
  category: 'gradient',
  contentTip: '教程、清单、分类内容',
  primary: '#7c3aed', bg: '#faf5ff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#374151;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:24px;font-weight:700;margin:24px 0 16px;display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#7c3aed,#a78bfa);color:#fff;border-radius:40px;letter-spacing:2px;`,
      h2: `font-size:18px;font-weight:700;margin:24px 0 12px;display:inline-block;padding:8px 22px;background:linear-gradient(135deg,${p},${p}cc);color:#fff;border-radius:30px;`,
      h3: `font-size:15px;font-weight:600;margin:20px 0 10px;display:inline-block;padding:5px 16px;background:${p}12;color:${p};border-radius:20px;`,
      p: `margin:14px 0;font-size:16px;color:#4b5563;line-height:2;`,
      quote: `margin:18px 0;padding:16px 20px;background:#fff;border:2px solid ${p}22;border-radius:16px;color:#6b7280;font-size:15px;line-height:1.8;`,
      highlight: `background:linear-gradient(135deg,${p}22,${p}11);padding:2px 10px;border-radius:12px;font-weight:600;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#d4d4d8;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:16px;`,
      num: `background:linear-gradient(135deg,${p},${p}cc);color:#fff;width:26px;height:26px;line-height:26px;text-align:center;font-size:13px;font-weight:700;margin-right:10px;border-radius:50%;display:inline-block;`,
      card: `background:#fff;padding:20px;margin:16px 0;border-radius:16px;border:2px solid ${p}15;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 左侧彩条 ──
registerTemplate('left-bar', {
  name: '左侧彩条',
  desc: '所有标题和卡片都有粗彩色左边框',
  category: 'special',
  contentTip: '新闻、观点、深度分析',
  primary: '#dc2626', bg: '#ffffff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#1f2937;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:${p};font-weight:800;margin:28px 0 16px;padding:16px 20px;border-left:6px solid ${p};background:${p}06;`,
      h2: `font-size:20px;color:#1f2937;font-weight:700;margin:28px 0 14px;padding:14px 18px;border-left:5px solid ${p};background:#f9fafb;`,
      h3: `font-size:16px;color:${p};font-weight:700;margin:24px 0 10px;padding-left:14px;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#374151;line-height:2;`,
      quote: `margin:18px 0;padding:16px 20px;border-left:4px solid ${p};background:#fef2f2;color:#6b7280;font-size:15px;line-height:1.8;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;font-weight:600;`,
      divider: `text-align:center;margin:28px 0;height:2px;background:linear-gradient(90deg,${p}44,transparent);`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:8px;`,
      num: `background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;font-weight:700;margin-right:10px;border-radius:4px;display:inline-block;`,
      card: `background:#fff;padding:20px;margin:16px 0;border-left:5px solid ${p};border-radius:0 8px 8px 0;box-shadow:0 1px 3px rgba(0,0,0,.1);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 双线边框 ──
registerTemplate('double-border', {
  name: '双线边框',
  desc: '标题双线装饰+报纸排版感',
  category: 'special',
  contentTip: '正式文档、报告、学术文章',
  primary: '#1e40af', bg: '#f8fafc',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'SimSun',serif;color:#1e293b;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:${p};font-weight:800;margin:28px 0 16px;padding:16px 0;text-align:center;border-top:3px double ${p};border-bottom:3px double ${p};letter-spacing:2px;`,
      h2: `font-size:20px;color:${p};font-weight:700;margin:28px 0 14px;padding:12px 0;border-bottom:2px double ${p};`,
      h3: `font-size:17px;color:#334155;font-weight:700;margin:24px 0 10px;padding-left:12px;border-left:3px double ${p};`,
      p: `margin:14px 0;font-size:16px;color:#334155;line-height:2;text-indent:2em;`,
      quote: `margin:18px 24px;padding:16px 20px;border-top:1px solid #cbd5e1;border-bottom:1px solid #cbd5e1;color:#64748b;font-size:15px;line-height:1.8;text-align:center;font-style:italic;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;`,
      divider: `text-align:center;margin:28px 0;color:#cbd5e1;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border:1px solid #e2e8f0;`,
      num: `font-family:Georgia,'SimSun',serif;color:${p};font-size:22px;font-weight:700;margin-right:10px;`,
      card: `background:#fff;padding:24px;margin:16px 0;border:2px double ${p}33;border-radius:4px;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 底部渐变线 ──
registerTemplate('gradient-underline', {
  name: '底部渐变线',
  desc: '标题底部彩虹渐变线+现代感',
  category: 'gradient',
  contentTip: '设计、创意、艺术、时尚',
  primary: '#ec4899', bg: '#ffffff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#374151;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:30px;color:#1f2937;font-weight:800;margin:32px 0 16px;padding-bottom:14px;border-bottom:3px solid;background-image:linear-gradient(90deg,#ec4899,#8b5cf6,#3b82f6,#06b6d4);background-position:bottom;background-size:100% 3px;background-repeat:no-repeat;`,
      h2: `font-size:22px;color:#1f2937;font-weight:700;margin:28px 0 14px;padding-bottom:10px;border-bottom:2px solid;background-image:linear-gradient(90deg,${p},#8b5cf6);background-position:bottom;background-size:100% 2px;background-repeat:no-repeat;`,
      h3: `font-size:17px;color:${p};font-weight:700;margin:24px 0 10px;padding-bottom:6px;border-bottom:1px solid;background-image:linear-gradient(90deg,${p},${p}88);background-position:bottom;background-size:100% 1px;background-repeat:no-repeat;`,
      p: `margin:14px 0;font-size:16px;color:#4b5563;line-height:2;`,
      quote: `margin:18px 0;padding:16px 20px;background:#fdf2f8;border-radius:12px;color:#6b7280;font-size:15px;line-height:1.8;border-left:3px solid ${p};`,
      highlight: `background:linear-gradient(90deg,#ec489922,#8b5cf622);padding:2px 8px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;height:2px;background:linear-gradient(90deg,transparent,#ec4899,#8b5cf6,#3b82f6,transparent);`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:12px;`,
      num: `background:linear-gradient(135deg,#ec4899,#8b5cf6);color:#fff;width:26px;height:26px;line-height:26px;text-align:center;font-size:13px;font-weight:700;margin-right:10px;border-radius:50%;display:inline-block;`,
      card: `background:#fff;padding:24px;margin:16px 0;border-radius:12px;border:1px solid #e5e7eb;box-shadow:0 1px 3px rgba(0,0,0,.1);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 圆角徽章 ──
registerTemplate('badge-style', {
  name: '圆角徽章',
  desc: '标题带数字徽章+圆角卡片',
  category: 'special',
  contentTip: '步骤教程、排行榜、清单',
  primary: '#059669', bg: '#f0fdf4',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#1f2937;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:26px;color:#fff;font-weight:700;margin:24px 0 16px;padding:18px 24px;background:${p};border-radius:16px;`,
      h2: `font-size:18px;color:${p};font-weight:700;margin:24px 0 12px;display:flex;align-items:center;gap:10px;`,
      h3: `font-size:16px;color:#374151;font-weight:700;margin:20px 0 10px;padding:8px 16px;background:${p}08;border-radius:8px;border:1px solid ${p}15;`,
      p: `margin:14px 0;font-size:16px;color:#4b5563;line-height:2;`,
      quote: `margin:18px 0;padding:16px 20px;background:#ecfdf5;border-left:4px solid ${p};border-radius:0 12px 12px 0;color:#6b7280;font-size:15px;line-height:1.8;`,
      highlight: `background:${p};color:#fff;padding:3px 10px;border-radius:20px;font-weight:600;font-size:14px;`,
      divider: `text-align:center;margin:28px 0;color:#a7f3d0;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:12px;`,
      num: `background:${p};color:#fff;width:28px;height:28px;line-height:28px;text-align:center;font-size:14px;font-weight:700;margin-right:10px;border-radius:8px;display:inline-block;`,
      card: `background:#fff;padding:22px;margin:16px 0;border-radius:16px;border:1px solid #d1fae5;box-shadow:0 2px 8px rgba(5,150,105,.06);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 暗角卡片 ──
registerTemplate('vignette-card', {
  name: '暗角卡片',
  desc: '深色卡片+高亮标题+内阴影',
  category: 'dark',
  contentTip: '游戏、电竞、夜生活、派对',
  primary: '#f59e0b', bg: '#1c1917',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#d6d3d1;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:${p};font-weight:800;margin:24px 0 16px;padding:20px;background:#292524;border-radius:12px;text-align:center;border:1px solid #44403c;letter-spacing:2px;`,
      h2: `font-size:20px;color:${p};font-weight:700;margin:24px 0 14px;padding:14px 18px;background:#292524;border-radius:10px;border:1px solid #44403c;border-left:4px solid ${p};`,
      h3: `font-size:16px;color:#fbbf24;font-weight:600;margin:20px 0 10px;padding:8px 14px;background:#29252466;border-radius:6px;`,
      p: `margin:14px 0;font-size:16px;color:#a8a29e;line-height:2;`,
      quote: `margin:18px 0;padding:16px 20px;background:#292524;border-left:3px solid ${p};border-radius:0 8px 8px 0;color:#a8a29e;font-size:15px;line-height:1.8;`,
      highlight: `background:${p};color:#1c1917;padding:2px 8px;font-weight:700;border-radius:4px;`,
      divider: `text-align:center;margin:24px 0;height:1px;background:linear-gradient(90deg,transparent,#44403c,transparent);`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:8px;border:1px solid #44403c;`,
      num: `background:${p};color:#1c1917;width:26px;height:26px;line-height:26px;text-align:center;font-size:14px;font-weight:800;margin-right:10px;border-radius:6px;display:inline-block;`,
      card: `background:#292524;padding:22px;margin:16px 0;border-radius:12px;border:1px solid #44403c;box-shadow:inset 0 2px 4px rgba(0,0,0,.3);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});

// ── 网格底纹 ──
registerTemplate('grid-pattern', {
  name: '网格底纹',
  desc: '科技蓝+网格背景+数据感',
  category: 'special',
  contentTip: '技术文档、数据报告、产品分析',
  primary: '#2563eb', bg: '#f8fafc',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#1e293b;font-size:16px;line-height:2;background:${b};background-image:linear-gradient(#e2e8f0 1px,transparent 1px),linear-gradient(90deg,#e2e8f0 1px,transparent 1px);background-size:24px 24px;`,
      h1: `font-size:28px;color:#fff;font-weight:800;margin:24px 0 16px;padding:20px 24px;background:linear-gradient(135deg,${p},${p}cc);border-radius:8px;`,
      h2: `font-size:20px;color:${p};font-weight:700;margin:28px 0 14px;padding:12px 18px;background:#fff;border:2px solid ${p}33;border-radius:8px;`,
      h3: `font-size:16px;color:#334155;font-weight:700;margin:24px 0 10px;padding:8px 12px;background:${p}08;border-left:3px solid ${p};`,
      p: `margin:14px 0;font-size:16px;color:#475569;line-height:2;`,
      quote: `margin:18px 0;padding:16px 20px;background:#eff6ff;border-left:3px solid ${p};border-radius:0 8px 8px 0;color:#64748b;font-size:15px;line-height:1.8;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;border-radius:4px;font-weight:600;`,
      divider: `text-align:center;margin:28px 0;height:2px;background:linear-gradient(90deg,transparent,${p}44,transparent);`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:8px;`,
      num: `background:${p};color:#fff;width:26px;height:26px;line-height:26px;text-align:center;font-size:13px;font-weight:700;margin-right:10px;border-radius:6px;display:inline-block;`,
      card: `background:#fff;padding:22px;margin:16px 0;border:2px solid ${p}22;border-radius:10px;box-shadow:0 2px 8px rgba(37,99,235,.08);`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
