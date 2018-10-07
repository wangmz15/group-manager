import image from './image';

// 定义表情和图片的对应关系
const emojis = {
  '[微笑]': '100',
  '[撇嘴]': '101',
  '[色]': '102',
  '[发呆]': '103',
  '[得意]': '104',
  '[流泪]': '105',
  '[害羞]': '106',
  '[闭嘴]': '107',
  '[睡]': '108',
  '[大哭]': '109',
  '[尴尬]': '110',
  '[发怒]': '111',
  '[调皮]': '112',
  '[呲牙]': '113',
  '[惊讶]': '114',
  '[难过]': '115',
  '[酷]': '116',
  '[冷汗]': '117',
  '[抓狂]': '118',
  '[吐]': '119',
  '[偷笑]': '120',
}

// 将表情文字转为图片
const emojiToPath = async (i) => {
  return await image.getUrl(`emojis/${emojis[i]}.gif`);
}

// 返回rich-text格式的Node
const textToNode = async (s) => {
  // 定义正则对象
  const r = /\[[^\[\]]+?\]/g;

  const a = {
    name: 'p',
    children: []
  };
  let t = null; // 是否匹配到表情符号
  let i = 0; // 下次匹配的序号

  while (true) {
    // 正则实例对象的exec方法，用来返回匹配结果。
    // 如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null。
    t = r.exec(s);

    if (!t) {
      // 如果匹配不成功，
      // 且序号i至结尾字符不为空，为空则忽略
      // 添加文字类型到数组a，并退出循环
      s.slice(i) && a.children.push({
        type: 'text',
        text: s.slice(i)
      });
      break; // 退出循环
    }

    // 匹配到了，
    // 且 本次匹配的起始序号 与 表情符号第一个字符序号不等
    // 如果相等，则说明表情前面是一个空字符串，需要忽略
    (i !== t.index) && a.children.push({
      type: 'text',
      text: s.slice(i, t.index)
    });

    // 匹配了类似[*]的表情符号
    // 还需要判断是否定义了此表情的图片
    if (emojis[t[0]]) {
      // 定义了表情图片，添加表情类型到数组a
      a.children.push({
        name: 'img',
        attrs: {
          src: await emojiToPath(t[0]),
          height: '20px',
          width: '20px',
          alt: t[0]
        }
      });
    } else {
      // 此表情没有图片与之对应，当做文字类型添加到数组a
      a.children.push({
        type: 'text',
        text: t[0]
      });
    }

    i = t.index + t[0].length; // 更新下一次匹配开始的序号
  }

  return a;
}

module.exports = {
  emojis,
  emojiToPath,
  textToNode
}

