"use client";
import { useEffect, useState } from "react";
import InlineLink from "../components/InlineLink/InlineLink";
import MyLogo from "../components/MyLogo/MyLogo";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-24 items-center justify-center">
      <div className="flex flex-col gap-12 w-96">
        <div className="flex items-center gap-12">
          <div>{isMounted && <MyLogo />}</div>
          <h1>Muhammad Ammar</h1>
        </div>

        <p>
          I am Ammar. 25y. Software Engineer, focused on the Frontend. Working
          at a{" "}
          <InlineLink href="https://www.ycombinator.com/">
            YC Tech Startup W23
          </InlineLink>
          . Currently in stealth mode. Passionate about writing efficient,
          readable, and well-structured code. Currently working with a
          high-performing team with a hyper-bias for action. I aim to lead any
          organization I work for to greater heights. I play Diablo 4 and World
          of Warcraft. Also, I am into sketching. Leave a message, let's talk.
        </p>
      </div>
    </div>
  );
}
