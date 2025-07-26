# Enable GitHub Pages - Step by Step Guide

## The Issue
You're seeing "There isn't a GitHub Pages site here" because GitHub Pages hasn't been enabled in your repository settings yet.

## Step-by-Step Solution

### Step 1: Go to Repository Settings
1. Go to your repository: `https://github.com/Just-Curieous/Just-Curieous.github.io`
2. Click on the **Settings** tab (not the Code tab)

### Step 2: Find Pages Section
1. In the left sidebar, scroll down and click on **Pages**
2. You should see a section that says "GitHub Pages"

### Step 3: Configure Source
1. Under **Source**, you should see a dropdown
2. Click the dropdown and select **"GitHub Actions"**
3. **DO NOT** select "Deploy from a branch" - this is the old method

### Step 4: Save Settings
1. Click **Save** button
2. You should see a message that GitHub Pages is being set up

### Step 5: Check Actions Tab
1. Go to the **Actions** tab in your repository
2. You should see a "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)

### Step 6: Access Your Site
Once the workflow completes successfully, your site will be available at:
`https://just-curieous.github.io/Just-Curieous.github.io/`

## Visual Guide

```
Repository → Settings → Pages → Source: GitHub Actions → Save
```

## Troubleshooting

### If you don't see the Pages option:
- Make sure you're the repository owner or have admin access
- Check that you're in the Settings tab, not Code tab

### If GitHub Actions isn't an option:
- Make sure you have the `.github/workflows/deploy.yml` file in your repository
- Try refreshing the page

### If the workflow fails:
- Check the Actions tab for error messages
- Make sure all files are committed and pushed

## Important Notes

- **Repository name matters**: Your site URL will be `https://just-curieous.github.io/Just-Curieous.github.io/`
- **First deployment takes time**: Wait 5-10 minutes for the first deployment
- **Subsequent updates**: Will be automatic when you push to main branch

## Still Having Issues?

If you still can't find the Pages option or are having trouble:
1. Make sure you're logged into the correct GitHub account
2. Verify you have admin access to the repository
3. Check that the repository is public (GitHub Pages requires public repos for free accounts) 