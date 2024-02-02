// withSidebarSelect.js
import { enableSidebarSelectOnBlocks } from './blockList';
import { setSidebarSelectAttribute } from './setAttributes';

const { __ } = wp.i18n;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, InspectorAdvancedControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { ToggleControl, PanelBody, TextControl, RadioControl, CheckboxControl, SelectControl, Button } = wp.components;

export const withSidebarSelect = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (!enableSidebarSelectOnBlocks.includes(props.name)) {
            return <BlockEdit {...props} />;
        }

        const { attributes, setAttributes, isSelected } = props;
        const { matchNavBackground, blockAnimation, fullHeight, fullWidth, hideMobile, hideTablet, hideDesktop, topPadding, bottomPadding, topMargin, bottomMargin, backgroundImage, seperatorTop, seperatorBottom } = attributes;

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
        // Add new function for changing background image
        function onChangeBackgroundImage(newImage) {
            setAttributes({ backgroundImage: newImage.sizes.full.url });
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
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onChangeBackgroundImage}
                                    allowedTypes={['image']}
                                    value={backgroundImage}
                                    render={({ open }) => (
                                        <Button className="components-button is-primary" onClick={open}>Add Background image to block</Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        </PanelBody>

                        <PanelBody title={__('Spacing')}>
                            <ToggleControl
                                label={wp.i18n.__('Seperator Top', 'emm-bootstrap-base')}
                                help="Add a seperator line to the top of this block"
                                checked={!!attributes.seperatorTop}
                                onChange={(newval) => setAttributes({ seperatorTop: !attributes.seperatorTop })}
                            />

                            <ToggleControl
                                label={wp.i18n.__('Seperator Bottom', 'emm-bootstrap-base')}
                                help="Add a seperator line to the Bottom of this block"
                                checked={!!attributes.seperatorBottom}
                                onChange={(newval) => setAttributes({ seperatorBottom: !attributes.seperatorBottom })}
                            />
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
                                    { label: 'Size of gutter', value: 'pt-gutter' },
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
                                    { label: 'Size of gutter', value: 'pb-gutter' },
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
                                    { label: 'Size of gutter', value: 'mt-gutter' },
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
                                    { label: 'Size of gutter', value: 'mb-gutter' },
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

