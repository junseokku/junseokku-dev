import { myInfo } from 'app/constants/myInfo';

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4">
      <hr className="border-1 border-gray-200 dark:border-gray-800" />
      <p className="text-center text-xs text-gray-400">
        <span>© 2024</span>
        <a
          href={myInfo.repoUrl}
          target="_black"
          rel="noopener noreferrer"
          className="text-textColor"
        >{` Junseokku Blog `}</a>
        <span>Powered by Next.js</span>
      </p>
    </footer>
  );
};
