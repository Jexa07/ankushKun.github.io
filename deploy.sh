git add .
git commit -m "$1"
git push
rm -rf public
hugo -D
node gh-pages.js