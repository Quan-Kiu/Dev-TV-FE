import { FormattedMessage } from 'react-intl';

export const jobForm = [
    <div
        style={{
            color: 'green',
            fontSize: '11px',
            textTransform: 'uppercase',
        }}
    >
        <FormattedMessage id="job.fulltime" />
    </div>,
    <div
        style={{
            color: 'purple',
            fontSize: '11px',
            textTransform: 'uppercase',
        }}
    >
        <FormattedMessage id="job.parttime" />
    </div>,
    <div
        style={{
            color: 'red',
            fontSize: '11px',
            textTransform: 'uppercase',
        }}
    >
        <FormattedMessage id="job.freelancer" />
    </div>,
];
