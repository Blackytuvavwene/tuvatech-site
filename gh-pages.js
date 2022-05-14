var ghpages = require('gh-pages');

ghpages.publish(
    'public', {
        branch: 'gh-pages',
        repo: 'https://github.com/Blackytuvavwene/tuvatech.git',
        user: {
            name: 'Boitumelo Tubabwene',
            email: 'btexblacky@gmail.com'
        }
    },
    function() {
        console.log('Deployed Successfully');
    }
);