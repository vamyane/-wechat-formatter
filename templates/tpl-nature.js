/**
 * 模板：自然有机
 * 风格：圆润+大地色，适合生活方式/自然
 */
registerTemplate('nature', {
  name: '自然有机',
  desc: '圆润大地色，适合生活方式/自然',
  primary: '#2d6a4f',
  bg: '#f8f9f0',
  demo: '<div style="color:#2d6a4f;font-size:13px;border-bottom:2px dashed #2d6a4f;padding-bottom:3px;display:inline-block">自然风格</div>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#2d3436;font-size:16px;line-height:2;background:${b};`,
      h1: `text-align:center;font-size:22px;color:${p};font-weight:800;margin:24px 0 12px;line-height:1.5;`,
      h2: `font-size:18px;color:${p};margin:36px 0 14px;text-align:center;line-height:1.6;font-weight:700;border-bottom:2px dashed ${p}44;padding-bottom:10px;`,
      h3: `font-size:16px;color:${p};margin:24px 0 10px;font-weight:700;`,
      p: `margin:14px 0;font-size:16px;color:#2d3436;line-height:2;`,
      quote: `background:#eef2e6;border-radius:12px;padding:16px 20px;margin:18px 0;color:#4a6741;font-size:15px;line-height:1.8;border-left:4px solid ${p};`,
      highlight: `background:#d4edda;padding:2px 6px;border-radius:4px;color:${p};font-weight:600;`,
      divider: `text-align:center;margin:28px 0;color:#b5c4a8;font-size:14px;letter-spacing:6px;`,
      strong: `color:${p};font-weight:700;`,
      img: `max-width:100%;border-radius:16px;margin:14px auto;display:block;`,
      num: `display:inline-block;background:${p};color:#fff;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;font-size:13px;margin-right:8px;`,
      card: `background:#eef2e6;border:1px solid #d4e0c8;padding:24px;border-radius:16px;text-align:center;margin:16px 0;`,
    };
  }
});
