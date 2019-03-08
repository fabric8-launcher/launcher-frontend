import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { storiesOf } from '@storybook/react';
import { LauncherClientProvider } from '../..';
import { LaunchNextSteps } from '../launch-next-steps';
import { action } from '@storybook/addon-actions';
import { DownloadNextSteps } from '../download-next-steps';

storiesOf('Misc', module)
  .addDecorator((storyFn) => (
    <LauncherClientProvider>
      {storyFn()}
    </LauncherClientProvider>
  ))
  .add('LaunchNextSteps', () => {
    return (
      <LaunchNextSteps onClose={action('close')}/>
    );
  })
  .add('DownloadNextSteps', () => {
    return (
      <DownloadNextSteps onClose={action('close')}/>
    );
  });
