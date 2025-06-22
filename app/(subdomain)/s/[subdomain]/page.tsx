import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import db from '@/db';
import { blogTable } from '@/db/schema';
import { clerkClient } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

interface ParamsProps {
    subdomain: string;
}

export default async function SubDomainPage({
    params,
}: {
    params: Promise<ParamsProps>;
}) {
    const { subdomain } = await params;

    const client = await clerkClient();
    const org = await client.organizations.getOrganization({
        slug: subdomain,
    });
    const orgID = org.id;

    const blogs = await db
        .select()
        .from(blogTable)
        .where(eq(blogTable.orgID, orgID));

    return (
        <div>
            {blogs.map((blog) => (
                <Card key={blog.id}>
                    <CardContent>
                        <CardTitle>{blog.title}</CardTitle>
                        <CardDescription>{blog.body}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
