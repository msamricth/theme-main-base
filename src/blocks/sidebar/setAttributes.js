// setAttributes.js
import { enableSidebarSelectOnBlocks } from './blockList';


export const setSidebarSelectAttribute = (settings, name) => {
    if (!enableSidebarSelectOnBlocks.includes(name)) {
        return settings;
    }
    return Object.assign({}, settings, {
        attributes: Object.assign({}, settings.attributes, {
            matchNavBackground: { type: 'boolean' },
            fullWidth: { type: 'boolean' },
            fullHeight: { type: 'boolean' },
            hideMobile: { type: 'boolean' },
            hideTablet: { type: 'boolean' },
            hideDesktop: { type: 'boolean' },
            seperatorTop: { type: 'boolean' },
            seperatorBottom: { type: 'boolean' },
            blockAnimation: { type: 'string' },
            animationDelay: { type: 'string' },
            topPadding: { type: 'string' },
            bottomPadding: { type: 'string' },
            topMargin: { type: 'string' },
            bottomMargin: { type: 'string' },
            backgroundImage: { type: 'string' }, // Added line for background image
        }),
    });
};