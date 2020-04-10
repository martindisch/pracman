import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';

const Header = () => (
  <>
    <SimpleTopAppBar
      title="test"
      navigationIcon
      onNav={() => console.log('Navigate')}
      actionItems={[
        {
          icon: 'file_download',
          onClick: () => console.log('Do Something'),
        },
        { icon: 'print', onClick: () => console.log('Do Something') },
        { icon: 'bookmark', onClick: () => console.log('Do Something') },
      ]}
    />
    <TopAppBarFixedAdjust />
  </>
);

export default Header;
