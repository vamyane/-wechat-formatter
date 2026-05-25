/**
 * 模板包5：浅色精选（上）
 * 分类：light（浅色系）
 */

// ── 纯净白 ──
registerTemplate('pure-white', {
  name: '纯净白',
  desc: '纯白背景+极细灰线，万能百搭',
  category: 'light',
  contentTip: '通用型，适合表格、图文、数据展示等各类内容',
  primary: '#333333', bg: '#ffffff',
  demo: '<div style="font-size:12px;color:#333;border-bottom:1px solid #eee;padding-bottom:3px">纯净白模板</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;letter-spacing:2px;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;border-bottom:1px solid #eee;padding-bottom:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `border-left:3px solid #ddd;padding:14px 18px;margin:18px 0;color:#666;font-size:15px;line-height:1.8;background:#fafafa;`,
      highlight: `background:#fff3cd;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;`,
      num: `display:inline-block;background:#f0f0f0;color:${p};width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;font-weight:600;`,
      card: `background:#fafafa;border:1px solid #eee;padding:24px;border-radius:8px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 浅灰素雅 ──
registerTemplate('light-gray', {
  name: '浅灰素雅',
  desc: '灰色调为主，低调内敛',
  category: 'light',
  contentTip: '适合正式文档、报告、商务分析类内容',
  primary: '#555555', bg: '#f9f9f9',
  demo: '<div style="font-size:12px;color:#555;background:#eee;padding:3px 10px;border-radius:4px">浅灰素雅</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#444;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:700;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding-left:14px;border-left:4px solid #ccc;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:600;`,
      p: `margin:14px 0;font-size:16px;color:#444;line-height:2;`,
      quote: `background:#f0f0f0;border-left:3px solid #bbb;padding:14px 18px;margin:18px 0;color:#666;font-size:15px;line-height:1.8;`,
      highlight: `background:#e8e8e8;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#ccc;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;`,
      num: `display:inline-block;background:#ddd;color:#555;width:24px;height:24px;line-height:24px;text-align:center;border-radius:4px;font-size:13px;margin-right:8px;font-weight:600;`,
      card: `background:#fff;border:1px solid #e0e0e0;padding:24px;border-radius:6px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 奶油暖调 ──
registerTemplate('cream', {
  name: '奶油暖调',
  desc: '温暖米色调，柔和舒适',
  category: 'light',
  contentTip: '适合生活、美食、家居、情感类内容',
  primary: '#a0784c', bg: '#fef9f0',
  demo: '<div style="font-size:12px;color:#a0784c;background:#fef9f0;border:1px solid #e8d5b8;padding:3px 10px;border-radius:6px">奶油暖调</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#5a4a3a;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;text-align:center;letter-spacing:2px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#5a4a3a;line-height:2;`,
      quote: `background:#fdf3e0;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#7a6a5a;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:#f5e6c8;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#d4c0a0;font-size:14px;letter-spacing:8px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:10px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #e8d5b8;padding:24px;border-radius:12px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 冰蓝清爽 ──
registerTemplate('ice-blue', {
  name: '冰蓝清爽',
  desc: '冰蓝色调，清爽通透',
  category: 'light',
  contentTip: '适合科技、产品评测、教程类内容',
  primary: '#2196F3', bg: '#f5f9ff',
  demo: '<div style="font-size:12px;color:#2196F3;font-weight:700">❄️ 冰蓝清爽</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;padding:8px 16px;background:${p}08;border-radius:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:#e3f2fd;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:0 8px 8px 0;`,
      highlight: `background:#bbdefb;padding:2px 4px;`,
      divider: `text-align:center;margin:28px 0;color:#90caf9;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:10px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #bbdefb;padding:24px;border-radius:12px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 薰衣草紫 ──
registerTemplate('lavender', {
  name: '薰衣草紫',
  desc: '柔和紫色调，优雅浪漫',
  category: 'light',
  contentTip: '适合情感、旅行、文艺类内容',
  primary: '#7c4dff', bg: '#f8f5ff',
  demo: '<div style="font-size:12px;color:#7c4dff;font-weight:700">💜 薰衣草</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:28px 0 14px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 12px;font-weight:700;line-height:1.5;text-align:center;border-bottom:2px solid ${p}33;padding-bottom:8px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:#ede7f6;border-left:3px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:0 10px 10px 0;`,
      highlight: `background:#d1c4e9;padding:2px 6px;border-radius:4px;`,
      divider: `text-align:center;margin:28px 0;color:#b39ddb;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:12px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#fff;border:1px solid #d1c4e9;padding:24px;border-radius:14px;text-align:center;margin:16px 0;`,
    };
  }
});
