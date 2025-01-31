import { Metadata } from 'next';

export const baseMetadata: Metadata = {
    title: "Ingrasp - Training Images for L&D Teams",
    description: "Consistent Characters for Your Training Programs",
    openGraph: {
        title: "Ingrasp",
        description: "Consistent Characters for Your Training Programs",
        images: [
            {
                url: '/meta-images/facebook.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Ingrasp",
        description: "Consistent Characters for Your Training Programs",
        images: [
            '/meta-images/twitter.png',
        ],
    },
}