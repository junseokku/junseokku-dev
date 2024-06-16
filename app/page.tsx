import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { myInfo } from './constants/myInfo';

const EXTERNAL_LINKS = [
  // TODO - Email, Portfolio
  { link: myInfo.social.github, icon: GitHubLogoIcon },
  { link: myInfo.social.linkedin, icon: LinkedInLogoIcon },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      {/* 프로필 영역 */}
      <h3 className="text-4xl font-black">{myInfo.nickname}</h3>
      <div className="flex flex-row gap-3">
        {EXTERNAL_LINKS.map(({ link, icon: Icon }) => (
          <a key={link} href={link} target="_blank" rel="noreferrer noopener">
            <Icon width={18} height={18} />
          </a>
        ))}
      </div>
      {/* TODO 미리캔버스 공유 뷰어 */}
      {/* 설명 영역 */}
      <p className="prose prose-neutral dark:prose-invert max-w-full">
        <span className="block">{myInfo.blog.description}</span>
      </p>
      {/* 최근 포스팅 영역 */}
    </main>
  );
}
