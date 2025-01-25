import { getBlogList } from "@/app/_libs/microcms";
import BlogList from "@/app/_components/Bloglist";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export default async function Page() {
    const { contents: blog, totalCount } = await getBlogList ({
        limit: NEWS_LIST_LIMIT,
    });

    return (
        <>
        <SearchField />
        <BlogList blog={blog} />
        <Pagination totalCount={totalCount} /> 
        </>
    );
}