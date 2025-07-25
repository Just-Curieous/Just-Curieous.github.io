# Verify GitHub Pages Deployment

## How to Ensure GitHub Pages Shows Content from `out/`

### 1. Check GitHub Actions Workflow
The workflow is correctly configured to deploy from `out/`:
```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./out  # This is the key line!
```

### 2. Verify Local Build
Run this to ensure `out/` contains the correct files:
```bash
npm run build
ls -la out/
```

You should see:
- `index.html` (homepage)
- `contact.html` (contact page)
- `blog/` directory (blog posts)
- `_next/` directory (static assets)
- All images and other assets

### 3. Check GitHub Actions Logs
1. Go to your repository → Actions tab
2. Click on the latest "Deploy to GitHub Pages" run
3. Check the "Upload artifact" step
4. It should show files being uploaded from `out/`

### 4. Verify GitHub Pages Settings
1. Go to repository Settings → Pages
2. Source should be "GitHub Actions"
3. The deployment should show the latest commit

### 5. Test Your Site
Your site should be available at:
`https://just-curieous.github.io/Just-Curieous.github.io/`

### 6. If Content Doesn't Match
If GitHub Pages isn't showing the latest content:

1. **Check the Actions tab** - ensure the latest workflow completed successfully
2. **Wait 5-10 minutes** - GitHub Pages can take time to update
3. **Clear browser cache** - try incognito mode
4. **Check the deployment URL** - it should match your repository name exactly

### 7. Force a New Deployment
To trigger a new deployment:
```bash
git add .
git commit -m "Update content"
git push origin main
```

This will trigger the GitHub Actions workflow and deploy the latest `out/` content. 