"use client";

import Link from "next/link";
import React from "react";

interface NavItem {
    label: string;
    href: string;
}

interface NavColumnProps {
    items: NavItem[];
    className?: string;
}

const NavColumn: React.FC<NavColumnProps> = ({ items, className = "" }) => {
    return (
        <div
            className={`flex flex-col gap-2 border-l-2 border-white/50 pl-4 group hover:border-orange-300 transition-all duration-500 ease-in-out ${className}`}
        >
            {items.map((item, idx) => (
                <Link
                    key={idx}
                    href={item.href}
                    className="text-xl font-medium text-white/70 group-hover:text-white/20 hover:text-orange-300 hover:translate-x-1 transition-all duration-500 ease-in-out"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

interface MultiColumnNavProps {
    leftItems: NavItem[];
    middleItems: NavItem[];
    rightItems: NavItem[];
}

const MultiColumnNav: React.FC<MultiColumnNavProps> = ({
    leftItems,
    middleItems,
    rightItems,
}) => {
    return (
        <div className="flex h-max w-full justify-around items-start gap-10">
            <NavColumn items={leftItems} />
            <NavColumn items={middleItems} />
            <NavColumn items={rightItems} />
        </div>
    );
};

export default MultiColumnNav;
