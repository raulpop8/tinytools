```md
## Git workflow

# for new projects
	git init
	git add .
	git commit -m “Initial Project Setup”
	git branch -M main
	git remote add origin https://github.com/raulpop8/gmail-theme-switcher-firefox.git
	git push -u origin main

# push changes on GitHub
	git status (git sees your change, but it’s not ready to be saved yet)
	git add . (include these changes in the next commit.)
	git commit -m “describe what changed”
	git push

# set a default to git automatically rebase when pull
	git config pull.rebase true

# pull the latest changes from GitHub
	git pull origin main --rebase

# server start
	npm run dev

## Next.js App Router
- page.tsx = route
- layout.tsx = shared UI
- components = reusable
