import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';

const fsPromises = fs.promises;
const targetDir = './public/images/posts';
const postsDir = './posts';
const allowedImageExtensionList = ['.png', '.jpg', '.jpeg', '.gif'];

await fsExtra.emptyDir(targetDir);

const createPostImageFoldersForCopy = async () => {
  const postDirent = (
    await fsPromises.readdir(postsDir, { withFileTypes: true })
  ).filter((file) => file.isDirectory());

  for (const dirent of postDirent) {
    const slug = dirent.name;
    const postsDirFiles = await fsPromises.readdir(`${postsDir}/${slug}`);

    const images = postsDirFiles.filter((file) =>
      allowedImageExtensionList.includes(path.extname(file)),
    );

    if (!images.length) {
      continue;
    }

    await fsPromises.mkdir(`${targetDir}/${slug}`);
    await copyImagesToPublic(images, slug);
  }
};

const copyImagesToPublic = async (images, slug) => {
  for (const image of images) {
    await fsPromises.copyFile(
      `${postsDir}/${slug}/${image}`,
      `${targetDir}/${slug}/${image}`,
    );
  }
};

await fsExtra.emptyDir(targetDir);
await createPostImageFoldersForCopy();
