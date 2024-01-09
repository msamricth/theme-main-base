import { enableSidebarSelectOnBlocks } from './blockList';

/* Add custom attribute to image block, in Sidebar */
const { __ } = wp.i18n;



const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody } = wp.components;

import classnames from 'classnames'

/**
 * Declare our custom attribute
 */
const setSidebarSelectAttribute = (settings, name) => {
    // Do nothing if it's another block than our defined ones.
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
            blockAnimation: {
                type: 'string',
            },
            topPadding: {
                type: 'string',
            },
            bottomPadding: {
                type: 'string',
            },
            topMargin: {
                type: 'string',
            },
            bottomMargin: {
                type: 'string',
            }
        }),
    });
};
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'custom-attributes/set-sidebar-select-attribute',
    setSidebarSelectAttribute
);


const withSidebarSelect = createHigherOrderComponent((BlockEdit) => {
    return (props) => {

        // If current block is not allowed
        if (!enableSidebarSelectOnBlocks.includes(props.name)) {
            return (
                <BlockEdit {...props} />
            );
        }

        const { attributes, setAttributes, isSelected } = props;
        const { matchNavBackground, blockAnimation, fullHeight, fullWidth, hideMobile, hideTablet, hideDesktop, topPadding, bottomPadding, topMargin, bottomMargin } = attributes;
        const { ToggleControl, RadioControl, CheckboxControl, SelectControl } = wp.components;
        const { InspectorAdvancedControls } = wp.blockEditor;
        function onChangeBlockAnimation(newValue) {
            setAttributes({ blockAnimation: newValue });
        }
        function onChangeTopPadding(newValue) {
            setAttributes({ topPadding: newValue });
        }
        function onChangeBottomPadding(newValue) {
            setAttributes({ bottomPadding: newValue });
        }
        function onChangeTopMargin(newValue) {
            setAttributes({ topMargin: newValue });
        }
        function onChangeBottomMargin(newValue) {
            setAttributes({ bottomMargin: newValue });
        }
        return (

            <Fragment>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody
                        title={__('Theme Main Base')}
                    >
                        <PanelBody title={__('Block Settings')}>
                            <ToggleControl
                                label={wp.i18n.__('Match Nav Background on scroll', 'emm-bootstrap-base')}
                                checked={!!attributes.matchNavBackground}
                                onChange={(newval) => setAttributes({ matchNavBackground: !attributes.matchNavBackground })}
                            />

                            <ToggleControl
                                label={wp.i18n.__('Make Full Width', 'emm-bootstrap-base')}
                                help="Make this block go edge to edge (good for Background colors)"
                                checked={!!attributes.fullWidth}
                                onChange={(newval) => setAttributes({ fullWidth: !attributes.fullWidth })}
                            />
                            <ToggleControl
                                label={wp.i18n.__('Make Full Height', 'emm-bootstrap-base')}
                                help="Make this block go edge to edge (good for Background colors)"
                                checked={!!attributes.fullHeight}
                                onChange={(newval) => setAttributes({ fullHeight: !attributes.fullHeight })}
                            />

                            <SelectControl
                                label="Animate this block"
                                value={blockAnimation}
                                options={[
                                    { label: 'No Animation', value: '' },
                                    { label: 'Fade In', value: 'fade-in' },
                                    { label: 'Slide Up', value: 'slide-up' },
                                    { label: 'Bounce In', value: 'bounce-in' },
                                ]}
                                onChange={onChangeBlockAnimation}
                            />

                        </PanelBody>

                        <PanelBody title={__('Spacing')}>


                            <SelectControl
                                label="Padding Top"
                                value={topPadding}
                                options={[
                                    { label: 'None', value: '' },
                                    { label: 'Smallest', value: 'pt-1' },
                                    { label: 'Small', value: 'pt-2' },
                                    { label: 'Medium', value: 'pt-3' },
                                    { label: 'Large', value: 'pt-4' },
                                    { label: 'Largest', value: 'pt-5' },
                                ]}
                                onChange={onChangeTopPadding}
                            />                      
                        <SelectControl
                            label="Padding Bottom"
                            value={bottomPadding}
                            options={[
                                { label: 'None', value: '' },
                                { label: 'Smallest', value: 'pb-1' },
                                { label: 'Small', value: 'pb-2' },
                                { label: 'Medium', value: 'pb-3' },
                                { label: 'Large', value: 'pb-4' },
                                { label: 'Largest', value: 'pb-5' },
                            ]}
                            onChange={onChangeBottomPadding}
                        />
                    <SelectControl
                        label="Margin Top"
                        value={topMargin}
                        options={[
                            { label: 'None', value: '' },
                            { label: 'Smallest', value: 'mt-1' },
                            { label: 'Small', value: 'mt-2' },
                            { label: 'Medium', value: 'mt-3' },
                            { label: 'Large', value: 'mt-4' },
                            { label: 'Largest', value: 'mt-5' },
                        ]}
                        onChange={onChangeTopMargin}
                    />
                    <SelectControl
                        label="Margin Bottom"
                        value={bottomMargin}
                        options={[
                            { label: 'None', value: '' },
                            { label: 'Smallest', value: 'mb-1' },
                            { label: 'Small', value: 'mb-2' },
                            { label: 'Medium', value: 'mb-3' },
                            { label: 'Large', value: 'mb-4' },
                            { label: 'Largest', value: 'mb-5' },
                        ]}
                        onChange={onChangeBottomMargin}
                    />
                </PanelBody>
                <PanelBody title={__('Visibility')}>
                    <ToggleControl
                        label={wp.i18n.__('Hide on Mobile', 'emm-bootstrap-base')}
                        checked={!!attributes.hideMobile}
                        onChange={(newval) => setAttributes({ hideMobile: !attributes.hideMobile })}
                    />
                    <ToggleControl
                        label={wp.i18n.__('Hide on Tablet', 'emm-bootstrap-base')}
                        checked={!!attributes.hideTablet}
                        onChange={(newval) => setAttributes({ hideTablet: !attributes.hideTablet })}
                    />
                    <ToggleControl
                        label={wp.i18n.__('Hide on Desktop', 'emm-bootstrap-base')}
                        checked={!!attributes.hideDesktop}
                        onChange={(newval) => setAttributes({ hideDesktop: !attributes.hideDesktop })}
                    />
                </PanelBody>

            </PanelBody>
                </InspectorControls >
            </Fragment >
        );
    };
}, 'withSidebarSelect');

wp.hooks.addFilter(
    'editor.BlockEdit',
    'custom-attributes/with-sidebar-select',
    withSidebarSelect
);


/**
 * Add custom class to block in Edit
 */
const withSidebarSelectProp = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {

        console.log({ props });
        let classes,
            addClasses;
        // If current block is not allowed
        if (!enableSidebarSelectOnBlocks.includes(props.name)) {
            return (
                <BlockListBlock {...props} />
            );
        }
        let foldBackgroundColor = props.attributes.backgroundColor;
        if (foldBackgroundColor) { foldBackgroundColor = foldBackgroundColor.toString(); }
        const { attributes } = props;
        const { matchNavBackground, blockAnimation, fullHeight, fullWidth, hideMobile, hideTablet, hideDesktop, topPadding, bottomPadding, topMargin, bottomMargin } = attributes;
        if (matchNavBackground) {
            classes = classes + ' fold';
            addClasses = 1;
            if (foldBackgroundColor) {
                classes = classes + ' fold_' + foldBackgroundColor;
            }
        }
        if (blockAnimation) {
            classes = classes + '  animation-on ' + blockAnimation;
            addClasses = 1;
        }
        if (fullHeight) { classes = classes + ' full-height'; }
        if (fullWidth) { classes = classes + ' full-width'; }
        if (hideMobile) { classes = classes + ' d-none'; }
        if (hideTablet) { classes = classes + ' d-inherit d-md-none d-xl-inherit'; }
        if (hideDesktop) { classes = classes + ' d-xl-none'; }
        
        if(topPadding) {classes = classes + ' ' + topPadding;}
        if(bottomPadding) {classes = classes + ' ' + bottomPadding;}
        if(topMargin) {classes = classes + ' ' + topMargin;}
        if(bottomMargin) {classes = classes + ' ' + bottomMargin;}
        if (addClasses) {
            return <BlockListBlock {...props} className={classes} data-class={foldBackgroundColor} />
        } else {
            return <BlockListBlock {...props} />
        }
    };
}, 'withSidebarSelectProp');

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'custom-attributes/with-sidebar-select-prop',
    withSidebarSelectProp
);


/**
 * Save our custom attribute
 */
const saveSidebarSelectAttribute = (extraProps, blockType, attributes) => {
    // Do nothing if it's another block than our defined ones.

    if (enableSidebarSelectOnBlocks.includes(blockType.name)) {
        
        let foldBackgroundColor = attributes.backgroundColor;
        //foldBackgroundColor = foldBackgroundColor.toString();

        let classes,
            addClasses;
        const { matchNavBackground, blockAnimation, fullHeight, fullWidth, hideMobile, hideTablet, hideDesktop, topPadding, bottomPadding, topMargin, bottomMargin } = attributes;


		const {
			content,
			checkboxField,
			radioField,
			textField,
			toggleField,
			selectField,
		} = attributes;
		//const blockProps = useBlockProps.save();


        if (matchNavBackground) {
            classes = classes + ' fold';
            addClasses = 1;
            if (foldBackgroundColor) {
                classes = classes + ' fold_' + foldBackgroundColor;
            }
        }
        if (blockAnimation) {
            classes = classes + '  animation-on ' + blockAnimation;
            addClasses = 1;
        }
        if (fullHeight) { classes = classes + ' full-height'; }
        if (fullWidth) { classes = classes + ' full-width'; }
        if (hideMobile) { classes = classes + ' d-none'; }
        if (hideTablet) { classes = classes + ' d-inherit d-md-none d-xl-inherit'; }
        if (hideDesktop) { classes = classes + ' d-xl-none'; }
        if(topPadding) {classes = classes + ' ' + topPadding;}
        if(bottomPadding) {classes = classes + ' ' + bottomPadding;}
        if(topMargin) {classes = classes + ' ' + topMargin;}
        if(bottomMargin) {classes = classes + ' ' + bottomMargin;}
        
        if (addClasses) {
            extraProps.className = classnames(extraProps.className, classes);
            //console.log(attributes);
        }
    }

    return extraProps;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'custom-attributes/save-sidebar-select-attribute',
    saveSidebarSelectAttribute
);