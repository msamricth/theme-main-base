<?php
/**
 * Plugin Name:       Theme Main Base Functions
 * Description:       Adds custom functionality to the Theme Maim wordpress theme.
 * Plugin URI:        https://github.com/msamricth/theme-main-base
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Emm Talarico
 * Author URI:        https://github.com/msamricth
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       theme-main-base
 *
 * @package           create-block
 */
if (!defined('ABSPATH')) exit; // Exit if accessed directly

if (!defined('CUSTOM_ATTRIBUTES_PATH')) {
    define('CUSTOM_ATTRIBUTES_PATH', plugin_dir_path(__FILE__));
}
if (!defined('CUSTOM_ATTRIBUTES_URL')) {
    define('CUSTOM_ATTRIBUTES_URL', plugin_dir_url(__FILE__));
}

function theme_main_editor_scripts() {
    // Check if we are on the widgets.php page in wp-admin
    $screen = get_current_screen();
    if ($screen && $screen->id === 'widgets') {
        // Enqueue your 'custom-attributes-widgets' script with proper dependencies for the widgets page
        wp_enqueue_script(
            'custom-attributes-widgets',
            CUSTOM_ATTRIBUTES_URL . 'build/index.js',
            ['wp-blocks', 'wp-dom', 'wp-dom-ready', 'wp-edit-widgets', 'acf'],
            filemtime(CUSTOM_ATTRIBUTES_PATH . 'build/index.js')
        );
        return;
    }

    // Enqueue your 'custom-attributes' script with proper dependencies for the block editor
    wp_enqueue_script(
        'custom-attributes',
        CUSTOM_ATTRIBUTES_URL . 'build/index.js',
        ['wp-blocks', 'wp-dom', 'wp-dom-ready', 'wp-edit-post', 'acf'],
        filemtime(CUSTOM_ATTRIBUTES_PATH . 'build/index.js')
    );
}

add_action('enqueue_block_editor_assets', 'theme_main_editor_scripts');
