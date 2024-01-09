wp.domReady( () => {
    wp.blocks.unregisterBlockType( 'core/columns');
    wp.blocks.unregisterBlockType( 'core/group');
    wp.blocks.unregisterBlockType( 'core/column');
});