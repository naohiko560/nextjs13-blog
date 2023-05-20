'use client';

import '../styles/burger.css';
import '../styles/globals.css';
import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import Link from 'next/dist/client/link';

class Burger extends React.Component {
  showSettings(event: any) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="md:hidden">
        <Menu right customCrossIcon={<img src="images/cross.png" />}>
          <Link id="home" className="" href="/">
            トップ
          </Link>
          <Link id="profile" className="" href="/profile">
            プロフィール
          </Link>
          <Link id="contact" className="" href="/contact">
            お問い合わせ
          </Link>
          <Link
            id="twitter"
            className=""
            href="https://twitter.com/naohiko_blog"
            target="_blank"
            rel="noopener nofollow"
          >
            Twitter
          </Link>
          <Link
            id="github"
            className=""
            href="https://github.com/naohiko560"
            target="_blank"
            rel="noopener nofollow"
          >
            GitHub
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Burger;
