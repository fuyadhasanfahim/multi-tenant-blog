'use client';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { createBlog } from './actions';
import { useOrganization } from '@clerk/nextjs';

export default function OegLandingPage() {
    const selectedOrg = useOrganization();

    const [blogTitle, setBlogTitle] = React.useState('');
    const [blogContent, setBlogContent] = React.useState('');

    const handleCreateBlog = async () => {
        if (!selectedOrg.organization?.id) return;

        await createBlog({
            body: blogContent,
            title: blogTitle,
            orgID: selectedOrg.organization?.id,
        });
    };

    return (
        <section className="p-10">
            <div className="space-y-3">
                <Input
                    placeholder="Enter your blog title"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                />
                <Textarea
                    placeholder="Enter your blog content here..."
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                />
                <Button onClick={handleCreateBlog}>
                    <PlusIcon /> Blog
                </Button>
            </div>
        </section>
    );
}
