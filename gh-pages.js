import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/ankushKun/ankushKun.github.io.git', // Update to point to your repository
        user: {
            name: 'Ankush Singh', // update to use your name
            email: 'ankush4singh@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);