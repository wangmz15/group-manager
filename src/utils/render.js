import image from './image';
let { textToNode } = require('./emojis');

// 将文本解析为nodes数组
export default async function (content, images) {
    images = images || [];
    let nodes = [];
    for (let line of content.split('\n')) {
        const reg = /\[pic(\d+)\]/g;
        let i = 0;
        let this_node = {
            name: 'div',
            children: []
        }
        while (true) {
            let t = reg.exec(line);
            if (!t) {
                this_node.children.push(await textToNode(line.slice(i)));
                break;
            }
            (i !== t.index) && this_node.children.push({
                type: 'text',
                text: s.slice(i, t.index)
            });
            let pic_no = parseInt(t[1]);
            if (0 <= pic_no && pic_no < images.length) {
                this_node.children.push({
                    name: 'img',
                    attrs: {
                        src: await image.getUrl(images[pic_no]),
                        width: '100%'
                    }
                });
            } else {
                this_node.children.push(await textToNode(t[0]));
            }
            i = t.index + t[0].length;
        }
        nodes.push(this_node);
    }
    return nodes;
}
