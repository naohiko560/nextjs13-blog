import fs from 'fs'; //ファイルシステム
import matter from 'gray-matter';
import { PostMetadata } from '@/components/PostMetadata';

// slugを取得する処理
const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/'; // 投稿ファイルが入っているフォルダを指定
  const files = fs.readdirSync(folder); // フォルダの中身をfiles変数に代入
  const markdownPosts = files.filter((file) => file.endsWith('.md')); // .md ファイルを選択

  // gray-matterでそれぞれの投稿データからグレイマターのデータを取得
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8'); // それぞれのファイルコンテンツを取得
    const matterResult = matter(fileContents); // gray-matterでファイル内の文字列を取得
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default getPostMetadata;
