/**
 * 模板包20：设计语言（下）
 * 结构差异化设计
 */

// ── 分割线标题 ──
registerTemplate('split-line', {
  name: '分割线标题',
  desc: '标题文字在两条线中间+对称美感',
  category: 'special',
  contentTip: '文艺、诗歌、正式文章',
  primary: '#7c3aed', bg: '#faf5ff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'SimSun',serif;color:#374151;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:${p};font-weight:700;margin:32px 0 16px;text-align:center;letter-spacing:4px;padding:16px 0;border-top:1px solid ${p}44;border-bottom:1px solid ${p}44;`,
      h2: `font-size:20px;color:${p};font-weight:600;margin:28px 0 14px;text-align:center;letter-spacing:2px;display:flex;align-items:center;gap:16px;`,
      h3: `font-size:16px;color:#4b5563;font-weight:600;margin:24px 0 10px;letter-spacing:1px;`,
      p: `margin:14px 0;font-size:16px;color:#4b5563;line-height:2;text-indent:2em;`,
      quote: `margin:20px 32px;padding:20px 24px;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:15px;line-height:1.8;text-align:center;font-style:italic;`,
      highlight: `background:${p}12;padding:2px 8px;border-radius:4px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:32px 0;display:flex;align-items:center;gap:12px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:20px auto;display:block;border-radius:8px;`,
      num: `color:${p};font-size:24px;font-weight:300;margin-right:12px;font-family:Georgia,'SimSun',serif;`,
      card: `background:#fff;padding:24px;margin:20px 0;border:1px solid #e5e7eb;border-radius:8px;text-align:center;`,
    };
  }
});

// ── 引用马克笔 ──
registerTemplate('marker-quote', {
  name: '引用马克笔',
  desc: '引用块高亮底色+粗边框+手写感排版',
  category: 'special',
  contentTip: '名言、观点、情感文章',
  primary: '#f59e0b', bg: '#fffbeb',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#451a03;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:#92400e;font-weight:800;margin:24px 0 16px;padding:16px 20px;background:${p}22;border-radius:8px;`,
      h2: `font-size:20px;color:#92400e;font-weight:700;margin:28px 0 14px;padding:10px 16px;background:${p}11;border-left:4px solid ${p};border-radius:0 8px 8px 0;`,
      h3: `font-size:16px;color:#b45309;font-weight:700;margin:24px 0 10px;`,
      p: `margin:14px 0;font-size:16px;color:#78350f;line-height:2;`,
      quote: `margin:20px 0;padding:20px 24px;background:${p}33;border:3px solid ${p};border-radius:12px;color:#92400e;font-size:16px;line-height:1.8;font-weight:600;text-align:center;`,
      highlight: `background:${p};color:#fff;padding:2px 10px;font-weight:700;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#fbbf24;font-size:18px;`,
      strong: `color:#b45309;font-weight:800;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:12px;border:3px solid ${p}44;`,
      num: `background:${p};color:#fff;width:26px;height:26px;line-height:26px;text-align:center;font-size:14px;font-weight:800;margin-right:10px;border-radius:50%;display:inline-block;`,
      card: `background:#fff;padding:20px;margin:16px 0;border:2px solid ${p}33;border-radius:12px;box-shadow:0 2px 8px rgba(245,158,11,.1);`,
    };
  }
});

// ── 卡片堆叠 ──
registerTemplate('card-stack', {
  name: '卡片堆叠',
  desc: '每个区块都是独立卡片+阴影层级',
  category: 'special',
  contentTip: '产品对比、功能介绍、清单',
  primary: '#8b5cf6', bg: '#f5f3ff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#1f2937;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:#fff;font-weight:700;margin:24px 0 16px;padding:20px 24px;background:linear-gradient(135deg,#8b5cf6,#a78bfa);border-radius:16px;box-shadow:0 4px 12px rgba(139,92,246,.3);`,
      h2: `font-size:20px;color:${p};font-weight:700;margin:24px 0 14px;padding:16px 20px;background:#fff;border-radius:14px;box-shadow:0 2px 8px rgba(139,92,246,.1);border:1px solid ${p}22;`,
      h3: `font-size:16px;color:#4c1d95;font-weight:700;margin:20px 0 10px;padding:10px 16px;background:${p}08;border-radius:10px;`,
      p: `margin:14px 0;font-size:16px;color:#4b5563;line-height:2;`,
      quote: `margin:18px 0;padding:18px 20px;background:#fff;border-radius:14px;box-shadow:0 2px 8px rgba(139,92,246,.1);color:#6b7280;font-size:15px;line-height:1.8;border-left:4px solid ${p};`,
      highlight: `background:linear-gradient(135deg,${p}22,${p}11);padding:2px 10px;border-radius:8px;font-weight:600;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#c4b5fd;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:14px;box-shadow:0 2px 8px rgba(139,92,246,.15);`,
      num: `background:linear-gradient(135deg,#8b5cf6,#a78bfa);color:#fff;width:26px;height:26px;line-height:26px;text-align:center;font-size:13px;font-weight:700;margin-right:10px;border-radius:8px;display:inline-block;`,
      card: `background:#fff;padding:22px;margin:16px 0;border-radius:14px;box-shadow:0 2px 8px rgba(139,92,246,.1);border:1px solid ${p}15;`,
    };
  }
});

// ── 无衬线极简 ──
registerTemplate('sans-minimal', {
  name: '无衬线极简',
  desc: '纯白底+黑色文字+极简留白',
  category: 'special',
  contentTip: '科技、产品、商业分析',
  primary: '#111827', bg: '#ffffff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#1f2937;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:32px;color:${p};font-weight:800;margin:40px 0 16px;line-height:1.3;letter-spacing:-0.5px;`,
      h2: `font-size:22px;color:${p};font-weight:700;margin:36px 0 14px;padding-bottom:10px;border-bottom:1px solid #e5e7eb;`,
      h3: `font-size:17px;color:#374151;font-weight:600;margin:28px 0 10px;`,
      p: `margin:16px 0;font-size:16px;color:#4b5563;line-height:2;`,
      quote: `margin:20px 0;padding:16px 20px;border-left:2px solid #d1d5db;color:#6b7280;font-size:15px;line-height:1.8;`,
      highlight: `background:#f3f4f6;padding:2px 6px;border-radius:3px;`,
      divider: `text-align:center;margin:32px 0;height:1px;background:#e5e7eb;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:20px auto;display:block;border-radius:8px;`,
      num: `color:#9ca3af;font-size:24px;font-weight:300;margin-right:12px;`,
      card: `background:#f9fafb;padding:24px;margin:20px 0;border:1px solid #e5e7eb;border-radius:8px;`,
    };
  }
});

// ── 渐变胶囊 ──
registerTemplate('grad-capsule', {
  name: '渐变胶囊',
  desc: '所有元素都是渐变胶囊形状',
  category: 'gradient',
  contentTip: '年轻、潮流、社交媒体',
  primary: '#f43f5e', bg: '#fff1f2',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#4c0519;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:26px;font-weight:800;margin:24px 0 16px;display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#f43f5e,#fb7185);color:#fff;border-radius:40px;letter-spacing:2px;`,
      h2: `font-size:18px;font-weight:700;margin:24px 0 12px;display:inline-block;padding:10px 24px;background:linear-gradient(135deg,${p},${p}cc);color:#fff;border-radius:30px;`,
      h3: `font-size:15px;font-weight:600;margin:20px 0 10px;display:inline-block;padding:6px 18px;background:linear-gradient(135deg,${p}22,${p}11);color:${p};border-radius:20px;`,
      p: `margin:14px 0;font-size:16px;color:#881337;line-height:2;`,
      quote: `margin:18px 0;padding:16px 24px;background:#fff;border:2px solid ${p}22;border-radius:20px;color:#9f1239;font-size:15px;line-height:1.8;text-align:center;`,
      highlight: `background:linear-gradient(135deg,${p},${p}cc);color:#fff;padding:3px 12px;border-radius:16px;font-weight:600;`,
      divider: `text-align:center;margin:28px 0;height:3px;background:linear-gradient(90deg,transparent,#f43f5e,#fb7185,transparent);border-radius:2px;`,
      strong: `color:${p};font-weight:800;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:20px;`,
      num: `background:linear-gradient(135deg,#f43f5e,#fb7185);color:#fff;width:28px;height:28px;line-height:28px;text-align:center;font-size:14px;font-weight:800;margin-right:10px;border-radius:50%;display:inline-block;`,
      card: `background:#fff;padding:22px;margin:16px 0;border-radius:20px;border:2px solid ${p}15;`,
    };
  }
});

// ── 工业风 ──
registerTemplate('industrial', {
  name: '工业风',
  desc: '粗边框+等宽字体+硬朗感',
  category: 'special',
  contentTip: '技术、工程、开发者、硬件评测',
  primary: '#dc2626', bg: '#f9fafb',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'Courier New',monospace;color:#1f2937;font-size:15px;line-height:1.9;background:${b};`,
      h1: `font-size:26px;color:${p};font-weight:900;margin:24px 0 16px;padding:16px 20px;border:3px solid ${p};letter-spacing:2px;`,
      h2: `font-size:18px;color:${p};font-weight:700;margin:24px 0 12px;padding:12px 16px;border:2px solid ${p};background:${p}06;`,
      h3: `font-size:15px;color:#374151;font-weight:700;margin:20px 0 10px;padding:8px 12px;border-bottom:2px solid ${p};`,
      p: `margin:14px 0;font-size:15px;color:#4b5563;line-height:1.9;`,
      quote: `margin:18px 0;padding:14px 18px;border:2px dashed ${p}44;background:${p}04;color:#6b7280;font-size:14px;line-height:1.8;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;font-weight:700;`,
      divider: `text-align:center;margin:24px 0;height:2px;background:${p};`,
      strong: `color:${p};font-weight:900;`,
      img: `max-width:100%;margin:16px auto;display:block;border:2px solid #374151;`,
      num: `background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:12px;font-weight:900;margin-right:8px;display:inline-block;`,
      card: `background:#fff;padding:20px;margin:16px 0;border:2px solid #374151;`,
    };
  }
});

// ── 柔和圆角 ──
registerTemplate('soft-round', {
  name: '柔和圆角',
  desc: '超大圆角+柔和阴影+温馨感',
  category: 'special',
  contentTip: '亲子、教育、生活方式、心理',
  primary: '#6366f1', bg: '#eef2ff',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#312e81;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:26px;color:#fff;font-weight:700;margin:24px 0 16px;padding:18px 28px;background:linear-gradient(135deg,#6366f1,#818cf8);border-radius:24px;text-align:center;`,
      h2: `font-size:19px;color:${p};font-weight:700;margin:24px 0 14px;padding:12px 20px;background:#fff;border-radius:20px;box-shadow:0 2px 8px rgba(99,102,241,.1);`,
      h3: `font-size:16px;color:#4338ca;font-weight:600;margin:20px 0 10px;padding:8px 16px;background:${p}08;border-radius:12px;`,
      p: `margin:14px 0;font-size:16px;color:#4338ca;line-height:2;`,
      quote: `margin:18px 0;padding:18px 22px;background:#fff;border-radius:20px;box-shadow:0 2px 8px rgba(99,102,241,.1);color:#6366f1;font-size:15px;line-height:1.8;text-align:center;`,
      highlight: `background:linear-gradient(135deg,${p}22,${p}11);padding:3px 12px;border-radius:12px;font-weight:600;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#c7d2fe;font-size:16px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:20px;`,
      num: `background:linear-gradient(135deg,#6366f1,#818cf8);color:#fff;width:28px;height:28px;line-height:28px;text-align:center;font-size:14px;font-weight:700;margin-right:10px;border-radius:12px;display:inline-block;`,
      card: `background:#fff;padding:22px;margin:16px 0;border-radius:20px;box-shadow:0 2px 12px rgba(99,102,241,.08);`,
    };
  }
});

// ── 条纹背景 ──
registerTemplate('stripe-bg', {
  name: '条纹背景',
  desc: '斜条纹装饰+活力感',
  category: 'special',
  contentTip: '运动、健身、活动、派对',
  primary: '#ea580c', bg: '#fff7ed',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:'PingFang SC','Microsoft YaHei',sans-serif;color:#431407;font-size:16px;line-height:2;background:${b};`,
      h1: `font-size:28px;color:#fff;font-weight:900;margin:24px 0 16px;padding:20px 24px;background:repeating-linear-gradient(45deg,${p},${p} 10px,${p}dd 10px,${p}dd 20px);text-align:center;letter-spacing:2px;`,
      h2: `font-size:20px;color:${p};font-weight:800;margin:24px 0 14px;padding:12px 18px;background:${p}0a;border-left:5px solid ${p};`,
      h3: `font-size:16px;color:#c2410c;font-weight:700;margin:20px 0 10px;padding:8px 14px;background:${p}08;border-radius:6px;`,
      p: `margin:14px 0;font-size:16px;color:#7c2d12;line-height:2;`,
      quote: `margin:18px 0;padding:16px 20px;background:#fff;border-left:4px solid ${p};border-radius:0 12px 12px 0;color:#9a3412;font-size:15px;line-height:1.8;`,
      highlight: `background:${p};color:#fff;padding:2px 10px;font-weight:700;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;height:3px;background:repeating-linear-gradient(90deg,${p},${p} 8px,transparent 8px,transparent 16px);`,
      strong: `color:${p};font-weight:800;`,
      img: `max-width:100%;margin:16px auto;display:block;border-radius:10px;`,
      num: `background:${p};color:#fff;width:26px;height:26px;line-height:26px;text-align:center;font-size:14px;font-weight:800;margin-right:10px;border-radius:6px;display:inline-block;`,
      card: `background:#fff;padding:22px;margin:16px 0;border-radius:12px;border:1px solid ${p}22;box-shadow:0 2px 8px rgba(234,88,12,.08);`,
    };
  }
});
