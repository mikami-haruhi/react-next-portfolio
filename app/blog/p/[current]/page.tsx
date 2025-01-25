import { notFound } from "next/navigation";
import { getBlogList } from "@/app/_libs/microcms";
import BlogList from "@/app/_components/Bloglist";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
        current: string;
    };
};

export default async function Page({params}: Props) {
    const current =parseInt(params.current, 10);
    
    if (Number.isNaN(current) || current < 1) {
        notFound();
    }
    const { contents: blog, totalCount } = await getBlogList({
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (current - 1),
    });

    if (blog.length === 0) {
        notFound();
    }

   return (
        <>
        <BlogList blog={blog} />
        <Pagination totalCount={totalCount} current={current} /> 
        </>
    );
}