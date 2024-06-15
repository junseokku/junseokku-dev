import { myInfo } from 'app/constants/myInfo';

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4">
      <hr className="border-1 border-borderColor" />
      <p className="text-center text-xs text-textGrayColor">
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
