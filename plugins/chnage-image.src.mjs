import { visit } from 'unist-util-visit';

const imgDirInsidePublic = 'images/posts';

export default function transformImgSrc() {
  return (tree, file) => {
    visit(tree, 'paragraph', (node) => {
      const filePath = file.data.rawDocumentData.flattenedPath;
      const image = node.children.find((child) => child.type === 'image');

      if (image) {
        const fileName = image.url.replace('./', '');
        image.url = `/${imgDirInsidePublic}/${filePath}/${fileName}`;
      }
    });
  };
}
