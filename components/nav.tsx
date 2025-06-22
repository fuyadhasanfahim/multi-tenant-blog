'use client';

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

export default function Navbar() {
    return (
        <nav className="p-4 flex items-center justify-between w-full max-w-7xl mx-auto">
            <div>
                <h1 className="font-semibold text-2xl">Multi Tenant Blog</h1>
            </div>
            <div className="flex items-center gap-3">
                <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
                <UserButton />
            </div>
        </nav>
    );
}
