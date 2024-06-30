import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';

const fsPromises = fs.promises;
/** 이미지를 복사할 위치 */
const targetDir = './public/images/posts';
/** 게시글이 있는 위치 */
const postsDir = './posts';
/** 허용하는 이미지 확장자 리스트  */
const allowedImageExtensionList = ['.png', '.jpg', '.jpeg', '.gif'];

const createPostImageFoldersForCopy = async () => {
  /** 모든 게시글 폴더 */
  const postDirentList = (
    await fsPromises.readdir(postsDir, { withFileTypes: true })
  ).filter((file) => file.isDirectory());

  for (const dirent of postDirentList) {
    const slug = dirent.name;
    /** 게시글 폴더에 존재하는 파일 */
    const postsDirFiles = await fsPromises.readdir(`${postsDir}/${slug}`);

    /** 게시글 폴더에 존재하는 이미지 */
    const images = postsDirFiles.filter((file) =>
      allowedImageExtensionList.includes(path.extname(file)),
    );

    if (!images.length) {
      continue;
    }

    /** 게시글 폴더 만들고 복사 */
    await fsPromises.mkdir(`${targetDir}/${slug}`);
    await copyImagesToPublic(images, slug);
  }
};

const copyImagesToPublic = async (images, slug) => {
  for (const image of images) {
    const sourcePath = `${postsDir}/${slug}/${image}`;
    const targetPath = `${targetDir}/${slug}/${image}`;

    await fsPromises.copyFile(sourcePath, targetPath);
  }
};

// 대상 폴더가 없으면 폴더를 생성합니다. 폴더에 무언가 존재한다면 모두 비워줍니다.
await fsExtra.emptyDir(targetDir);
await createPostImageFoldersForCopy();
