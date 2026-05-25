/**
 * 模板：现代几何
 * 风格：圆角+渐变+阴影，适合商业/品牌
 */
registerTemplate('modern', {
  name: '现代几何',
  desc: '圆角渐变阴影，适合商业/品牌',
  primary: '#3b82f6',
  bg: '#ffffff',
  demo: '<div style="background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;padding:4px 12px;border-radius:20px;font-size:11px;display:inline-block">胶囊标签</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#1f2937;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:#fff;background:linear-gradient(135deg,${p},${p}cc);margin:24px 0 16px;padding:16px 24px;border-radius:16px;line-height:1.5;font-weight:800;`,
      h2: `font-size:17px;color:#fff;background:${p};margin:32px 0 14px;padding:10px 18px;border-radius:24px;line-height:1.5;font-weight:700;display:inline-block;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#1f2937;line-height:2;`,
      quote: `background:${p}0a;border-radius:12px;padding:16px 20px;margin:18px 0;color:#4b5563;font-size:15px;line-height:1.8;`,
      highlight: `background:${p};color:#fff;padding:2px 8px;border-radius:12px;font-weight:600;font-size:14px;`,
      divider: `text-align:center;margin:28px 0;color:#e5e7eb;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;border-radius:14px;margin:14px auto;display:block;box-shadow:0 4px 16px rgba(0,0,0,.1);`,
      num: `display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,${p},${p}cc);color:#fff;width:28px;height:28px;border-radius:10px;font-size:14px;margin-right:10px;font-weight:700;`,
      card: `background:linear-gradient(135deg,${p}0a,${p}05);border:1px solid ${p}22;padding:24px;border-radius:16px;text-align:center;margin:16px 0;`,
    };
  }
});
