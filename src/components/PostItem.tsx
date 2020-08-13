import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <Date dateString={post.date} />
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #111;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}