"use client";

import MailingList from '@/components/mailinglist/productheadsignup';

export function MailingSection() {
    return (
        <div className="flex flex-col py-6">
            <span className="block font-medium">Product Head</span>
            <span className="block text-gray-1100">A monthly newsletter where I share my personal learnings & experiences together with links to anything I find interesting or helpful. I don&apos;t share this stuff anywhere else but in this newsletter.</span>
            <MailingList />
        </div>
    );
}
