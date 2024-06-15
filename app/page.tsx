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
        <span className="block">
          개발자로서 공부하고 일하며 얻은 지식과 경험을 기록하는 블로그입니다.
          성장하기 위해 꾸준하고 틈틈이 글을 작성하려고 노력하고 있습니다.
        </span>
      </p>
      {/* 최근 포스팅 영역 */}
    </main>
  );
}
