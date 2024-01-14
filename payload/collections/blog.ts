import { slateEditor } from '@payloadcms/richtext-slate';
import { CollectionConfig } from 'payload/types';

export const Blogs: CollectionConfig = {
    slug: 'blogs',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'content',
            type: 'richText',
            editor: slateEditor({
                admin: {
                    elements: [
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'indent',
                        'link',
                        'blockquote',
                        'ol',
                        'ul',
                        'textAlign',
                    ],
                },
            }),
        },
    ],
};
