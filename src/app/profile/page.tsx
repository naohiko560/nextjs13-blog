import '../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/dist/client/link';

// グーグルフォームの出力
const ProfilePage = () => {
  return (
    <>
      <div className="max-w-3xl mt-9">
        <div className="flex items-center space-x-5">
          <div className="image">
            <Link href="/">
              <Image
                alt="プロフィール"
                src="/profile.jpg"
                width={80}
                height={80}
                className="mx-auto rounded-full"
              />
            </Link>
          </div>
          <div>
            <h2 className="text-lg font-bold">なおひこ</h2>
            <p className="text-sm tracking-wide mt-1">@遅咲きITエンジニア</p>
          </div>
        </div>
        <div className="">
          <dl className="mt-8">
            <div className="py-8 grid-cols-1 grid md:grid-cols-3 md:gap-4 border-t border-gray-700">
              <dt className="font-bold">経歴</dt>
              <dd className="md:col-span-2 sm:mt-1 md:mt-0">
                <p>
                  新卒から製造業などに従事するもモヤモヤした日々を過ごす（14年）
                </p>
                <p className="ml-1">↓</p>
                <p>
                  3ヶ月プログラミング学習後、Web制作フリーランスに転身（37歳）
                </p>
                <p className="ml-1">↓</p>
                <p>会社員に転向後、アプリ開発など経験</p>
              </dd>
            </div>
            <div className="py-8 grid-cols-1 grid md:grid-cols-3 md:gap-4 border-t border-gray-700">
              <dt className="font-bold">アカウント</dt>
              <dd className="md:col-span-2 sm:mt-1 md:mt-0">
                <ul className="">
                  <li className="">
                    <a
                      href="https://twitter.com/naohiko_blog"
                      className="no-underline md:hover:underline md:hover:text-blue-400 text-blue-500 font-bold"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      href="https://github.com/naohiko560"
                      className="no-underline md:hover:underline md:hover:text-blue-400 text-blue-500 font-bold"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </dd>
            </div>
            {/* <div className="py-4 grid-cols-1 grid md:grid-cols-3 md:gap-4 md:py-5 border-t border-gray-700">
              <dt className="font-bold">過去の制作物</dt>
              <dd className="md:col-span-2 sm:mt-1 md:mt-0">
                <ul>
                  <li>
                    <p>WordPressで制作したポートフォリオサイト</p>
                  </li>
                  <li>Next.jsで制作した当ブログ</li>
                </ul>
              </dd>
            </div> */}
            <div className="pt-8 grid-cols-1 grid md:grid-cols-3 md:gap-4 border-t border-gray-700">
              <dt className="font-bold">当サイトのコンセプト</dt>
              <dd className="md:col-span-2 sm:mt-1 md:mt-0">
                プログラミングの学習方法や経験の中で得た知見、便利ツールなどを中心に発信するテックブログです。
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
