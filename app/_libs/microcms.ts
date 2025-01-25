import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type About = {
  title: string;
  explanation: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;
  
if(!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getAboutList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<About>({
      endpoint: "about",
      queries,
    });
    return listData;
};

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client
  .getList<Blog>({
    endpoint: "blog",
    queries,
  });
  return listData;
};

export const getBlogDetail = async(
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData =await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId,
    queries,
  });
  return detailData;
};





