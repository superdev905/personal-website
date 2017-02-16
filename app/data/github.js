import moment from 'moment';

// Keys returned by the github api
export const githubKeys = [
  'stargazers_count',
  'watchers_count',
  'forks',
  'open_issues_count',
  'subscribers_count',
  'pushed_at',
];

// TODO To be provided by an API
const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    value: '0',
    link: 'https://github.com/mldangelo/mldangelo/stargazers',
  }, {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    value: '1',
    link: 'https://github.com/mldangelo/mldangelo/stargazers',
  }, {
    label: 'Number of forks',
    key: 'forks',
    value: '0',
    link: 'https://github.com/mldangelo/mldangelo/network',
  }, {
    label: 'Number of spoons',
    value: '0',
  }, {
    label: 'Number of linter warnings',
    // `npm run lint | grep problems | tail -1 | awk '{print $2}'`
    value: '0', // TODO Update from travis / circle
  }, {
    label: 'Open github issues',
    key: 'open_issues_count',
    value: '0',
    link: 'https://github.com/mldangelo/mldangelo/issues',
  }, {
    label: 'Last updated at',
    key: 'pushed_at',
    value: moment().format('MMMM Do YYYY'),
    link: 'https://github.com/mldangelo/mldangelo/commits',
  },
  { /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '1829',
    link: 'https://github.com/mldangelo/mldangelo/graphs/contributors',
  },
];

/* // TODO Add these fields later
{
 label: 'languages used',
 value: '6',
}, {
 label: 'number of contributors',
 value: '1',
 link: 'https://github.com/mldangelo/mldangelo/graphs/contributors',
},
*/

export default data;
