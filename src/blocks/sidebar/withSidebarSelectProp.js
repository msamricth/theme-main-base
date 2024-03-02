// withSidebarSelectProp.js
import { enableSidebarSelectOnBlocks } from './blockList';
import { setSidebarSelectAttribute } from './setAttributes';

const { createHigherOrderComponent } = wp.compose;

export const withSidebarSelectProp = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        let classes,
            addClasses,
            turnOnFold;

        if (!enableSidebarSelectOnBlocks.includes(props.name)) {
            return <BlockListBlock {...props} />;
        }

        let foldBackgroundColor = props.attributes.backgroundColor;
        let foldColor = props.attributes.color;
        if (foldColor) {
            foldColor = foldColor.toString();
        }
        if (foldBackgroundColor) {
            foldBackgroundColor = foldBackgroundColor.toString();
        }
        const { attributes } = props;
        const {
            matchNavBackground,
            blockAnimation,
            fullHeight,
            fullWidth,
            hideMobile,
            hideTablet,
            hideDesktop,
            topPadding,
            bottomPadding,
            topMargin,
            bottomMargin,
            backgroundImage, // Added for background image
            seperatorTop,
            seperatorBottom,
        } = attributes;

        if (matchNavBackground) {
            turnOnFold = 1;
            addClasses = 1;
            if (foldColor) {
                classes = classes + ' colorMatch_' + foldColor;
            }
            if (foldBackgroundColor) {
                classes = classes + ' match-nav match_' + foldBackgroundColor;
            }
        }
        if (blockAnimation) {
            turnOnFold = 1;
            classes = classes + '  animation-on ' + blockAnimation;
            addClasses = 1;
        }
        if (turnOnFold) {
            classes = classes + ' fold';
            addClasses = 1;
        }
        if (fullHeight) {
            classes = classes + ' full-height';
            addClasses = 1;
        }
        if (fullWidth) {
            classes = classes + ' full-width';
            addClasses = 1;
        }
        if (hideMobile) {
            classes = classes + ' d-none';
            addClasses = 1;
        }
        if (hideTablet) {
            classes = classes + ' d-inherit d-md-none d-xl-inherit';
            addClasses = 1;
        }
        if (hideDesktop) {
            classes = classes + ' d-xl-none';
            addClasses = 1;
        }
        if (topPadding) {
            classes = classes + ' ' + topPadding;
            addClasses = 1;
        }
        if (bottomPadding) {
            classes = classes + ' ' + bottomPadding;
            addClasses = 1;
        }
        if (seperatorTop) {
            classes = classes + '  sperator-top';
            addClasses = 1;
        }
        if (seperatorBottom) {
            classes = classes + ' sperator-bottom';
            addClasses = 1;
        }
        if (topMargin) {
            classes = classes + ' ' + topMargin;
            addClasses = 1;
        }
        if (bottomMargin) {
            classes = classes + ' ' + bottomMargin;
            addClasses = 1;
        }

        // Check if backgroundImage is set
        if (backgroundImage) {
            classes = classes + ' has-background-image';
            addClasses = 1;
            props.style = { backgroundImage: `url('${backgroundImage}')` };
        }

        if (addClasses) {
            return <BlockListBlock {...props} className={classes} data-class={foldBackgroundColor} />;
        } else {
            return <BlockListBlock {...props} />;
        }
    };
}, 'withSidebarSelectProp');