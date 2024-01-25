"use client";
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./post.css";
import { useGetPosts } from "~/queries";
import Link from "next/link";
import { LINK } from "~/lib/constants";
export default function Post() {
  const { data: posts } = useGetPosts();
  console.log(posts);

  return posts?.data?.length ? (
    <div className="container">
      <div className="row justify-content-center p-0 ">
        {posts?.data?.map((post) => {
          console.log(post);

          return (
            <div className="card text-start col-3 m-3 cursor-pointer">
              <Link href={`${LINK.POST_DETAIL}/${post.id}`}>
                <img
                  className="card-img-top"
                  src={post?.images[0]?.url}
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title">{post?.title?.slice(0, 80)}...</h4>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <h5 className="text-center mt-5">Hiện tại chưa có bài viết nào</h5>
  );
}
