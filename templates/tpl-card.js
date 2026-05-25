/**
 * 模板：卡片式
 * 风格：每个段落都像一张卡片，层次分明
 */
registerTemplate('card', {
  name: '卡片式',
  desc: '段落独立成卡片，层次分明',
  primary: '#6366f1',
  bg: '#f5f5f5',
  demo: '<div style="background:#fff;padding:8px;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);font-size:11px">卡片内容</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:#1a1a1a;font-weight:800;margin:24px 0 12px;line-height:1.5;`,
      h2: `font-size:18px;color:#fff;background:linear-gradient(135deg,${p},${p}cc);margin:28px 0 0;padding:12px 18px;border-radius:10px 10px 0 0;line-height:1.5;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:0;padding:10px 18px;background:#fff;border-left:3px solid ${p};border-radius:0 0 10px 10px;font-weight:700;box-shadow:0 2px 8px rgba(0,0,0,.06);`,
      p: `margin:0 0 16px;padding:14px 18px;background:#fff;border-radius:8px;font-size:15px;color:#444;line-height:1.9;box-shadow:0 1px 4px rgba(0,0,0,.05);`,
      quote: `margin:0 0 16px;padding:14px 18px;background:#fff;border-left:4px solid ${p};border-radius:0 8px 8px 0;color:#555;font-size:15px;line-height:1.8;box-shadow:0 1px 4px rgba(0,0,0,.05);`,
      highlight: `background:${p}15;padding:2px 6px;border-radius:3px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:24px 0;color:#ccc;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;border-radius:10px;margin:0 auto 16px;display:block;box-shadow:0 2px 8px rgba(0,0,0,.1);`,
      num: `display:inline-block;background:${p};color:#fff;width:26px;height:26px;line-height:26px;text-align:center;border-radius:8px;font-size:13px;margin-right:10px;font-weight:700;`,
      card: `background:#fff;padding:20px;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.08);text-align:center;margin:16px 0;`,
    };
  }
});
