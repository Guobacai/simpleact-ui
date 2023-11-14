import React from 'react';
import { Breadcrumb, BreadcrumbProp } from '../Breadcrumb';

const TabsStories = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export default TabsStories;

const breadcrumbs: BreadcrumbProp[] = [
  { id: 1, title: 'Google' },
  { id: 2, title: 'Home' },
  { id: 3, title: 'Secondary', disabled: true },
  { id: 4, title: 'Tertiary' },
  { id: 5, title: 'Quaternary' },
  { id: 6, title: 'Subpage' },
  { id: 7, title: 'Current Page' },
];

export const BreadcrumbStories = () => (
  <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
);

BreadcrumbStories.storyName = 'Full Breadcrumbs';

export const TruncatedBreadcrumbStories = () => (
  <div>
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} truncateItems></Breadcrumb>
    </div>
    <div>
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        truncateItems={{ before: 4, after: 1 }}
      ></Breadcrumb>
    </div>
  </div>
);

TruncatedBreadcrumbStories.storyName = 'Truncated Breadcrumbs';

const breadcrumbsWithLongName: BreadcrumbProp[] = [
  { id: 1, title: 'Google' },
  { id: 2, title: 'Home' },
  { id: 3, title: 'Secondary', disabled: true },
  { id: 4, title: 'Tertiary' },
  { id: 5, title: 'Quaternary Long Name' },
  { id: 6, title: 'Subpage' },
  { id: 7, title: 'Current Page' },
];

export const BreadcrumbStoriesWithLongName = () => (
  <Breadcrumb
    breadcrumbs={breadcrumbsWithLongName}
    truncateText={10}
  ></Breadcrumb>
);

BreadcrumbStoriesWithLongName.storyName = 'Breadcrumbs with long name';

const breadcrumbsWithStates: BreadcrumbProp[] = [
  { id: 1, title: 'Enabled' },
  { id: 2, title: 'Hover' },
  { id: 3, title: 'Active' },
  { id: 4, title: 'Focus' },
  { id: 5, title: 'Visited', visited: true },
  { id: 6, title: 'Disabled', disabled: true },
  { id: 7, title: 'Read Only' },
];

export const BreadcrumbStateStories = () => (
  <Breadcrumb breadcrumbs={breadcrumbsWithStates}></Breadcrumb>
);

BreadcrumbStateStories.storyName = 'Breadcrumbs with different states';

export const BreadcrumbSizeStories = () => (
  <div>
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} size="lg"></Breadcrumb>
    </div>
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
    </div>
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} size="sm"></Breadcrumb>
    </div>
  </div>
);

BreadcrumbSizeStories.storyName = 'Breadcrumbs Sizes';
