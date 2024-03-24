/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/disableBlocks.js":
/*!*************************************!*\
  !*** ./src/blocks/disableBlocks.js ***!
  \*************************************/
/***/ (() => {

wp.domReady(() => {
  //   wp.blocks.unregisterBlockType( 'core/columns');
  //wp.blocks.unregisterBlockType( 'core/column');
});

/***/ }),

/***/ "./src/blocks/sidebarSettings.js":
/*!***************************************!*\
  !*** ./src/blocks/sidebarSettings.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/setAttributes */ "./src/blocks/sidebar/setAttributes.js");
/* harmony import */ var _sidebar_withSidebarSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/withSidebarSelect */ "./src/blocks/sidebar/withSidebarSelect.js");
/* harmony import */ var _sidebar_withSidebarSelectProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/withSidebarSelectProp */ "./src/blocks/sidebar/withSidebarSelectProp.js");
/* harmony import */ var _sidebar_saveAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/saveAttributes */ "./src/blocks/sidebar/saveAttributes.js");





/* Add custom attribute to image block, in Sidebar */
const {
  __
} = wp.i18n;
wp.hooks.addFilter('blocks.registerBlockType', 'custom-attributes/set-sidebar-select-attribute', _sidebar_setAttributes__WEBPACK_IMPORTED_MODULE_0__.setSidebarSelectAttribute);
wp.hooks.addFilter('editor.BlockEdit', 'custom-attributes/with-sidebar-select', _sidebar_withSidebarSelect__WEBPACK_IMPORTED_MODULE_1__.withSidebarSelect);
wp.hooks.addFilter('editor.BlockListBlock', 'custom-attributes/with-sidebar-select-prop', _sidebar_withSidebarSelectProp__WEBPACK_IMPORTED_MODULE_2__.withSidebarSelectProp);
wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'custom-attributes/save-sidebar-select-attribute', _sidebar_saveAttributes__WEBPACK_IMPORTED_MODULE_3__.saveSidebarSelectAttribute);

/***/ }),

/***/ "./src/blocks/sidebar/blockList.js":
/*!*****************************************!*\
  !*** ./src/blocks/sidebar/blockList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableSidebarSelectOnBlocks: () => (/* binding */ enableSidebarSelectOnBlocks)
/* harmony export */ });
// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = ['acf/media', 'acf/base', 'core/paragraph', 'core/image', 'core/heading', 'core/gallery', 'core/list', 'core/group', 'core/quote', 'core/audio', 'core/cover', 'acf/social-media-nav', 'acf/content-slider', 'core/file', 'acf/footer-nav', 'core/video', 'core/table', 'core/verse', 'core/code', 'core/freeform', 'core/html', 'core/preformatted', 'core/pullquote', 'core/button', 'core/buttons', 'core/columns', 'core/media-text', 'core/more', 'core/nextpage', 'core/separator', 'core/spacer', 'core/shortcode', 'core/archives', 'ore/categories', 'core/latest-comments', 'core/latest-posts', 'core/calendar', 'core/rss', 'core/search', 'core/tag-cloud', 'core/embed', 'core-embed/twitter', 'core-embed/youtube', 'core-embed/facebook', 'core-embed/instagram', 'core-embed/wordpress', 'core-embed/soundcloud', 'core-embed/spotify', 'core-embed/flickr', 'core/list-item', 'core-embed/vimeo', 'core-embed/animoto', 'core-embed/cloudup', 'core-embed/collegehumor', 'core-embed/dailymotion', 'core-embed/funnyordie', 'core-embed/hulu', 'core-embed/imgur', 'core-embed/issuu', 'core-embed/kickstarter', 'core-embed/meetup-com', 'core-embed/mixcloud', 'core-embed/photobucket', 'core-embed/polldaddy', 'core-embed/reddit', 'core-embed/reverbnation', 'core-embed/screencast', 'core-embed/scribd', 'core-embed/slideshare', 'core-embed/smugmug', 'core-embed/speaker', 'core-embed/ted', 'core-embed/tumblr', 'core-embed/videopress', 'core-embed/wordpress-tv', 'wp-bootstrap-blocks/container', 'wp-bootstrap-blocks/row', 'wp-bootstrap-blocks/column', 'acf/floating-cta', 'acf/card', 'acf/card-grid', 'acf/stats', 'acf/half-screen', 'acf/content-loop', 'acf/logo-carousel', 'acf/contact-form-7', 'acf/staff-card', 'core/post-title', 'acf/accordion-or-tabs', 'acf/word-fumbler', 'acf/content-slider-gutenberg-slide', 'acf/big-list', 'acf/big-list-item', 'airtable-wp/dynamic-form-builder', 'acf/header-block', 'acf/lottie-motion', 'acf/image'];


/***/ }),

/***/ "./src/blocks/sidebar/saveAttributes.js":
/*!**********************************************!*\
  !*** ./src/blocks/sidebar/saveAttributes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveSidebarSelectAttribute: () => (/* binding */ saveSidebarSelectAttribute)
/* harmony export */ });
/* harmony import */ var _blockList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockList */ "./src/blocks/sidebar/blockList.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
// saveAttribute.js


const saveSidebarSelectAttribute = (extraProps, blockType, attributes) => {
  if (_blockList__WEBPACK_IMPORTED_MODULE_0__.enableSidebarSelectOnBlocks.includes(blockType.name)) {
    let foldBackgroundColor = attributes.backgroundColor;
    let foldColor = attributes.textColor;
    let classes = '',
      addClasses,
      turnOnFold;
    const {
      matchNavBackground,
      blockAnimation,
      animationDelay,
      fullHeight,
      fullWidth,
      hideMobile,
      hideTablet,
      hideDesktop,
      topPadding,
      bottomPadding,
      topMargin,
      bottomMargin,
      backgroundImage,
      // Added for background image
      seperatorTop,
      seperatorBottom
    } = attributes;
    if (matchNavBackground) {
      turnOnFold = 1;
      addClasses = 1;
      if (foldColor) {
        //    classes = classes + ' colorMatch_' + foldColor;
      }
      if (foldBackgroundColor) {
        classes = classes + '  match-nav match_' + foldBackgroundColor;
      }
    }
    if (blockAnimation) {
      turnOnFold = 1;
      classes = classes + '  animation-on ' + blockAnimation;
      addClasses = 1;
      if (animationDelay) {
        classes = classes + '  animation-delay-' + animationDelay;
      }
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
      extraProps.style = {
        backgroundImage: `url('${backgroundImage}')`
      };
      classes = classes + ' has-background-image';
    }
    if (addClasses) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(extraProps.className, classes);
    }
  }
  return extraProps;
};

/***/ }),

/***/ "./src/blocks/sidebar/setAttributes.js":
/*!*********************************************!*\
  !*** ./src/blocks/sidebar/setAttributes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSidebarSelectAttribute: () => (/* binding */ setSidebarSelectAttribute)
/* harmony export */ });
/* harmony import */ var _blockList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockList */ "./src/blocks/sidebar/blockList.js");
// setAttributes.js

const setSidebarSelectAttribute = (settings, name) => {
  if (!_blockList__WEBPACK_IMPORTED_MODULE_0__.enableSidebarSelectOnBlocks.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      matchNavBackground: {
        type: 'boolean'
      },
      fullWidth: {
        type: 'boolean'
      },
      fullHeight: {
        type: 'boolean'
      },
      hideMobile: {
        type: 'boolean'
      },
      hideTablet: {
        type: 'boolean'
      },
      hideDesktop: {
        type: 'boolean'
      },
      seperatorTop: {
        type: 'boolean'
      },
      seperatorBottom: {
        type: 'boolean'
      },
      blockAnimation: {
        type: 'string'
      },
      animationDelay: {
        type: 'string'
      },
      topPadding: {
        type: 'string'
      },
      bottomPadding: {
        type: 'string'
      },
      topMargin: {
        type: 'string'
      },
      bottomMargin: {
        type: 'string'
      },
      backgroundImage: {
        type: 'string'
      } // Added line for background image
    })
  });
};

/***/ }),

/***/ "./src/blocks/sidebar/withSidebarSelect.js":
/*!*************************************************!*\
  !*** ./src/blocks/sidebar/withSidebarSelect.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withSidebarSelect: () => (/* binding */ withSidebarSelect)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockList */ "./src/blocks/sidebar/blockList.js");
/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setAttributes */ "./src/blocks/sidebar/setAttributes.js");

// withSidebarSelect.js


const {
  __
} = wp.i18n;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls,
  InspectorAdvancedControls,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const {
  ToggleControl,
  PanelBody,
  TextControl,
  RadioControl,
  CheckboxControl,
  SelectControl,
  Button
} = wp.components;
const withSidebarSelect = createHigherOrderComponent(BlockEdit => {
  return props => {
    if (!_blockList__WEBPACK_IMPORTED_MODULE_1__.enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      matchNavBackground,
      blockAnimation,
      animationDelay,
      fullHeight,
      fullWidth,
      hideMobile,
      hideTablet,
      hideDesktop,
      topPadding,
      bottomPadding,
      topMargin,
      bottomMargin,
      backgroundImage,
      seperatorTop,
      seperatorBottom
    } = attributes;
    function onChangeBlockAnimation(newValue) {
      setAttributes({
        blockAnimation: newValue
      });
    }
    function onChangeAnimationDelay(newValue) {
      setAttributes({
        animationDelay: newValue
      });
    }
    function onChangeTopPadding(newValue) {
      setAttributes({
        topPadding: newValue
      });
    }
    function onChangeBottomPadding(newValue) {
      setAttributes({
        bottomPadding: newValue
      });
    }
    function onChangeTopMargin(newValue) {
      setAttributes({
        topMargin: newValue
      });
    }
    function onChangeBottomMargin(newValue) {
      setAttributes({
        bottomMargin: newValue
      });
    }
    // Add new function for changing background image
    function onChangeBackgroundImage(newImage) {
      setAttributes({
        backgroundImage: newImage.sizes.full.url
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Theme Main Base')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Block Settings')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Match Nav Background on scroll', 'emm-bootstrap-base'),
      checked: !!attributes.matchNavBackground,
      onChange: newval => setAttributes({
        matchNavBackground: !attributes.matchNavBackground
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Make Full Width', 'emm-bootstrap-base'),
      help: "Make this block go edge to edge (good for Background colors)",
      checked: !!attributes.fullWidth,
      onChange: newval => setAttributes({
        fullWidth: !attributes.fullWidth
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Make Full Height', 'emm-bootstrap-base'),
      help: "Make this block go edge to edge (good for Background colors)",
      checked: !!attributes.fullHeight,
      onChange: newval => setAttributes({
        fullHeight: !attributes.fullHeight
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Animate this block",
      value: blockAnimation,
      options: [{
        label: 'No Animation',
        value: ''
      }, {
        label: 'Fade In',
        value: 'fade-in'
      }, {
        label: 'Slide Up',
        value: 'slide-up'
      }, {
        label: 'Bounce In',
        value: 'bounce-in'
      }, {
        label: 'Bounce In Forward',
        value: 'bounce-in-fwd'
      }, {
        label: 'Subtle Slide In',
        value: 'subtle-slide-in'
      }, {
        label: 'TEXT: Focus In',
        value: 'text-focus-in'
      }, {
        label: 'TEXT: Tracking In',
        value: 'tracking-in-expand'
      }, {
        label: 'Custom',
        value: 'custom'
      }],
      onChange: onChangeBlockAnimation
    }), blockAnimation !== '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Animation Delay (ex: 600ms, 0.6s)",
      value: animationDelay,
      onChange: onChangeAnimationDelay
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onChangeBackgroundImage,
      allowedTypes: ['image'],
      value: backgroundImage,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        className: "components-button is-primary",
        onClick: open
      }, "Add Background image to block")
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Spacing')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Seperator Top', 'emm-bootstrap-base'),
      help: "Add a seperator line to the top of this block",
      checked: !!attributes.seperatorTop,
      onChange: newval => setAttributes({
        seperatorTop: !attributes.seperatorTop
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Seperator Bottom', 'emm-bootstrap-base'),
      help: "Add a seperator line to the Bottom of this block",
      checked: !!attributes.seperatorBottom,
      onChange: newval => setAttributes({
        seperatorBottom: !attributes.seperatorBottom
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Padding Top",
      value: topPadding,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: 'Smallest',
        value: 'pt-1'
      }, {
        label: 'Small',
        value: 'pt-2'
      }, {
        label: 'Medium',
        value: 'pt-3'
      }, {
        label: 'Large',
        value: 'pt-4'
      }, {
        label: 'Largest',
        value: 'pt-5'
      }, {
        label: 'Size of gutter',
        value: 'pt-gutter'
      }],
      onChange: onChangeTopPadding
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Padding Bottom",
      value: bottomPadding,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: 'Smallest',
        value: 'pb-1'
      }, {
        label: 'Small',
        value: 'pb-2'
      }, {
        label: 'Medium',
        value: 'pb-3'
      }, {
        label: 'Large',
        value: 'pb-4'
      }, {
        label: 'Largest',
        value: 'pb-5'
      }, {
        label: 'Size of gutter',
        value: 'pb-gutter'
      }],
      onChange: onChangeBottomPadding
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Margin Top",
      value: topMargin,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: 'Smallest',
        value: 'mt-1'
      }, {
        label: 'Small',
        value: 'mt-2'
      }, {
        label: 'Medium',
        value: 'mt-3'
      }, {
        label: 'Large',
        value: 'mt-4'
      }, {
        label: 'Largest',
        value: 'mt-5'
      }, {
        label: 'Size of gutter',
        value: 'mt-gutter'
      }],
      onChange: onChangeTopMargin
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Margin Bottom",
      value: bottomMargin,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: 'Smallest',
        value: 'mb-1'
      }, {
        label: 'Small',
        value: 'mb-2'
      }, {
        label: 'Medium',
        value: 'mb-3'
      }, {
        label: 'Large',
        value: 'mb-4'
      }, {
        label: 'Largest',
        value: 'mb-5'
      }, {
        label: 'Size of gutter',
        value: 'mb-gutter'
      }],
      onChange: onChangeBottomMargin
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Visibility')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Hide on Mobile', 'emm-bootstrap-base'),
      checked: !!attributes.hideMobile,
      onChange: newval => setAttributes({
        hideMobile: !attributes.hideMobile
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Hide on Tablet', 'emm-bootstrap-base'),
      checked: !!attributes.hideTablet,
      onChange: newval => setAttributes({
        hideTablet: !attributes.hideTablet
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Hide on Desktop', 'emm-bootstrap-base'),
      checked: !!attributes.hideDesktop,
      onChange: newval => setAttributes({
        hideDesktop: !attributes.hideDesktop
      })
    })))));
  };
}, 'withSidebarSelect');

/***/ }),

/***/ "./src/blocks/sidebar/withSidebarSelectProp.js":
/*!*****************************************************!*\
  !*** ./src/blocks/sidebar/withSidebarSelectProp.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withSidebarSelectProp: () => (/* binding */ withSidebarSelectProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blockList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockList */ "./src/blocks/sidebar/blockList.js");
/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setAttributes */ "./src/blocks/sidebar/setAttributes.js");


// withSidebarSelectProp.js


const {
  createHigherOrderComponent
} = wp.compose;
const withSidebarSelectProp = createHigherOrderComponent(BlockListBlock => {
  return props => {
    let classes, addClasses, turnOnFold;
    if (!_blockList__WEBPACK_IMPORTED_MODULE_2__.enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
    let foldBackgroundColor = props.attributes.backgroundColor;
    let foldColor = props.attributes.textColor;
    if (foldColor) {
      foldColor = foldColor.toString();
    }
    if (foldBackgroundColor) {
      foldBackgroundColor = foldBackgroundColor.toString();
    }
    const {
      attributes
    } = props;
    const {
      matchNavBackground,
      blockAnimation,
      animationDelay,
      fullHeight,
      fullWidth,
      hideMobile,
      hideTablet,
      hideDesktop,
      topPadding,
      bottomPadding,
      topMargin,
      bottomMargin,
      backgroundImage,
      // Added for background image
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
        classes = classes + ' match-nav match_' + foldBackgroundColor;
      }
    }
    if (blockAnimation) {
      turnOnFold = 1;
      classes = classes + '  animation-on ' + blockAnimation;
      addClasses = 1;
      if (animationDelay) {
        classes = classes + '  animation-delay-' + animationDelay;
      }
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
      props.style = {
        backgroundImage: `url('${backgroundImage}')`
      };
    }
    if (addClasses) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: classes,
        "data-class": foldBackgroundColor
      }));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
  };
}, 'withSidebarSelectProp');

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_disableBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/disableBlocks */ "./src/blocks/disableBlocks.js");
/* harmony import */ var _blocks_disableBlocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_disableBlocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_sidebarSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/sidebarSettings */ "./src/blocks/sidebarSettings.js");


})();

/******/ })()
;
//# sourceMappingURL=index.js.map