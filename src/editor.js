import {
	Popover,
	SlotFillProvider,
	DropZoneProvider,
	navigateRegions,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import Notices from '././components/notices/index';
import Header from './components/header/index';
import Sidebar from './components/sidebar/index';
import BlockEditor from './components/block-editor/index';

function Editor( { settings } ) {
	return (
		<SlotFillProvider>
			<DropZoneProvider>
				<div className="thememainFooter-block-editor-layout">
					<Notices />
					<Header />
					<Sidebar />
					<BlockEditor settings={ settings } />
				</div>
				<Popover.Slot />
			</DropZoneProvider>
		</SlotFillProvider>
	);
}

export default navigateRegions( Editor );
