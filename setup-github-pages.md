# GitHub Pages Setup Guide

## Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: `https://github.com/[your-username]/Just-Curieous.github.io`
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

## Step 2: Push Your Code

Make sure all your changes are committed and pushed:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

## Step 3: Check GitHub Actions

1. Go to **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait for it to complete successfully

## Step 4: Access Your Site

Once deployment is complete, your site will be available at:
`https://[your-username].github.io/Just-Curieous.github.io/`

## Troubleshooting

### If Actions fail:
1. Check the Actions tab for error messages
2. Ensure all files are committed
3. Verify the workflow file is in `.github/workflows/deploy.yml`

### If site doesn't load:
1. Wait 5-10 minutes for DNS propagation
2. Check if the deployment completed successfully
3. Verify the URL matches your repository name exactly

### Common Issues:
- Repository name must match exactly: `Just-Curieous.github.io`
- Main branch must be named `main` (not `master`)
- All dependencies must be in `package.json` 