'use server';

import db from '@/db';
import { blogTable, CreateBlogType } from '@/db/schema';

export async function createBlog(payload: CreateBlogType) {
    const [result] = await db.insert(blogTable).values(payload).returning({
        id: blogTable.id,
    });
    return result.id;
}
