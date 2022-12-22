export const NPM_KEYWORDS = ['npm', 'install']
export const YARN_KEYWORDS = ['']

export const NPM_TO_YARN = {
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