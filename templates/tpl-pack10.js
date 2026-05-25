/**
 * 模板包10：色块强调
 * 分类：block（色块强调）
 */

// ── 橙色色块 ──
registerTemplate('orange-block', {
  name: '橙色色块',
  desc: '活力橙色色块标题，醒目有力',
  category: 'block',
  contentTip: '适合活动推广、产品发布、热点资讯',
  primary: '#ff6d00', bg: '#ffffff',
  demo: '<div style="background:#ff6d00;color:#fff;padding:4px 14px;font-size:12px;font-weight:700;display:inline-block">橙色色块</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:#fff;background:${p};display:inline-block;padding:8px 28px;margin:24px auto 14px;line-height:1.5;font-weight:800;letter-spacing:2px;`,
      h2: `font-size:18px;color:#fff;background:${p};display:inline-block;padding:6px 18px;margin:32px 0 14px;line-height:1.5;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;border-bottom:2px solid ${p};padding-bottom:6px;display:inline-block;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:${p}0a;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}18;padding:2px 6px;font-weight:600;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:6px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;font-weight:700;border-radius:4px;`,
      card: `background:${p}08;border:1px solid ${p}22;padding:24px;border-radius:8px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 青色色块 ──
registerTemplate('teal-block', {
  name: '青色色块',
  desc: '青色色块，专业冷静',
  category: 'block',
  contentTip: '适合科技、医疗、健康类内容',
  primary: '#00897b', bg: '#ffffff',
  demo: '<div style="background:#00897b;color:#fff;padding:4px 14px;font-size:12px;font-weight:700;display:inline-block">青色色块</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:#fff;background:${p};display:inline-block;padding:8px 28px;margin:24px auto 14px;line-height:1.5;font-weight:800;letter-spacing:2px;`,
      h2: `font-size:18px;color:#fff;background:${p};display:inline-block;padding:6px 18px;margin:32px 0 14px;line-height:1.5;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;border-bottom:2px solid ${p};padding-bottom:6px;display:inline-block;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:${p}08;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}15;padding:2px 6px;font-weight:600;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:6px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;font-weight:700;border-radius:4px;`,
      card: `background:${p}06;border:1px solid ${p}22;padding:24px;border-radius:8px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 紫色色块 ──
registerTemplate('purple-block', {
  name: '紫色色块',
  desc: '紫色色块，创意时尚',
  category: 'block',
  contentTip: '适合创意、设计、艺术类内容',
  primary: '#7b1fa2', bg: '#ffffff',
  demo: '<div style="background:#7b1fa2;color:#fff;padding:4px 14px;font-size:12px;font-weight:700;display:inline-block">紫色色块</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:#fff;background:${p};display:inline-block;padding:8px 28px;margin:24px auto 14px;line-height:1.5;font-weight:800;letter-spacing:2px;`,
      h2: `font-size:18px;color:#fff;background:${p};display:inline-block;padding:6px 18px;margin:32px 0 14px;line-height:1.5;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;border-bottom:2px solid ${p};padding-bottom:6px;display:inline-block;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:${p}06;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}15;padding:2px 6px;font-weight:600;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:6px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;font-weight:700;border-radius:4px;`,
      card: `background:${p}06;border:1px solid ${p}15;padding:24px;border-radius:8px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 绿色色块 ──
registerTemplate('green-block', {
  name: '绿色色块',
  desc: '绿色色块，清新活力',
  category: 'block',
  contentTip: '适合环保、健康、生活类内容',
  primary: '#2e7d32', bg: '#ffffff',
  demo: '<div style="background:#2e7d32;color:#fff;padding:4px 14px;font-size:12px;font-weight:700;display:inline-block">绿色色块</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:#fff;background:${p};display:inline-block;padding:8px 28px;margin:24px auto 14px;line-height:1.5;font-weight:800;letter-spacing:2px;`,
      h2: `font-size:18px;color:#fff;background:${p};display:inline-block;padding:6px 18px;margin:32px 0 14px;line-height:1.5;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;border-bottom:2px solid ${p};padding-bottom:6px;display:inline-block;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:${p}08;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}15;padding:2px 6px;font-weight:600;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:6px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;font-weight:700;border-radius:4px;`,
      card: `background:${p}06;border:1px solid ${p}15;padding:24px;border-radius:8px;text-align:center;margin:16px 0;`,
    };
  }
});

// ── 蓝色色块 ──
registerTemplate('blue-block', {
  name: '蓝色色块',
  desc: '蓝色色块，稳重可信赖',
  category: 'block',
  contentTip: '适合商务、金融、正式报告类内容',
  primary: '#1565c0', bg: '#ffffff',
  demo: '<div style="background:#1565c0;color:#fff;padding:4px 14px;font-size:12px;font-weight:700;display:inline-block">蓝色色块</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:#fff;background:${p};display:inline-block;padding:8px 28px;margin:24px auto 14px;line-height:1.5;font-weight:800;letter-spacing:2px;`,
      h2: `font-size:18px;color:#fff;background:${p};display:inline-block;padding:6px 18px;margin:32px 0 14px;line-height:1.5;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;border-bottom:2px solid ${p};padding-bottom:6px;display:inline-block;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:${p}06;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#555;font-size:15px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}12;padding:2px 6px;font-weight:600;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:6px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;font-size:13px;margin-right:8px;font-weight:700;border-radius:4px;`,
      card: `background:${p}06;border:1px solid ${p}15;padding:24px;border-radius:8px;text-align:center;margin:16px 0;`,
    };
  }
});
