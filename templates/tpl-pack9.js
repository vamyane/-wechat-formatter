/**
 * 模板包9：边框装饰
 * 分类：border（边框装饰）
 */

// ── 双线边框 ──
registerTemplate('double-frame', {
  name: '双线边框',
  desc: '双线边框装饰，典雅正式',
  category: 'border',
  contentTip: '适合正式公告、声明、重要通知类内容',
  primary: '#333', bg: '#ffffff',
  demo: '<div style="border:3px double #333;padding:4px 10px;font-size:11px;display:inline-block">双线边框</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;border:3px double ${p};padding:12px 24px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;border-bottom:3px double ${p};padding-bottom:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `border:1px double #ccc;padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;`,
      highlight: `background:#f0f0f0;padding:2px 4px;border:1px solid #ddd;`,
      divider: `text-align:center;margin:28px 0;color:#ccc;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:2px solid #ddd;`,
      num: `display:inline-block;border:1px solid ${p};color:${p};width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;font-weight:600;`,
      card: `border:3px double #ccc;padding:24px;margin:16px 0;text-align:center;`,
    };
  }
});

// ── 圆角柔边 ──
registerTemplate('soft-round', {
  name: '圆角柔边',
  desc: '大圆角+柔和阴影，温柔治愈',
  category: 'border',
  contentTip: '适合生活、情感、治愈系内容',
  primary: '#7c4dff', bg: '#faf8ff',
  demo: '<div style="border-radius:16px;border:1px solid #e0d0f0;padding:6px 14px;font-size:11px;display:inline-block;background:#f5f0ff">圆角柔边</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#3a3040;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;background:#f0e8ff;padding:16px;border-radius:20px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:10px 18px;background:#f0e8ff;border-radius:16px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#3a3040;line-height:2;`,
      quote: `background:#f0e8ff;border-left:4px solid ${p};padding:16px 20px;margin:18px 0;color:#5a4a60;font-size:15px;line-height:1.8;border-radius:0 16px 16px 0;`,
      highlight: `background:#e0d0f8;padding:2px 8px;border-radius:10px;`,
      divider: `text-align:center;margin:28px 0;color:#d0c0e0;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:20px;box-shadow:0 4px 16px rgba(124,77,255,.08);`,
      num: `display:inline-block;background:#f0e8ff;color:${p};width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%;font-size:14px;margin-right:8px;font-weight:700;`,
      card: `background:#fff;border:1px solid #e0d0f0;padding:24px;border-radius:20px;text-align:center;margin:16px 0;box-shadow:0 2px 12px rgba(124,77,255,.06);`,
    };
  }
});

// ── 虚线边框 ──
registerTemplate('dashed-frame', {
  name: '虚线边框',
  desc: '虚线边框，手绘感',
  category: 'border',
  contentTip: '适合手绘风、草稿风、趣味内容',
  primary: '#555', bg: '#fffef5',
  demo: '<div style="border:2px dashed #999;padding:4px 10px;font-size:11px;display:inline-block;border-radius:4px">虚线边框</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#444;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:28px 0 14px;line-height:1.5;border:2px dashed #ccc;padding:14px 24px;border-radius:8px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;border-bottom:2px dashed #ccc;padding-bottom:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#444;line-height:2;`,
      quote: `border:2px dashed #ddd;padding:14px 18px;margin:18px 0;color:#666;font-size:15px;line-height:1.8;border-radius:8px;`,
      highlight: `background:#fff3cd;padding:2px 4px;border-bottom:1px dashed ${p};`,
      divider: `text-align:center;margin:28px 0;color:#ccc;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:2px dashed #ddd;border-radius:8px;`,
      num: `display:inline-block;border:1px dashed ${p};color:${p};width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;border-radius:50%;font-weight:600;`,
      card: `border:2px dashed #ddd;padding:24px;margin:16px 0;text-align:center;border-radius:12px;`,
    };
  }
});

// ── 阴影卡片 ──
registerTemplate('shadow-card', {
  name: '阴影卡片',
  desc: '悬浮阴影效果，立体层次',
  category: 'border',
  contentTip: '适合产品介绍、功能说明、列表展示',
  primary: '#4a90d9', bg: '#f5f7fa',
  demo: '<div style="background:#fff;padding:6px 12px;font-size:11px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,.1)">阴影卡片</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:#fff;font-weight:800;margin:28px 0 14px;line-height:1.5;background:${p};padding:18px;border-radius:14px;box-shadow:0 4px 16px ${p}33;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:12px 18px;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.06);`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:0 0 14px;padding:14px 18px;background:#fff;border-radius:10px;font-size:16px;color:#333;line-height:2;box-shadow:0 1px 4px rgba(0,0,0,.04);`,
      quote: `background:#fff;border-left:4px solid ${p};padding:16px 20px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.06);`,
      highlight: `background:${p}15;padding:2px 6px;border-radius:6px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:0 auto 14px;display:block;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,.1);`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:${p};color:#fff;width:28px;height:28px;border-radius:10px;font-size:14px;margin-right:10px;font-weight:700;`,
      card: `background:#fff;padding:24px;border-radius:14px;text-align:center;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,.08);`,
    };
  }
});

// ── 优雅相框 ──
registerTemplate('elegant-frame', {
  name: '优雅相框',
  desc: '古典相框装饰，文艺气质',
  category: 'border',
  contentTip: '适合摄影作品、艺术鉴赏、文学创作',
  primary: '#8b7355', bg: '#faf8f5',
  demo: '<div style="border:2px solid #8b7355;padding:6px 12px;font-size:11px;outline:1px solid #8b7355;outline-offset:3px">优雅相框</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,'Noto Serif SC','SimSun',serif;color:#3a3228;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:28px 0 14px;line-height:1.5;padding:16px 24px;border:2px solid ${p};outline:1px solid ${p};outline-offset:4px;letter-spacing:3px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;text-align:center;border-bottom:1px solid ${p};padding-bottom:10px;letter-spacing:2px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;font-style:italic;`,
      p: `margin:14px 0;font-size:16px;color:#3a3228;line-height:2.2;text-indent:2em;`,
      quote: `margin:20px 24px;padding:16px 20px;border:1px solid ${p}44;color:#6a5a4a;font-size:15px;line-height:1.8;font-style:italic;text-align:center;`,
      highlight: `background:#f0e8d8;padding:2px 4px;`,
      divider: `text-align:center;margin:32px 0;color:#c9b88a;font-size:16px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:18px auto;display:block;border:3px solid #e0d5c5;padding:4px;background:#fff;`,
      num: `color:${p};font-size:20px;font-weight:700;margin-right:6px;font-style:italic;`,
      card: `border:2px solid ${p}44;padding:24px;margin:20px 0;text-align:center;background:#fff;`,
    };
  }
});

// ── 胶带风格 ──
registerTemplate('tape-style', {
  name: '胶带风格',
  desc: '胶带+纸张感，趣味手工',
  category: 'border',
  contentTip: '适合手工、DIY、趣味教程类内容',
  primary: '#e67e22', bg: '#fdf6ec',
  demo: '<div style="background:#ffe0a0;padding:3px 20px;font-size:11px;transform:rotate(-2deg);display:inline-block">📎 胶带风</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#4a3a2a;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:32px 0 14px;line-height:1.5;background:#ffe0a0;padding:8px 24px;transform:rotate(-1deg);`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 16px;background:#ffe0a0;transform:rotate(0.5deg);display:inline-block;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#4a3a2a;line-height:2;`,
      quote: `background:#fff;border:1px dashed #ccc;padding:14px 18px;margin:18px 0;color:#666;font-size:15px;line-height:1.8;transform:rotate(-0.5deg);`,
      highlight: `background:#ffe0a0;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#d4c0a0;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border:3px solid #e8dcc8;padding:4px;background:#fff;transform:rotate(0.5deg);`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #e8dcc8;padding:24px;margin:16px 0;text-align:center;transform:rotate(-0.5deg);`,
    };
  }
});
