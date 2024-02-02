// saveAttribute.js
import { enableSidebarSelectOnBlocks } from './blockList';

import classnames from 'classnames';

export const saveSidebarSelectAttribute = (extraProps, blockType, attributes) => {
    if (enableSidebarSelectOnBlocks.includes(blockType.name)) {
        let foldBackgroundColor = attributes.backgroundColor;
        let foldColor = attributes.color;
        let classes,
            addClasses,
            turnOnFold;
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
            seperatorBottom
        } = attributes;

        if (matchNavBackground) {
            turnOnFold = 1;
            addClasses = 1;

            if (foldColor) {
                classes = classes + ' colorMatch_' + foldColor;
            }
            if (foldBackgroundColor) {
                classes = classes + '  match-nav match_' + foldBackgroundColor;
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
            classes = classes + ' d-none d-md-inherit';
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
            extraProps.style = { backgroundImage: `url('${backgroundImage}')` };
            classes = classes + ' has-background-image';
        }

        if (addClasses) {
            extraProps.className = classnames(extraProps.className, classes);
        }
    }

    return extraProps;
};
