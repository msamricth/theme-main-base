/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export default function Header() {
	return (
		<div
			className="thememainFooter-header"
			role="region"
			aria-label={ __( 'Standalone Editor top bar.', 'thememainFooter' ) }
			tabIndex="-1"
		>
			<h1 className="thememainFooter-header__title">
				{ __( 'Standalone Block Editor', 'thememainFooter' ) }
			</h1>
		</div>
	);
}
