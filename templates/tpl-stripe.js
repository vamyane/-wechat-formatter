/**
 * 模板：色块条纹
 * 风格：标题带色块背景条，视觉冲击力强
 */
registerTemplate('stripe', {
  name: '色块条纹',
  desc: '标题带色块背景条，视觉冲击力强',
  primary: '#e74c3c',
  bg: '#ffffff',
  demo: '<div style="background:#e74c3c;color:#fff;padding:4px 12px;display:inline-block;font-size:13px;font-weight:700">色块标题</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#333;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:24px;color:#fff;background:${p};display:inline-block;padding:6px 24px;margin:24px auto 12px;line-height:1.5;font-weight:800;letter-spacing:2px;`,
      h2: `font-size:18px;color:#fff;background:${p};display:inline-block;padding:4px 16px;margin:32px 0 14px;line-height:1.6;font-weight:700;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;border-bottom:2px solid ${p};padding-bottom:6px;display:inline-block;`,
      p: `margin:14px 0;font-size:16px;color:#333;line-height:2;`,
      quote: `background:${p}11;border-left:4px solid ${p};padding:14px 18px;margin:18px 0;color:#444;font-size:15px;line-height:1.8;border-radius:0 6px 6px 0;`,
      highlight: `background:${p}18;padding:2px 6px;font-weight:600;color:${p};`,
      divider: `text-align:center;margin:28px 0;color:#ddd;font-size:14px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;margin:14px auto;display:block;border-radius:4px;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:4px;font-size:13px;margin-right:8px;font-weight:700;`,
      card: `background:${p}0a;border:1px solid ${p}33;padding:24px;border-radius:8px;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
