/**
 * 模板：杂志风
 * 风格：衬线字体+粗分割线，适合深度长文
 */
registerTemplate('magazine', {
  name: '杂志风',
  desc: '衬线字体+粗分割线，适合深度长文',
  primary: '#111111',
  bg: '#ffffff',
  demo: '<b style="font-size:15px;font-family:serif;border-bottom:2px solid #000;padding-bottom:3px;display:inline-block">章节标题</b>',
  render(c) {
    const p = c.primary, b = c.bg;
    return {
      body: `font-family:Georgia,"Noto Serif SC","STSong",serif;color:#111;font-size:16px;line-height:2.2;background:${b};`,
      h1: `text-align:center;font-size:26px;color:${p};font-weight:900;margin:30px 0 12px;line-height:1.4;letter-spacing:3px;font-family:-apple-system,'PingFang SC',sans-serif;`,
      h2: `font-size:20px;color:${p};margin:40px 0 14px;font-weight:800;line-height:1.4;font-family:-apple-system,'PingFang SC',sans-serif;border-bottom:3px solid ${p};padding-bottom:8px;`,
      h3: `font-size:17px;color:${p};margin:28px 0 10px;font-weight:700;font-family:-apple-system,'PingFang SC',sans-serif;letter-spacing:1px;`,
      p: `margin:14px 0;font-size:16px;color:#111;line-height:2.2;text-indent:2em;`,
      quote: `border-left:3px solid ${p};padding:10px 20px;margin:20px 0;color:#555;font-size:15px;line-height:1.8;font-style:italic;`,
      highlight: `background:${p};color:#fff;padding:2px 6px;`,
      divider: `text-align:center;margin:36px 0;color:${p};letter-spacing:15px;font-size:18px;`,
      strong: `color:${p};font-weight:800;`,
      img: `max-width:100%;margin:20px auto;display:block;`,
      num: `font-family:Georgia,serif;font-size:28px;color:${p};font-weight:900;margin-right:6px;font-style:italic;`,
      card: `border-top:3px solid ${p};border-bottom:3px solid ${p};padding:24px;margin:24px 0;text-align:center;`,
      ul: "margin:14px 0;padding-left:24px;list-style:disc;",
      ol: "margin:14px 0;padding-left:24px;list-style:decimal;",
      li: "margin:6px 0;font-size:16px;line-height:2;color:inherit;",
    };
  }
});
