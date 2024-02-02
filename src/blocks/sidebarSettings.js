import { setSidebarSelectAttribute } from './sidebar/setAttributes';
import { withSidebarSelect } from './sidebar/withSidebarSelect';
import { withSidebarSelectProp } from './sidebar/withSidebarSelectProp';
import { saveSidebarSelectAttribute } from './sidebar/saveAttributes';

/* Add custom attribute to image block, in Sidebar */
const { __ } = wp.i18n;


wp.hooks.addFilter(
    'blocks.registerBlockType',
    'custom-attributes/set-sidebar-select-attribute',
    setSidebarSelectAttribute
);


wp.hooks.addFilter(
    'editor.BlockEdit',
    'custom-attributes/with-sidebar-select',
    withSidebarSelect
);

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'custom-attributes/with-sidebar-select-prop',
    withSidebarSelectProp
);

wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'custom-attributes/save-sidebar-select-attribute',
    saveSidebarSelectAttribute
);