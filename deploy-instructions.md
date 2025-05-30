# Deploy to GitHub Pages with Custom Domain

## Step 1: Download Project Files
1. Download all files from this Replit project
2. Extract to a local folder on your computer

## Step 2: Create GitHub Repository
1. Go to github.com and create a new repository
2. Name it something like "williamjordan-website"
3. Make it public
4. Don't initialize with README (you'll upload files)

## Step 3: Upload Files to GitHub
1. Upload all your project files to the repository
2. Make sure to include the `client/` folder and all its contents

## Step 4: Configure GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Set Source to "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click Save

## Step 5: Add Custom Domain
1. In the same Pages settings
2. Add "williamjordan.io" in the Custom domain field
3. GitHub will create a CNAME file

## Step 6: Update DNS at Squarespace
Replace your current DNS records with:

**For Apex Domain (@):**
- Type: A
- Host: @
- Points to: 185.199.108.153
- Also add: 185.199.109.153, 185.199.110.153, 185.199.111.153

**For WWW subdomain:**
- Type: CNAME
- Host: www
- Points to: yourusername.github.io

## Step 7: Wait for Propagation
- DNS changes take 24-48 hours maximum
- Your site will be live at williamjordan.io

## Note about Static Files
Since this is a React app, you'll need to build it first. Let me help you prepare the build configuration.