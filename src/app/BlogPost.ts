import { Comment } from "./Comment";
export class BlogPost{
 _id!: string
 title: string | undefined;
 postDate: string | undefined;
 featuredImage: string | undefined;
 post: string | undefined;
 postedBy: string | undefined;
 comments!: Array<Comment>;
 category: string | undefined;
 tags!: Array<string>;
 isPrivate: Boolean | undefined;
 views: number | undefined;
}
