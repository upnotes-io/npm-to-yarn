export const NPM_KEYWORDS = ['npm', 'install']
export const YARN_KEYWORDS = ['']


// migration doc link - https://classic.yarnpkg.com/lang/en/docs/migrating-from-npm/ 
export const NPM_TO_YARN: {[key: string]: string} = {
    'npm': 'yarn',
    'install': 'add',
    '--no-package-lock': '--no-lock-file',
    '--save-dev': '--dev',
    '--save-optional': '--optional',
    '--save-exact': '--exact',
    '--global': 'global', // need to plan order
    'update': 'upgrade', // need to plan order
    'rebuild': '--force', // need to plan order 
    'uninstall': 'remove',
    'major': '--major',
    'minor': '--minor',
    'patch': '--patch',
    'explain': 'why',
}